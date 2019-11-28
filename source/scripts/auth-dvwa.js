// The authenticate function is called whenever ZAP requires to authenticate, for a Context for which this script
// was selected as the Authentication Method. The function should send any messages that are required to do the authentication
// and should return a message with an authenticated response so the calling method.
//
// NOTE: Any message sent in the function should be obtained using the 'helper.prepareMessage()' method.
//
// Parameters:
//		helper - a helper class providing useful methods: prepareMessage(), sendAndReceive(msg)
//		paramsValues - the values of the parameters configured in the Session Properties -> Authentication panel.
//					The paramsValues is a map, having as keys the parameters names (as returned by the getRequiredParamsNames()
//					and getOptionalParamsNames() functions below)
//		credentials - an object containing the credentials values, as configured in the Session Properties -> Users panel.
//					The credential values can be obtained via calls to the getParam(paramName) method. The param names are the ones
//					returned by the getCredentialsParamsNames() below
function authenticate(helper, paramsValues, credentials) {
  var loginUrl = paramsValues.get("Login URL");
  var csrfTokenName = paramsValues.get("CSRF Field");
  var csrfTokenValue = extractInputFieldValue(getPageContent(helper, loginUrl), csrfTokenName);
  var postData = paramsValues.get("POST Data");

  postData = postData.replace('{%username%}', encodeURIComponent(credentials.getParam("Username")));
  postData = postData.replace('{%password%}', encodeURIComponent(credentials.getParam("Password")));
  postData = postData.replace('{%' + csrfTokenName + '%}', encodeURIComponent(csrfTokenValue));

  var msg = sendAndReceive(helper, loginUrl, postData);
  return msg;
}

// This function is called during the script loading to obtain a list of the names of the required configuration parameters,
// that will be shown in the Session Properties -> Authentication panel for configuration. They can be used
// to input dynamic data into the script, from the user interface (e.g. a login URL, name of POST parameters etc.)
function getRequiredParamsNames() {
  return [ "Login URL", "CSRF Field", "POST Data" ];
}

// This function is called during the script loading to obtain a list of the names of the optional configuration parameters,
// that will be shown in the Session Properties -> Authentication panel for configuration. They can be used
// to input dynamic data into the script, from the user interface (e.g. a login URL, name of POST parameters etc.)
function getOptionalParamsNames() {
  return [];
}

// This function is called during the script loading to obtain a list of the names of the parameters that are required,
// as credentials, for each User configured corresponding to an Authentication using this script
function getCredentialsParamsNames() {
  return [ "Username", "Password" ];
}

function getPageContent(helper, url) {
  var msg = sendAndReceive(helper, url);
  return msg.getResponseBody().toString();
}

function sendAndReceive(helper, url, postData) {
  var msg = helper.prepareMessage();

  var method = "GET";
  if (postData) {
    method = "POST";
    msg.setRequestBody(postData);
  }

  var requestUri = new org.apache.commons.httpclient.URI(url, true);
  var requestHeader = new org.parosproxy.paros.network.HttpRequestHeader(method, requestUri, "HTTP/1.0");
  msg.setRequestHeader(requestHeader);

  helper.sendAndReceive(msg);

  return msg;
}

function extractInputFieldValue(page, fieldName) {
  // Rhino:
  //var src = new net.htmlparser.jericho.Source(page);
  // Nashorn:
  var Source = Java.type("net.htmlparser.jericho.Source");
  var src = new Source(page);

  var it = src.getAllElements('input').iterator();

  while (it.hasNext()) {
    var element = it.next();
    if (element.getAttributeValue('name') == fieldName) {
      return element.getAttributeValue('value');
    }
  }
  return '';
}
