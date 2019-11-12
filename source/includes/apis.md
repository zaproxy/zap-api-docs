---
title: ZAP API
language_tabs:
  - shell: Shell
  - java: Java
  - python: Python
  - ruby: Ruby
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

#API Catalogue


> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The HTTP API for controlling and accessing ZAP.

Base URLs:

* <a href="http://zap">http://zap</a>

* <a href="http://{address}:{port}">http://{address}:{port}</a>

    * **address** - The address ZAP is listening on. Default: 127.0.0.1

    * **port** - The port ZAP is bound to. Default: 8080

Email: <a href="mailto:zaproxy-users@googlegroups.com">OWASP ZAP User Group</a> Web: <a href="https://groups.google.com/group/zaproxy-users">OWASP ZAP User Group</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **X-ZAP-API-Key**, in: header. 

* API Key (apiKeyQuery)
    - Parameter Name: **apikey**, in: query. 

<h1 id="zap-api-alert">alert</h1>

## alertViewAlert

<a id="opIdalertViewAlert"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/alert/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/alert/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/alert/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/alert/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/alert/`

Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method

<h3 id="alertviewalert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertViewAlerts

<a id="opIdalertViewAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/alerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/alerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/alerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/alerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/alerts/`

Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts

<h3 id="alertviewalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|
|riskId|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertViewAlertsSummary

<a id="opIdalertViewAlertsSummary"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/alertsSummary/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/alertsSummary/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/alertsSummary/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/alertsSummary/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/alertsSummary/`

Gets number of alerts grouped by each risk level, optionally filtering by URL

<h3 id="alertviewalertssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewalertssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertViewNumberOfAlerts

<a id="opIdalertViewNumberOfAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/numberOfAlerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/numberOfAlerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/numberOfAlerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/numberOfAlerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/numberOfAlerts/`

Gets the number of alerts, optionally filtering by URL or riskId

<h3 id="alertviewnumberofalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|riskId|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewnumberofalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertViewAlertsByRisk

<a id="opIdalertViewAlertsByRisk"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/alertsByRisk/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/alertsByRisk/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/alertsByRisk/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/alertsByRisk/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/alertsByRisk/`

Gets a summary of the alerts, optionally filtered by a 'url'. If 'recurse' is true then all alerts that apply to urls that start with the specified 'url' will be returned, otherwise only those on exactly the same 'url' (ignoring url parameters)

<h3 id="alertviewalertsbyrisk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|recurse|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewalertsbyrisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertViewAlertCountsByRisk

<a id="opIdalertViewAlertCountsByRisk"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/view/alertCountsByRisk/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/view/alertCountsByRisk/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/view/alertCountsByRisk/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/view/alertCountsByRisk/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/view/alertCountsByRisk/`

Gets a count of the alerts, optionally filtered as per alertsPerRisk

<h3 id="alertviewalertcountsbyrisk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|recurse|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertviewalertcountsbyrisk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertActionDeleteAllAlerts

<a id="opIdalertActionDeleteAllAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/action/deleteAllAlerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/action/deleteAllAlerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/action/deleteAllAlerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/action/deleteAllAlerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/action/deleteAllAlerts/`

Deletes all alerts of the current session.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertactiondeleteallalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## alertActionDeleteAlert

<a id="opIdalertActionDeleteAlert"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/alert/action/deleteAlert/?id=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/alert/action/deleteAlert/?id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/alert/action/deleteAlert/', params={
  'id': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/alert/action/deleteAlert/',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/alert/action/deleteAlert/`

Deletes the alert with the given ID. 

<h3 id="alertactiondeletealert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="alertactiondeletealert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-acsrf">acsrf</h1>

## acsrfViewOptionTokensNames

<a id="opIdacsrfViewOptionTokensNames"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/acsrf/view/optionTokensNames/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/acsrf/view/optionTokensNames/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/acsrf/view/optionTokensNames/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/acsrf/view/optionTokensNames/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/acsrf/view/optionTokensNames/`

Lists the names of all anti-CSRF tokens

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="acsrfviewoptiontokensnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## acsrfActionAddOptionToken

<a id="opIdacsrfActionAddOptionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/acsrf/action/addOptionToken/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/acsrf/action/addOptionToken/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/acsrf/action/addOptionToken/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/acsrf/action/addOptionToken/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/acsrf/action/addOptionToken/`

Adds an anti-CSRF token with the given name, enabled by default

<h3 id="acsrfactionaddoptiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="acsrfactionaddoptiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## acsrfActionRemoveOptionToken

<a id="opIdacsrfActionRemoveOptionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/acsrf/action/removeOptionToken/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/acsrf/action/removeOptionToken/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/acsrf/action/removeOptionToken/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/acsrf/action/removeOptionToken/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/acsrf/action/removeOptionToken/`

Removes the anti-CSRF token with the given name

<h3 id="acsrfactionremoveoptiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="acsrfactionremoveoptiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## acsrfOtherGenForm

<a id="opIdacsrfOtherGenForm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/acsrf/other/genForm/?hrefId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/acsrf/other/genForm/?hrefId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/acsrf/other/genForm/', params={
  'hrefId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/acsrf/other/genForm/',
  params: {
  'hrefId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/acsrf/other/genForm/`

Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP

<h3 id="acsrfothergenform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hrefId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="acsrfothergenform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-pscan">pscan</h1>

## pscanViewScanOnlyInScope

<a id="opIdpscanViewScanOnlyInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/view/scanOnlyInScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/view/scanOnlyInScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/view/scanOnlyInScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/view/scanOnlyInScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/view/scanOnlyInScope/`

Tells whether or not the passive scan should be performed only on messages that are in scope.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanviewscanonlyinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanViewRecordsToScan

<a id="opIdpscanViewRecordsToScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/view/recordsToScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/view/recordsToScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/view/recordsToScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/view/recordsToScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/view/recordsToScan/`

The number of records the passive scanner still has to scan

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanviewrecordstoscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanViewScanners

<a id="opIdpscanViewScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/view/scanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/view/scanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/view/scanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/view/scanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/view/scanners/`

Lists all passive scanners with its ID, name, enabled state and alert threshold.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanviewscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanViewCurrentRule

<a id="opIdpscanViewCurrentRule"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/view/currentRule/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/view/currentRule/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/view/currentRule/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/view/currentRule/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/view/currentRule/`

Show information about the passive scan rule currently being run (if any).

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanviewcurrentrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanViewMaxAlertsPerRule

<a id="opIdpscanViewMaxAlertsPerRule"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/view/maxAlertsPerRule/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/view/maxAlertsPerRule/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/view/maxAlertsPerRule/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/view/maxAlertsPerRule/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/view/maxAlertsPerRule/`

Gets the maximum number of alerts a passive scan rule should raise.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanviewmaxalertsperrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionSetEnabled

<a id="opIdpscanActionSetEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/setEnabled/?enabled=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/setEnabled/?enabled=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/setEnabled/', params={
  'enabled': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/setEnabled/',
  params: {
  'enabled' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/setEnabled/`

Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).

<h3 id="pscanactionsetenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enabled|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionsetenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionSetScanOnlyInScope

<a id="opIdpscanActionSetScanOnlyInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/setScanOnlyInScope/?onlyInScope=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/setScanOnlyInScope/?onlyInScope=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/setScanOnlyInScope/', params={
  'onlyInScope': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/setScanOnlyInScope/',
  params: {
  'onlyInScope' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/setScanOnlyInScope/`

Sets whether or not the passive scan should be performed only on messages that are in scope.

<h3 id="pscanactionsetscanonlyinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|onlyInScope|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionsetscanonlyinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionEnableAllScanners

<a id="opIdpscanActionEnableAllScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/enableAllScanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/enableAllScanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/enableAllScanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/enableAllScanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/enableAllScanners/`

Enables all passive scanners

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionenableallscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionDisableAllScanners

<a id="opIdpscanActionDisableAllScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/disableAllScanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/disableAllScanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/disableAllScanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/disableAllScanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/disableAllScanners/`

Disables all passive scanners

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactiondisableallscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionEnableScanners

<a id="opIdpscanActionEnableScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/enableScanners/?ids=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/enableScanners/?ids=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/enableScanners/', params={
  'ids': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/enableScanners/',
  params: {
  'ids' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/enableScanners/`

Enables all passive scanners with the given IDs (comma separated list of IDs)

<h3 id="pscanactionenablescanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionenablescanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionDisableScanners

<a id="opIdpscanActionDisableScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/disableScanners/?ids=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/disableScanners/?ids=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/disableScanners/', params={
  'ids': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/disableScanners/',
  params: {
  'ids' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/disableScanners/`

Disables all passive scanners with the given IDs (comma separated list of IDs)

<h3 id="pscanactiondisablescanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactiondisablescanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionSetScannerAlertThreshold

<a id="opIdpscanActionSetScannerAlertThreshold"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/setScannerAlertThreshold/?id=0&alertThreshold=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/setScannerAlertThreshold/?id=0&alertThreshold=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/setScannerAlertThreshold/', params={
  'id': '0',  'alertThreshold': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/setScannerAlertThreshold/',
  params: {
  'id' => 'integer',
'alertThreshold' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/setScannerAlertThreshold/`

Sets the alert threshold of the passive scanner with the given ID, accepted values for alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH

<h3 id="pscanactionsetscanneralertthreshold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|
|alertThreshold|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionsetscanneralertthreshold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## pscanActionSetMaxAlertsPerRule

<a id="opIdpscanActionSetMaxAlertsPerRule"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/pscan/action/setMaxAlertsPerRule/?maxAlerts=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/pscan/action/setMaxAlertsPerRule/?maxAlerts=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/pscan/action/setMaxAlertsPerRule/', params={
  'maxAlerts': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/pscan/action/setMaxAlertsPerRule/',
  params: {
  'maxAlerts' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/pscan/action/setMaxAlertsPerRule/`

Sets the maximum number of alerts a passive scan rule should raise.

<h3 id="pscanactionsetmaxalertsperrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxAlerts|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="pscanactionsetmaxalertsperrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-search">search</h1>

## searchViewUrlsByUrlRegex

<a id="opIdsearchViewUrlsByUrlRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/urlsByUrlRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/urlsByUrlRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/urlsByUrlRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/urlsByUrlRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/urlsByUrlRegex/`

Returns the URLs of the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewurlsbyurlregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewurlsbyurlregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewUrlsByRequestRegex

<a id="opIdsearchViewUrlsByRequestRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/urlsByRequestRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/urlsByRequestRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/urlsByRequestRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/urlsByRequestRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/urlsByRequestRegex/`

Returns the URLs of the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewurlsbyrequestregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewurlsbyrequestregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewUrlsByResponseRegex

<a id="opIdsearchViewUrlsByResponseRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/urlsByResponseRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/urlsByResponseRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/urlsByResponseRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/urlsByResponseRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/urlsByResponseRegex/`

Returns the URLs of the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewurlsbyresponseregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewurlsbyresponseregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewUrlsByHeaderRegex

<a id="opIdsearchViewUrlsByHeaderRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/urlsByHeaderRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/urlsByHeaderRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/urlsByHeaderRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/urlsByHeaderRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/urlsByHeaderRegex/`

Returns the URLs of the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewurlsbyheaderregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewurlsbyheaderregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewMessagesByUrlRegex

<a id="opIdsearchViewMessagesByUrlRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/messagesByUrlRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/messagesByUrlRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/messagesByUrlRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/messagesByUrlRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/messagesByUrlRegex/`

Returns the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewmessagesbyurlregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewmessagesbyurlregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewMessagesByRequestRegex

<a id="opIdsearchViewMessagesByRequestRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/messagesByRequestRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/messagesByRequestRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/messagesByRequestRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/messagesByRequestRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/messagesByRequestRegex/`

Returns the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewmessagesbyrequestregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewmessagesbyrequestregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewMessagesByResponseRegex

<a id="opIdsearchViewMessagesByResponseRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/messagesByResponseRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/messagesByResponseRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/messagesByResponseRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/messagesByResponseRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/messagesByResponseRegex/`

Returns the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewmessagesbyresponseregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewmessagesbyresponseregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchViewMessagesByHeaderRegex

<a id="opIdsearchViewMessagesByHeaderRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/search/view/messagesByHeaderRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/search/view/messagesByHeaderRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/search/view/messagesByHeaderRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/search/view/messagesByHeaderRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/search/view/messagesByHeaderRegex/`

Returns the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchviewmessagesbyheaderregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchviewmessagesbyheaderregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchOtherHarByUrlRegex

<a id="opIdsearchOtherHarByUrlRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/search/other/harByUrlRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/search/other/harByUrlRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/search/other/harByUrlRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/search/other/harByUrlRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/search/other/harByUrlRegex/`

Returns the HTTP messages, in HAR format, that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchotherharbyurlregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchotherharbyurlregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchOtherHarByRequestRegex

<a id="opIdsearchOtherHarByRequestRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/search/other/harByRequestRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/search/other/harByRequestRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/search/other/harByRequestRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/search/other/harByRequestRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/search/other/harByRequestRegex/`

Returns the HTTP messages, in HAR format, that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchotherharbyrequestregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchotherharbyrequestregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchOtherHarByResponseRegex

<a id="opIdsearchOtherHarByResponseRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/search/other/harByResponseRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/search/other/harByResponseRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/search/other/harByResponseRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/search/other/harByResponseRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/search/other/harByResponseRegex/`

Returns the HTTP messages, in HAR format, that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchotherharbyresponseregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchotherharbyresponseregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## searchOtherHarByHeaderRegex

<a id="opIdsearchOtherHarByHeaderRegex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/search/other/harByHeaderRegex/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/search/other/harByHeaderRegex/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/search/other/harByHeaderRegex/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/search/other/harByHeaderRegex/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/search/other/harByHeaderRegex/`

Returns the HTTP messages, in HAR format, that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages.

<h3 id="searchotherharbyheaderregex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="searchotherharbyheaderregex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-autoupdate">autoupdate</h1>

## autoupdateViewLatestVersionNumber

<a id="opIdautoupdateViewLatestVersionNumber"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/latestVersionNumber/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/latestVersionNumber/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/latestVersionNumber/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/latestVersionNumber/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/latestVersionNumber/`

Returns the latest version number

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewlatestversionnumber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewIsLatestVersion

<a id="opIdautoupdateViewIsLatestVersion"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/isLatestVersion/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/isLatestVersion/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/isLatestVersion/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/isLatestVersion/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/isLatestVersion/`

Returns 'true' if ZAP is on the latest version

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewislatestversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewInstalledAddons

<a id="opIdautoupdateViewInstalledAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/installedAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/installedAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/installedAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/installedAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/installedAddons/`

Return a list of all of the installed add-ons

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewinstalledaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewLocalAddons

<a id="opIdautoupdateViewLocalAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/localAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/localAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/localAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/localAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/localAddons/`

Returns a list with all local add-ons, installed or not.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewlocaladdons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewNewAddons

<a id="opIdautoupdateViewNewAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/newAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/newAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/newAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/newAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/newAddons/`

Return a list of any add-ons that have been added to the Marketplace since the last check for updates

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewnewaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewUpdatedAddons

<a id="opIdautoupdateViewUpdatedAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/updatedAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/updatedAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/updatedAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/updatedAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/updatedAddons/`

Return a list of any add-ons that have been changed in the Marketplace since the last check for updates

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewupdatedaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewMarketplaceAddons

<a id="opIdautoupdateViewMarketplaceAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/marketplaceAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/marketplaceAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/marketplaceAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/marketplaceAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/marketplaceAddons/`

Return a list of all of the add-ons on the ZAP Marketplace (this information is read once and then cached)

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewmarketplaceaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionAddonDirectories

<a id="opIdautoupdateViewOptionAddonDirectories"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionAddonDirectories/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionAddonDirectories/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionAddonDirectories/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionAddonDirectories/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionAddonDirectories/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptionaddondirectories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionDayLastChecked

<a id="opIdautoupdateViewOptionDayLastChecked"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionDayLastChecked/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionDayLastChecked/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionDayLastChecked/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionDayLastChecked/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionDayLastChecked/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptiondaylastchecked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionDayLastInstallWarned

<a id="opIdautoupdateViewOptionDayLastInstallWarned"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionDayLastInstallWarned/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionDayLastInstallWarned/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionDayLastInstallWarned/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionDayLastInstallWarned/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionDayLastInstallWarned/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptiondaylastinstallwarned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionDayLastUpdateWarned

<a id="opIdautoupdateViewOptionDayLastUpdateWarned"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionDayLastUpdateWarned/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionDayLastUpdateWarned/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionDayLastUpdateWarned/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionDayLastUpdateWarned/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionDayLastUpdateWarned/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptiondaylastupdatewarned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionDownloadDirectory

<a id="opIdautoupdateViewOptionDownloadDirectory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionDownloadDirectory/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionDownloadDirectory/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionDownloadDirectory/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionDownloadDirectory/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionDownloadDirectory/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptiondownloaddirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionCheckAddonUpdates

<a id="opIdautoupdateViewOptionCheckAddonUpdates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionCheckAddonUpdates/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionCheckAddonUpdates/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionCheckAddonUpdates/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionCheckAddonUpdates/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionCheckAddonUpdates/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptioncheckaddonupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionCheckOnStart

<a id="opIdautoupdateViewOptionCheckOnStart"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionCheckOnStart/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionCheckOnStart/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionCheckOnStart/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionCheckOnStart/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionCheckOnStart/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptioncheckonstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionDownloadNewRelease

<a id="opIdautoupdateViewOptionDownloadNewRelease"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionDownloadNewRelease/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionDownloadNewRelease/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionDownloadNewRelease/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionDownloadNewRelease/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionDownloadNewRelease/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptiondownloadnewrelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionInstallAddonUpdates

<a id="opIdautoupdateViewOptionInstallAddonUpdates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionInstallAddonUpdates/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionInstallAddonUpdates/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionInstallAddonUpdates/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionInstallAddonUpdates/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionInstallAddonUpdates/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptioninstalladdonupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionInstallScannerRules

<a id="opIdautoupdateViewOptionInstallScannerRules"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionInstallScannerRules/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionInstallScannerRules/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionInstallScannerRules/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionInstallScannerRules/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionInstallScannerRules/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptioninstallscannerrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionReportAlphaAddons

<a id="opIdautoupdateViewOptionReportAlphaAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionReportAlphaAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionReportAlphaAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionReportAlphaAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionReportAlphaAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionReportAlphaAddons/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptionreportalphaaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionReportBetaAddons

<a id="opIdautoupdateViewOptionReportBetaAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionReportBetaAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionReportBetaAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionReportBetaAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionReportBetaAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionReportBetaAddons/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptionreportbetaaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateViewOptionReportReleaseAddons

<a id="opIdautoupdateViewOptionReportReleaseAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/view/optionReportReleaseAddons/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/view/optionReportReleaseAddons/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/view/optionReportReleaseAddons/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/view/optionReportReleaseAddons/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/view/optionReportReleaseAddons/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateviewoptionreportreleaseaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionDownloadLatestRelease

<a id="opIdautoupdateActionDownloadLatestRelease"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/downloadLatestRelease/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/downloadLatestRelease/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/downloadLatestRelease/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/downloadLatestRelease/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/downloadLatestRelease/`

Downloads the latest release, if any 

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactiondownloadlatestrelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionInstallAddon

<a id="opIdautoupdateActionInstallAddon"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/installAddon/?id=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/installAddon/?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/installAddon/', params={
  'id': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/installAddon/',
  params: {
  'id' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/installAddon/`

Installs or updates the specified add-on, returning when complete (ie not asynchronously)

<h3 id="autoupdateactioninstalladdon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactioninstalladdon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionInstallLocalAddon

<a id="opIdautoupdateActionInstallLocalAddon"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/installLocalAddon/?file=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/installLocalAddon/?file=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/installLocalAddon/', params={
  'file': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/installLocalAddon/',
  params: {
  'file' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/installLocalAddon/`

<h3 id="autoupdateactioninstalllocaladdon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactioninstalllocaladdon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionUninstallAddon

<a id="opIdautoupdateActionUninstallAddon"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/uninstallAddon/?id=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/uninstallAddon/?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/uninstallAddon/', params={
  'id': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/uninstallAddon/',
  params: {
  'id' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/uninstallAddon/`

Uninstalls the specified add-on 

<h3 id="autoupdateactionuninstalladdon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionuninstalladdon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionCheckAddonUpdates

<a id="opIdautoupdateActionSetOptionCheckAddonUpdates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionCheckAddonUpdates/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionCheckAddonUpdates/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionCheckAddonUpdates/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionCheckAddonUpdates/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionCheckAddonUpdates/`

<h3 id="autoupdateactionsetoptioncheckaddonupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptioncheckaddonupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionCheckOnStart

<a id="opIdautoupdateActionSetOptionCheckOnStart"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionCheckOnStart/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionCheckOnStart/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionCheckOnStart/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionCheckOnStart/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionCheckOnStart/`

<h3 id="autoupdateactionsetoptioncheckonstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptioncheckonstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionDownloadNewRelease

<a id="opIdautoupdateActionSetOptionDownloadNewRelease"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionDownloadNewRelease/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionDownloadNewRelease/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionDownloadNewRelease/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionDownloadNewRelease/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionDownloadNewRelease/`

<h3 id="autoupdateactionsetoptiondownloadnewrelease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptiondownloadnewrelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionInstallAddonUpdates

<a id="opIdautoupdateActionSetOptionInstallAddonUpdates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionInstallAddonUpdates/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionInstallAddonUpdates/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionInstallAddonUpdates/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionInstallAddonUpdates/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionInstallAddonUpdates/`

<h3 id="autoupdateactionsetoptioninstalladdonupdates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptioninstalladdonupdates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionInstallScannerRules

<a id="opIdautoupdateActionSetOptionInstallScannerRules"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionInstallScannerRules/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionInstallScannerRules/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionInstallScannerRules/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionInstallScannerRules/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionInstallScannerRules/`

<h3 id="autoupdateactionsetoptioninstallscannerrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptioninstallscannerrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionReportAlphaAddons

<a id="opIdautoupdateActionSetOptionReportAlphaAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionReportAlphaAddons/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionReportAlphaAddons/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionReportAlphaAddons/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionReportAlphaAddons/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionReportAlphaAddons/`

<h3 id="autoupdateactionsetoptionreportalphaaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptionreportalphaaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionReportBetaAddons

<a id="opIdautoupdateActionSetOptionReportBetaAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionReportBetaAddons/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionReportBetaAddons/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionReportBetaAddons/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionReportBetaAddons/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionReportBetaAddons/`

<h3 id="autoupdateactionsetoptionreportbetaaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptionreportbetaaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## autoupdateActionSetOptionReportReleaseAddons

<a id="opIdautoupdateActionSetOptionReportReleaseAddons"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/autoupdate/action/setOptionReportReleaseAddons/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/autoupdate/action/setOptionReportReleaseAddons/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/autoupdate/action/setOptionReportReleaseAddons/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/autoupdate/action/setOptionReportReleaseAddons/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/autoupdate/action/setOptionReportReleaseAddons/`

<h3 id="autoupdateactionsetoptionreportreleaseaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="autoupdateactionsetoptionreportreleaseaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-spider">spider</h1>

## spiderViewStatus

<a id="opIdspiderViewStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/status/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/status/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/status/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/status/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/status/`

<h3 id="spiderviewstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewResults

<a id="opIdspiderViewResults"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/results/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/results/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/results/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/results/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/results/`

<h3 id="spiderviewresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewFullResults

<a id="opIdspiderViewFullResults"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/fullResults/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/fullResults/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/fullResults/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/fullResults/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/fullResults/`

<h3 id="spiderviewfullresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewfullresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewScans

<a id="opIdspiderViewScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/scans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/scans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/scans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/scans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/scans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewExcludedFromScan

<a id="opIdspiderViewExcludedFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/excludedFromScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/excludedFromScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/excludedFromScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/excludedFromScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/excludedFromScan/`

Gets the regexes of URLs excluded from the spider scans.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewexcludedfromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewAllUrls

<a id="opIdspiderViewAllUrls"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/allUrls/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/allUrls/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/allUrls/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/allUrls/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/allUrls/`

Returns a list of unique URLs from the history table based on HTTP messages added by the Spider.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewallurls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewAddedNodes

<a id="opIdspiderViewAddedNodes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/addedNodes/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/addedNodes/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/addedNodes/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/addedNodes/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/addedNodes/`

Returns a list of the names of the nodes added to the Sites tree by the specified scan.

<h3 id="spiderviewaddednodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewaddednodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewDomainsAlwaysInScope

<a id="opIdspiderViewDomainsAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/domainsAlwaysInScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/domainsAlwaysInScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/domainsAlwaysInScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/domainsAlwaysInScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/domainsAlwaysInScope/`

Gets all the domains that are always in scope. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewdomainsalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionDomainsAlwaysInScope

<a id="opIdspiderViewOptionDomainsAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionDomainsAlwaysInScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionDomainsAlwaysInScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionDomainsAlwaysInScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionDomainsAlwaysInScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionDomainsAlwaysInScope/`

Use view domainsAlwaysInScope instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptiondomainsalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionDomainsAlwaysInScopeEnabled

<a id="opIdspiderViewOptionDomainsAlwaysInScopeEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionDomainsAlwaysInScopeEnabled/`

Use view domainsAlwaysInScope instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptiondomainsalwaysinscopeenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionHandleParameters

<a id="opIdspiderViewOptionHandleParameters"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionHandleParameters/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionHandleParameters/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionHandleParameters/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionHandleParameters/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionHandleParameters/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionhandleparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionMaxChildren

<a id="opIdspiderViewOptionMaxChildren"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionMaxChildren/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionMaxChildren/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionMaxChildren/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionMaxChildren/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionMaxChildren/`

Gets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionmaxchildren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionMaxDepth

<a id="opIdspiderViewOptionMaxDepth"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionMaxDepth/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionMaxDepth/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionMaxDepth/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionMaxDepth/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionMaxDepth/`

Gets the maximum depth the spider can crawl, 0 if unlimited.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionmaxdepth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionMaxDuration

<a id="opIdspiderViewOptionMaxDuration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionMaxDuration/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionMaxDuration/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionMaxDuration/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionMaxDuration/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionMaxDuration/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionmaxduration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionMaxParseSizeBytes

<a id="opIdspiderViewOptionMaxParseSizeBytes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionMaxParseSizeBytes/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionMaxParseSizeBytes/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionMaxParseSizeBytes/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionMaxParseSizeBytes/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionMaxParseSizeBytes/`

Gets the maximum size, in bytes, that a response might have to be parsed.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionmaxparsesizebytes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionMaxScansInUI

<a id="opIdspiderViewOptionMaxScansInUI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionMaxScansInUI/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionMaxScansInUI/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionMaxScansInUI/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionMaxScansInUI/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionMaxScansInUI/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionmaxscansinui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionRequestWaitTime

<a id="opIdspiderViewOptionRequestWaitTime"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionRequestWaitTime/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionRequestWaitTime/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionRequestWaitTime/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionRequestWaitTime/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionRequestWaitTime/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionrequestwaittime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionScope

<a id="opIdspiderViewOptionScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionScope/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionScopeText

<a id="opIdspiderViewOptionScopeText"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionScopeText/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionScopeText/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionScopeText/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionScopeText/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionScopeText/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionscopetext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionSkipURLString

<a id="opIdspiderViewOptionSkipURLString"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionSkipURLString/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionSkipURLString/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionSkipURLString/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionSkipURLString/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionSkipURLString/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionskipurlstring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionThreadCount

<a id="opIdspiderViewOptionThreadCount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionThreadCount/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionThreadCount/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionThreadCount/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionThreadCount/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionThreadCount/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionthreadcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionUserAgent

<a id="opIdspiderViewOptionUserAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionUserAgent/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionUserAgent/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionUserAgent/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionUserAgent/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionUserAgent/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionuseragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionAcceptCookies

<a id="opIdspiderViewOptionAcceptCookies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionAcceptCookies/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionAcceptCookies/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionAcceptCookies/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionAcceptCookies/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionAcceptCookies/`

Gets whether or not a spider process should accept cookies while spidering.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionacceptcookies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionHandleODataParametersVisited

<a id="opIdspiderViewOptionHandleODataParametersVisited"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionHandleODataParametersVisited/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionHandleODataParametersVisited/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionHandleODataParametersVisited/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionHandleODataParametersVisited/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionHandleODataParametersVisited/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionhandleodataparametersvisited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionParseComments

<a id="opIdspiderViewOptionParseComments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionParseComments/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionParseComments/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionParseComments/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionParseComments/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionParseComments/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionparsecomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionParseGit

<a id="opIdspiderViewOptionParseGit"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionParseGit/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionParseGit/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionParseGit/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionParseGit/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionParseGit/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionparsegit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionParseRobotsTxt

<a id="opIdspiderViewOptionParseRobotsTxt"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionParseRobotsTxt/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionParseRobotsTxt/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionParseRobotsTxt/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionParseRobotsTxt/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionParseRobotsTxt/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionparserobotstxt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionParseSVNEntries

<a id="opIdspiderViewOptionParseSVNEntries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionParseSVNEntries/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionParseSVNEntries/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionParseSVNEntries/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionParseSVNEntries/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionParseSVNEntries/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionparsesvnentries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionParseSitemapXml

<a id="opIdspiderViewOptionParseSitemapXml"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionParseSitemapXml/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionParseSitemapXml/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionParseSitemapXml/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionParseSitemapXml/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionParseSitemapXml/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionparsesitemapxml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionPostForm

<a id="opIdspiderViewOptionPostForm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionPostForm/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionPostForm/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionPostForm/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionPostForm/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionPostForm/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionpostform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionProcessForm

<a id="opIdspiderViewOptionProcessForm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionProcessForm/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionProcessForm/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionProcessForm/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionProcessForm/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionProcessForm/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionprocessform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionSendRefererHeader

<a id="opIdspiderViewOptionSendRefererHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionSendRefererHeader/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionSendRefererHeader/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionSendRefererHeader/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionSendRefererHeader/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionSendRefererHeader/`

Gets whether or not the 'Referer' header should be sent while spidering.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionsendrefererheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderViewOptionShowAdvancedDialog

<a id="opIdspiderViewOptionShowAdvancedDialog"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/view/optionShowAdvancedDialog/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/view/optionShowAdvancedDialog/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/view/optionShowAdvancedDialog/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/view/optionShowAdvancedDialog/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/view/optionShowAdvancedDialog/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spiderviewoptionshowadvanceddialog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionScan

<a id="opIdspiderActionScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/scan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/scan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/scan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/scan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/scan/`

Runs the spider against the given URL (or context). Optionally, the 'maxChildren' parameter can be set to limit the number of children scanned, the 'recurse' parameter can be used to prevent the spider from seeding recursively, the parameter 'contextName' can be used to constrain the scan to a Context and the parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url').

<h3 id="spideractionscan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|maxChildren|query|integer|false|none|
|recurse|query|boolean|false|none|
|contextName|query|string|false|none|
|subtreeOnly|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionScanAsUser

<a id="opIdspiderActionScanAsUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/scanAsUser/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/scanAsUser/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/scanAsUser/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/scanAsUser/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/scanAsUser/`

Runs the spider from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.

<h3 id="spideractionscanasuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|
|url|query|string|false|none|
|maxChildren|query|integer|false|none|
|recurse|query|boolean|false|none|
|subtreeOnly|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionscanasuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionPause

<a id="opIdspiderActionPause"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/pause/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/pause/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/pause/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/pause/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/pause/`

<h3 id="spideractionpause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionpause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionResume

<a id="opIdspiderActionResume"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/resume/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/resume/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/resume/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/resume/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/resume/`

<h3 id="spideractionresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionStop

<a id="opIdspiderActionStop"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/stop/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/stop/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/stop/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/stop/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/stop/`

<h3 id="spideractionstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionRemoveScan

<a id="opIdspiderActionRemoveScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/removeScan/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/removeScan/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/removeScan/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/removeScan/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/removeScan/`

<h3 id="spideractionremovescan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionremovescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionPauseAllScans

<a id="opIdspiderActionPauseAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/pauseAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/pauseAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/pauseAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/pauseAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/pauseAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionpauseallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionResumeAllScans

<a id="opIdspiderActionResumeAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/resumeAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/resumeAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/resumeAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/resumeAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/resumeAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionresumeallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionStopAllScans

<a id="opIdspiderActionStopAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/stopAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/stopAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/stopAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/stopAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/stopAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionstopallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionRemoveAllScans

<a id="opIdspiderActionRemoveAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/removeAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/removeAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/removeAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/removeAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/removeAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionremoveallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionClearExcludedFromScan

<a id="opIdspiderActionClearExcludedFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/clearExcludedFromScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/clearExcludedFromScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/clearExcludedFromScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/clearExcludedFromScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/clearExcludedFromScan/`

Clears the regexes of URLs excluded from the spider scans.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionclearexcludedfromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionExcludeFromScan

<a id="opIdspiderActionExcludeFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/excludeFromScan/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/excludeFromScan/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/excludeFromScan/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/excludeFromScan/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/excludeFromScan/`

Adds a regex of URLs that should be excluded from the spider scans.

<h3 id="spideractionexcludefromscan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionexcludefromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionAddDomainAlwaysInScope

<a id="opIdspiderActionAddDomainAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/addDomainAlwaysInScope/?value=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/addDomainAlwaysInScope/?value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/addDomainAlwaysInScope/', params={
  'value': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/addDomainAlwaysInScope/',
  params: {
  'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/addDomainAlwaysInScope/`

Adds a new domain that's always in scope, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).

<h3 id="spideractionadddomainalwaysinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|query|string|true|none|
|isRegex|query|boolean|false|none|
|isEnabled|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionadddomainalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionModifyDomainAlwaysInScope

<a id="opIdspiderActionModifyDomainAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/modifyDomainAlwaysInScope/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/modifyDomainAlwaysInScope/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/modifyDomainAlwaysInScope/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/modifyDomainAlwaysInScope/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/modifyDomainAlwaysInScope/`

Modifies a domain that's always in scope. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view domainsAlwaysInScope.

<h3 id="spideractionmodifydomainalwaysinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|
|value|query|string|false|none|
|isRegex|query|boolean|false|none|
|isEnabled|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionmodifydomainalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionRemoveDomainAlwaysInScope

<a id="opIdspiderActionRemoveDomainAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/removeDomainAlwaysInScope/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/removeDomainAlwaysInScope/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/removeDomainAlwaysInScope/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/removeDomainAlwaysInScope/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/removeDomainAlwaysInScope/`

Removes a domain that's always in scope, with the given index. The index can be obtained with the view domainsAlwaysInScope.

<h3 id="spideractionremovedomainalwaysinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionremovedomainalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionEnableAllDomainsAlwaysInScope

<a id="opIdspiderActionEnableAllDomainsAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/enableAllDomainsAlwaysInScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/enableAllDomainsAlwaysInScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/enableAllDomainsAlwaysInScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/enableAllDomainsAlwaysInScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/enableAllDomainsAlwaysInScope/`

Enables all domains that are always in scope.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionenablealldomainsalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionDisableAllDomainsAlwaysInScope

<a id="opIdspiderActionDisableAllDomainsAlwaysInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/disableAllDomainsAlwaysInScope/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/disableAllDomainsAlwaysInScope/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/disableAllDomainsAlwaysInScope/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/disableAllDomainsAlwaysInScope/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/disableAllDomainsAlwaysInScope/`

Disables all domains that are always in scope.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractiondisablealldomainsalwaysinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionHandleParameters

<a id="opIdspiderActionSetOptionHandleParameters"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionHandleParameters/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionHandleParameters/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionHandleParameters/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionHandleParameters/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionHandleParameters/`

<h3 id="spideractionsetoptionhandleparameters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionhandleparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionScopeString

<a id="opIdspiderActionSetOptionScopeString"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionScopeString/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionScopeString/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionScopeString/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionScopeString/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionScopeString/`

Use actions [add|modify|remove]DomainAlwaysInScope instead.

<h3 id="spideractionsetoptionscopestring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionscopestring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionSkipURLString

<a id="opIdspiderActionSetOptionSkipURLString"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionSkipURLString/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionSkipURLString/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionSkipURLString/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionSkipURLString/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionSkipURLString/`

<h3 id="spideractionsetoptionskipurlstring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionskipurlstring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionUserAgent

<a id="opIdspiderActionSetOptionUserAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionUserAgent/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionUserAgent/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionUserAgent/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionUserAgent/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionUserAgent/`

<h3 id="spideractionsetoptionuseragent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionuseragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionAcceptCookies

<a id="opIdspiderActionSetOptionAcceptCookies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionAcceptCookies/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionAcceptCookies/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionAcceptCookies/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionAcceptCookies/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionAcceptCookies/`

Sets whether or not a spider process should accept cookies while spidering.

<h3 id="spideractionsetoptionacceptcookies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionacceptcookies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionHandleODataParametersVisited

<a id="opIdspiderActionSetOptionHandleODataParametersVisited"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionHandleODataParametersVisited/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionHandleODataParametersVisited/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionHandleODataParametersVisited/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionHandleODataParametersVisited/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionHandleODataParametersVisited/`

<h3 id="spideractionsetoptionhandleodataparametersvisited-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionhandleodataparametersvisited-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionMaxChildren

<a id="opIdspiderActionSetOptionMaxChildren"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionMaxChildren/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionMaxChildren/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionMaxChildren/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionMaxChildren/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionMaxChildren/`

Sets the maximum number of child nodes (per node) that can be crawled, 0 means no limit.

<h3 id="spideractionsetoptionmaxchildren-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionmaxchildren-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionMaxDepth

<a id="opIdspiderActionSetOptionMaxDepth"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionMaxDepth/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionMaxDepth/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionMaxDepth/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionMaxDepth/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionMaxDepth/`

Sets the maximum depth the spider can crawl, 0 for unlimited depth.

<h3 id="spideractionsetoptionmaxdepth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionmaxdepth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionMaxDuration

<a id="opIdspiderActionSetOptionMaxDuration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionMaxDuration/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionMaxDuration/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionMaxDuration/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionMaxDuration/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionMaxDuration/`

<h3 id="spideractionsetoptionmaxduration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionmaxduration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionMaxParseSizeBytes

<a id="opIdspiderActionSetOptionMaxParseSizeBytes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionMaxParseSizeBytes/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionMaxParseSizeBytes/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionMaxParseSizeBytes/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionMaxParseSizeBytes/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionMaxParseSizeBytes/`

Sets the maximum size, in bytes, that a response might have to be parsed. This allows the spider to skip big responses/files.

<h3 id="spideractionsetoptionmaxparsesizebytes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionmaxparsesizebytes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionMaxScansInUI

<a id="opIdspiderActionSetOptionMaxScansInUI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionMaxScansInUI/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionMaxScansInUI/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionMaxScansInUI/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionMaxScansInUI/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionMaxScansInUI/`

<h3 id="spideractionsetoptionmaxscansinui-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionmaxscansinui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionParseComments

<a id="opIdspiderActionSetOptionParseComments"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionParseComments/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionParseComments/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionParseComments/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionParseComments/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionParseComments/`

<h3 id="spideractionsetoptionparsecomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionparsecomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionParseGit

<a id="opIdspiderActionSetOptionParseGit"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionParseGit/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionParseGit/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionParseGit/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionParseGit/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionParseGit/`

<h3 id="spideractionsetoptionparsegit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionparsegit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionParseRobotsTxt

<a id="opIdspiderActionSetOptionParseRobotsTxt"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionParseRobotsTxt/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionParseRobotsTxt/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionParseRobotsTxt/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionParseRobotsTxt/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionParseRobotsTxt/`

<h3 id="spideractionsetoptionparserobotstxt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionparserobotstxt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionParseSVNEntries

<a id="opIdspiderActionSetOptionParseSVNEntries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionParseSVNEntries/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionParseSVNEntries/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionParseSVNEntries/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionParseSVNEntries/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionParseSVNEntries/`

<h3 id="spideractionsetoptionparsesvnentries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionparsesvnentries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionParseSitemapXml

<a id="opIdspiderActionSetOptionParseSitemapXml"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionParseSitemapXml/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionParseSitemapXml/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionParseSitemapXml/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionParseSitemapXml/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionParseSitemapXml/`

<h3 id="spideractionsetoptionparsesitemapxml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionparsesitemapxml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionPostForm

<a id="opIdspiderActionSetOptionPostForm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionPostForm/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionPostForm/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionPostForm/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionPostForm/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionPostForm/`

<h3 id="spideractionsetoptionpostform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionpostform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionProcessForm

<a id="opIdspiderActionSetOptionProcessForm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionProcessForm/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionProcessForm/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionProcessForm/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionProcessForm/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionProcessForm/`

<h3 id="spideractionsetoptionprocessform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionprocessform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionRequestWaitTime

<a id="opIdspiderActionSetOptionRequestWaitTime"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionRequestWaitTime/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionRequestWaitTime/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionRequestWaitTime/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionRequestWaitTime/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionRequestWaitTime/`

<h3 id="spideractionsetoptionrequestwaittime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionrequestwaittime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionSendRefererHeader

<a id="opIdspiderActionSetOptionSendRefererHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionSendRefererHeader/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionSendRefererHeader/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionSendRefererHeader/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionSendRefererHeader/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionSendRefererHeader/`

Sets whether or not the 'Referer' header should be sent while spidering.

<h3 id="spideractionsetoptionsendrefererheader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionsendrefererheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionShowAdvancedDialog

<a id="opIdspiderActionSetOptionShowAdvancedDialog"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionShowAdvancedDialog/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionShowAdvancedDialog/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionShowAdvancedDialog/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionShowAdvancedDialog/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionShowAdvancedDialog/`

<h3 id="spideractionsetoptionshowadvanceddialog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionshowadvanceddialog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## spiderActionSetOptionThreadCount

<a id="opIdspiderActionSetOptionThreadCount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/spider/action/setOptionThreadCount/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/spider/action/setOptionThreadCount/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/spider/action/setOptionThreadCount/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/spider/action/setOptionThreadCount/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/spider/action/setOptionThreadCount/`

<h3 id="spideractionsetoptionthreadcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="spideractionsetoptionthreadcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-core">core</h1>

## coreViewHosts

<a id="opIdcoreViewHosts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/hosts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/hosts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/hosts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/hosts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/hosts/`

Gets the name of the hosts accessed through/by ZAP

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewhosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewSites

<a id="opIdcoreViewSites"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/sites/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/sites/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/sites/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/sites/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/sites/`

Gets the sites accessed through/by ZAP (scheme and domain)

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewUrls

<a id="opIdcoreViewUrls"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/urls/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/urls/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/urls/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/urls/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/urls/`

Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL.

<h3 id="coreviewurls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewurls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewChildNodes

<a id="opIdcoreViewChildNodes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/childNodes/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/childNodes/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/childNodes/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/childNodes/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/childNodes/`

Gets the child nodes underneath the specified URL in the Sites tree

<h3 id="coreviewchildnodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewchildnodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewMessage

<a id="opIdcoreViewMessage"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/message/?id=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/message/?id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/message/', params={
  'id': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/message/',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/message/`

Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp.

<h3 id="coreviewmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewMessages

<a id="opIdcoreViewMessages"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/messages/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/messages/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/messages/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/messages/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/messages/`

Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages

<h3 id="coreviewmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewMessagesById

<a id="opIdcoreViewMessagesById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/messagesById/?ids=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/messagesById/?ids=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/messagesById/', params={
  'ids': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/messagesById/',
  params: {
  'ids' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/messagesById/`

Gets the HTTP messages with the given IDs.

<h3 id="coreviewmessagesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewmessagesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewNumberOfMessages

<a id="opIdcoreViewNumberOfMessages"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/numberOfMessages/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/numberOfMessages/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/numberOfMessages/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/numberOfMessages/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/numberOfMessages/`

Gets the number of messages, optionally filtering by URL

<h3 id="coreviewnumberofmessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewnumberofmessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewMode

<a id="opIdcoreViewMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/mode/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/mode/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/mode/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/mode/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/mode/`

Gets the mode

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewVersion

<a id="opIdcoreViewVersion"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/version/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/version/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/version/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/version/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/version/`

Gets ZAP version

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewExcludedFromProxy

<a id="opIdcoreViewExcludedFromProxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/excludedFromProxy/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/excludedFromProxy/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/excludedFromProxy/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/excludedFromProxy/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/excludedFromProxy/`

Gets the regular expressions, applied to URLs, to exclude from the local proxies.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewexcludedfromproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewHomeDirectory

<a id="opIdcoreViewHomeDirectory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/homeDirectory/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/homeDirectory/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/homeDirectory/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/homeDirectory/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/homeDirectory/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewhomedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewSessionLocation

<a id="opIdcoreViewSessionLocation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/sessionLocation/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/sessionLocation/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/sessionLocation/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/sessionLocation/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/sessionLocation/`

Gets the location of the current session file

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewsessionlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewProxyChainExcludedDomains

<a id="opIdcoreViewProxyChainExcludedDomains"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/proxyChainExcludedDomains/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/proxyChainExcludedDomains/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/proxyChainExcludedDomains/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/proxyChainExcludedDomains/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/proxyChainExcludedDomains/`

Gets all the domains that are excluded from the outgoing proxy. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewproxychainexcludeddomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainSkipName

<a id="opIdcoreViewOptionProxyChainSkipName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainSkipName/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainSkipName/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainSkipName/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainSkipName/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainSkipName/`

Use view proxyChainExcludedDomains instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainskipname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyExcludedDomains

<a id="opIdcoreViewOptionProxyExcludedDomains"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyExcludedDomains/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyExcludedDomains/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyExcludedDomains/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyExcludedDomains/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyExcludedDomains/`

Use view proxyChainExcludedDomains instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxyexcludeddomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyExcludedDomainsEnabled

<a id="opIdcoreViewOptionProxyExcludedDomainsEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyExcludedDomainsEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyExcludedDomainsEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyExcludedDomainsEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyExcludedDomainsEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyExcludedDomainsEnabled/`

Use view proxyChainExcludedDomains instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxyexcludeddomainsenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewZapHomePath

<a id="opIdcoreViewZapHomePath"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/zapHomePath/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/zapHomePath/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/zapHomePath/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/zapHomePath/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/zapHomePath/`

Gets the path to ZAP's home directory.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewzaphomepath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionMaximumAlertInstances

<a id="opIdcoreViewOptionMaximumAlertInstances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionMaximumAlertInstances/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionMaximumAlertInstances/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionMaximumAlertInstances/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionMaximumAlertInstances/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionMaximumAlertInstances/`

Gets the maximum number of alert instances to include in a report.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionmaximumalertinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionMergeRelatedAlerts

<a id="opIdcoreViewOptionMergeRelatedAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionMergeRelatedAlerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionMergeRelatedAlerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionMergeRelatedAlerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionMergeRelatedAlerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionMergeRelatedAlerts/`

Gets whether or not related alerts will be merged in any reports generated.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionmergerelatedalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionAlertOverridesFilePath

<a id="opIdcoreViewOptionAlertOverridesFilePath"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionAlertOverridesFilePath/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionAlertOverridesFilePath/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionAlertOverridesFilePath/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionAlertOverridesFilePath/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionAlertOverridesFilePath/`

Gets the path to the file with alert overrides.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionalertoverridesfilepath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewAlert

<a id="opIdcoreViewAlert"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/alert/?id=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/alert/?id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/alert/', params={
  'id': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/alert/',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/alert/`

Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method

<h3 id="coreviewalert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewalert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewAlerts

<a id="opIdcoreViewAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/alerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/alerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/alerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/alerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/alerts/`

Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts

<h3 id="coreviewalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|
|riskId|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewAlertsSummary

<a id="opIdcoreViewAlertsSummary"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/alertsSummary/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/alertsSummary/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/alertsSummary/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/alertsSummary/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/alertsSummary/`

Gets number of alerts grouped by each risk level, optionally filtering by URL

<h3 id="coreviewalertssummary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewalertssummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewNumberOfAlerts

<a id="opIdcoreViewNumberOfAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/numberOfAlerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/numberOfAlerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/numberOfAlerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/numberOfAlerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/numberOfAlerts/`

Gets the number of alerts, optionally filtering by URL or riskId

<h3 id="coreviewnumberofalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|riskId|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewnumberofalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionDefaultUserAgent

<a id="opIdcoreViewOptionDefaultUserAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionDefaultUserAgent/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionDefaultUserAgent/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionDefaultUserAgent/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionDefaultUserAgent/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionDefaultUserAgent/`

Gets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptiondefaultuseragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionDnsTtlSuccessfulQueries

<a id="opIdcoreViewOptionDnsTtlSuccessfulQueries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionDnsTtlSuccessfulQueries/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionDnsTtlSuccessfulQueries/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionDnsTtlSuccessfulQueries/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionDnsTtlSuccessfulQueries/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionDnsTtlSuccessfulQueries/`

Gets the TTL (in seconds) of successful DNS queries.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptiondnsttlsuccessfulqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionHttpState

<a id="opIdcoreViewOptionHttpState"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionHttpState/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionHttpState/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionHttpState/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionHttpState/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionHttpState/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionhttpstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainName

<a id="opIdcoreViewOptionProxyChainName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainName/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainName/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainName/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainName/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainName/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainPassword

<a id="opIdcoreViewOptionProxyChainPassword"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainPassword/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainPassword/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainPassword/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainPassword/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainPassword/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainPort

<a id="opIdcoreViewOptionProxyChainPort"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainPort/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainPort/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainPort/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainPort/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainPort/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainRealm

<a id="opIdcoreViewOptionProxyChainRealm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainRealm/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainRealm/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainRealm/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainRealm/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainRealm/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainrealm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainUserName

<a id="opIdcoreViewOptionProxyChainUserName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainUserName/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainUserName/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainUserName/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainUserName/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainUserName/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainusername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionTimeoutInSecs

<a id="opIdcoreViewOptionTimeoutInSecs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionTimeoutInSecs/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionTimeoutInSecs/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionTimeoutInSecs/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionTimeoutInSecs/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionTimeoutInSecs/`

Gets the connection time out, in seconds.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptiontimeoutinsecs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionHttpStateEnabled

<a id="opIdcoreViewOptionHttpStateEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionHttpStateEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionHttpStateEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionHttpStateEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionHttpStateEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionHttpStateEnabled/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionhttpstateenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionProxyChainPrompt

<a id="opIdcoreViewOptionProxyChainPrompt"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionProxyChainPrompt/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionProxyChainPrompt/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionProxyChainPrompt/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionProxyChainPrompt/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionProxyChainPrompt/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionproxychainprompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionSingleCookieRequestHeader

<a id="opIdcoreViewOptionSingleCookieRequestHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionSingleCookieRequestHeader/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionSingleCookieRequestHeader/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionSingleCookieRequestHeader/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionSingleCookieRequestHeader/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionSingleCookieRequestHeader/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionsinglecookierequestheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionUseProxyChain

<a id="opIdcoreViewOptionUseProxyChain"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionUseProxyChain/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionUseProxyChain/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionUseProxyChain/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionUseProxyChain/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionUseProxyChain/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionuseproxychain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreViewOptionUseProxyChainAuth

<a id="opIdcoreViewOptionUseProxyChainAuth"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/view/optionUseProxyChainAuth/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/view/optionUseProxyChainAuth/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/view/optionUseProxyChainAuth/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/view/optionUseProxyChainAuth/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/view/optionUseProxyChainAuth/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreviewoptionuseproxychainauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionAccessUrl

<a id="opIdcoreActionAccessUrl"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/accessUrl/?url=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/accessUrl/?url=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/accessUrl/', params={
  'url': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/accessUrl/',
  params: {
  'url' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/accessUrl/`

Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'.

<h3 id="coreactionaccessurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|none|
|followRedirects|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionaccessurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionShutdown

<a id="opIdcoreActionShutdown"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/shutdown/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/shutdown/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/shutdown/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/shutdown/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/shutdown/`

Shuts down ZAP

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionshutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionNewSession

<a id="opIdcoreActionNewSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/newSession/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/newSession/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/newSession/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/newSession/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/newSession/`

Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.

<h3 id="coreactionnewsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|overwrite|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionnewsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionLoadSession

<a id="opIdcoreActionLoadSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/loadSession/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/loadSession/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/loadSession/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/loadSession/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/loadSession/`

Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.

<h3 id="coreactionloadsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionloadsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSaveSession

<a id="opIdcoreActionSaveSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/saveSession/?name=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/saveSession/?name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/saveSession/', params={
  'name': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/saveSession/',
  params: {
  'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/saveSession/`

Saves the session with the name supplied, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.

<h3 id="coreactionsavesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|
|overwrite|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsavesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSnapshotSession

<a id="opIdcoreActionSnapshotSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/snapshotSession/?name=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/snapshotSession/?name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/snapshotSession/', params={
  'name': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/snapshotSession/',
  params: {
  'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/snapshotSession/`

Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir.

<h3 id="coreactionsnapshotsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|
|overwrite|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsnapshotsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionClearExcludedFromProxy

<a id="opIdcoreActionClearExcludedFromProxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/clearExcludedFromProxy/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/clearExcludedFromProxy/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/clearExcludedFromProxy/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/clearExcludedFromProxy/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/clearExcludedFromProxy/`

Clears the regexes of URLs excluded from the local proxies.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionclearexcludedfromproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionExcludeFromProxy

<a id="opIdcoreActionExcludeFromProxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/excludeFromProxy/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/excludeFromProxy/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/excludeFromProxy/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/excludeFromProxy/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/excludeFromProxy/`

Adds a regex of URLs that should be excluded from the local proxies.

<h3 id="coreactionexcludefromproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionexcludefromproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetHomeDirectory

<a id="opIdcoreActionSetHomeDirectory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setHomeDirectory/?dir=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setHomeDirectory/?dir=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setHomeDirectory/', params={
  'dir': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setHomeDirectory/',
  params: {
  'dir' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setHomeDirectory/`

<h3 id="coreactionsethomedirectory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dir|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsethomedirectory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetMode

<a id="opIdcoreActionSetMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setMode/?mode=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setMode/?mode=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setMode/', params={
  'mode': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setMode/',
  params: {
  'mode' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setMode/`

Sets the mode, which may be one of [safe, protect, standard, attack]

<h3 id="coreactionsetmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionGenerateRootCA

<a id="opIdcoreActionGenerateRootCA"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/generateRootCA/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/generateRootCA/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/generateRootCA/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/generateRootCA/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/generateRootCA/`

Generates a new Root CA certificate for the local proxies.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiongeneraterootca-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSendRequest

<a id="opIdcoreActionSendRequest"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/sendRequest/?request=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/sendRequest/?request=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/sendRequest/', params={
  'request': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/sendRequest/',
  params: {
  'request' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/sendRequest/`

Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.

<h3 id="coreactionsendrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|request|query|string|true|none|
|followRedirects|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsendrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionRunGarbageCollection

<a id="opIdcoreActionRunGarbageCollection"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/runGarbageCollection/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/runGarbageCollection/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/runGarbageCollection/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/runGarbageCollection/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/runGarbageCollection/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionrungarbagecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionDeleteSiteNode

<a id="opIdcoreActionDeleteSiteNode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/deleteSiteNode/?url=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/deleteSiteNode/?url=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/deleteSiteNode/', params={
  'url': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/deleteSiteNode/',
  params: {
  'url' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/deleteSiteNode/`

Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified). 

<h3 id="coreactiondeletesitenode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|none|
|method|query|string|false|none|
|postData|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiondeletesitenode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionAddProxyChainExcludedDomain

<a id="opIdcoreActionAddProxyChainExcludedDomain"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/addProxyChainExcludedDomain/?value=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/addProxyChainExcludedDomain/?value=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/addProxyChainExcludedDomain/', params={
  'value': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/addProxyChainExcludedDomain/',
  params: {
  'value' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/addProxyChainExcludedDomain/`

Adds a domain to be excluded from the outgoing proxy, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false).

<h3 id="coreactionaddproxychainexcludeddomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|query|string|true|none|
|isRegex|query|boolean|false|none|
|isEnabled|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionaddproxychainexcludeddomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionModifyProxyChainExcludedDomain

<a id="opIdcoreActionModifyProxyChainExcludedDomain"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/modifyProxyChainExcludedDomain/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/modifyProxyChainExcludedDomain/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/modifyProxyChainExcludedDomain/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/modifyProxyChainExcludedDomain/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/modifyProxyChainExcludedDomain/`

Modifies a domain excluded from the outgoing proxy. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view proxyChainExcludedDomains.

<h3 id="coreactionmodifyproxychainexcludeddomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|
|value|query|string|false|none|
|isRegex|query|boolean|false|none|
|isEnabled|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionmodifyproxychainexcludeddomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionRemoveProxyChainExcludedDomain

<a id="opIdcoreActionRemoveProxyChainExcludedDomain"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/removeProxyChainExcludedDomain/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/removeProxyChainExcludedDomain/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/removeProxyChainExcludedDomain/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/removeProxyChainExcludedDomain/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/removeProxyChainExcludedDomain/`

Removes a domain excluded from the outgoing proxy, with the given index. The index can be obtained with the view proxyChainExcludedDomains.

<h3 id="coreactionremoveproxychainexcludeddomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionremoveproxychainexcludeddomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionEnableAllProxyChainExcludedDomains

<a id="opIdcoreActionEnableAllProxyChainExcludedDomains"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/enableAllProxyChainExcludedDomains/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/enableAllProxyChainExcludedDomains/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/enableAllProxyChainExcludedDomains/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/enableAllProxyChainExcludedDomains/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/enableAllProxyChainExcludedDomains/`

Enables all domains excluded from the outgoing proxy.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionenableallproxychainexcludeddomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionDisableAllProxyChainExcludedDomains

<a id="opIdcoreActionDisableAllProxyChainExcludedDomains"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/disableAllProxyChainExcludedDomains/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/disableAllProxyChainExcludedDomains/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/disableAllProxyChainExcludedDomains/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/disableAllProxyChainExcludedDomains/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/disableAllProxyChainExcludedDomains/`

Disables all domains excluded from the outgoing proxy.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiondisableallproxychainexcludeddomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionMaximumAlertInstances

<a id="opIdcoreActionSetOptionMaximumAlertInstances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionMaximumAlertInstances/?numberOfInstances=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionMaximumAlertInstances/?numberOfInstances=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionMaximumAlertInstances/', params={
  'numberOfInstances': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionMaximumAlertInstances/',
  params: {
  'numberOfInstances' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionMaximumAlertInstances/`

Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited.

<h3 id="coreactionsetoptionmaximumalertinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|numberOfInstances|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionmaximumalertinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionMergeRelatedAlerts

<a id="opIdcoreActionSetOptionMergeRelatedAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionMergeRelatedAlerts/?enabled=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionMergeRelatedAlerts/?enabled=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionMergeRelatedAlerts/', params={
  'enabled': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionMergeRelatedAlerts/',
  params: {
  'enabled' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionMergeRelatedAlerts/`

Sets whether or not related alerts will be merged in any reports generated.

<h3 id="coreactionsetoptionmergerelatedalerts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enabled|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionmergerelatedalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionAlertOverridesFilePath

<a id="opIdcoreActionSetOptionAlertOverridesFilePath"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionAlertOverridesFilePath/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionAlertOverridesFilePath/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionAlertOverridesFilePath/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionAlertOverridesFilePath/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionAlertOverridesFilePath/`

Sets (or clears, if empty) the path to the file with alert overrides.

<h3 id="coreactionsetoptionalertoverridesfilepath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filePath|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionalertoverridesfilepath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionEnablePKCS12ClientCertificate

<a id="opIdcoreActionEnablePKCS12ClientCertificate"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/enablePKCS12ClientCertificate/?filePath=string&password=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/enablePKCS12ClientCertificate/?filePath=string&password=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/enablePKCS12ClientCertificate/', params={
  'filePath': 'string',  'password': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/enablePKCS12ClientCertificate/',
  params: {
  'filePath' => 'string',
'password' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/enablePKCS12ClientCertificate/`

Enables use of a PKCS12 client certificate for the certificate with the given file system path, password, and optional index.

<h3 id="coreactionenablepkcs12clientcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filePath|query|string|true|none|
|password|query|string|true|none|
|index|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionenablepkcs12clientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionDisableClientCertificate

<a id="opIdcoreActionDisableClientCertificate"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/disableClientCertificate/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/disableClientCertificate/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/disableClientCertificate/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/disableClientCertificate/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/disableClientCertificate/`

Disables the option for use of client certificates.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiondisableclientcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionDeleteAllAlerts

<a id="opIdcoreActionDeleteAllAlerts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/deleteAllAlerts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/deleteAllAlerts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/deleteAllAlerts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/deleteAllAlerts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/deleteAllAlerts/`

Deletes all alerts of the current session.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiondeleteallalerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionDeleteAlert

<a id="opIdcoreActionDeleteAlert"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/deleteAlert/?id=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/deleteAlert/?id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/deleteAlert/', params={
  'id': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/deleteAlert/',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/deleteAlert/`

Deletes the alert with the given ID. 

<h3 id="coreactiondeletealert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactiondeletealert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionDefaultUserAgent

<a id="opIdcoreActionSetOptionDefaultUserAgent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionDefaultUserAgent/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionDefaultUserAgent/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionDefaultUserAgent/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionDefaultUserAgent/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionDefaultUserAgent/`

Sets the user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).

<h3 id="coreactionsetoptiondefaultuseragent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptiondefaultuseragent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainName

<a id="opIdcoreActionSetOptionProxyChainName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainName/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainName/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainName/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainName/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainName/`

<h3 id="coreactionsetoptionproxychainname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainPassword

<a id="opIdcoreActionSetOptionProxyChainPassword"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainPassword/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainPassword/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainPassword/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainPassword/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainPassword/`

<h3 id="coreactionsetoptionproxychainpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainRealm

<a id="opIdcoreActionSetOptionProxyChainRealm"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainRealm/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainRealm/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainRealm/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainRealm/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainRealm/`

<h3 id="coreactionsetoptionproxychainrealm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainrealm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainSkipName

<a id="opIdcoreActionSetOptionProxyChainSkipName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainSkipName/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainSkipName/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainSkipName/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainSkipName/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainSkipName/`

Use actions [add|modify|remove]ProxyChainExcludedDomain instead.

<h3 id="coreactionsetoptionproxychainskipname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainskipname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainUserName

<a id="opIdcoreActionSetOptionProxyChainUserName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainUserName/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainUserName/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainUserName/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainUserName/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainUserName/`

<h3 id="coreactionsetoptionproxychainusername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainusername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionDnsTtlSuccessfulQueries

<a id="opIdcoreActionSetOptionDnsTtlSuccessfulQueries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionDnsTtlSuccessfulQueries/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionDnsTtlSuccessfulQueries/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionDnsTtlSuccessfulQueries/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionDnsTtlSuccessfulQueries/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionDnsTtlSuccessfulQueries/`

Sets the TTL (in seconds) of successful DNS queries (applies after ZAP restart).

<h3 id="coreactionsetoptiondnsttlsuccessfulqueries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptiondnsttlsuccessfulqueries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionHttpStateEnabled

<a id="opIdcoreActionSetOptionHttpStateEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionHttpStateEnabled/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionHttpStateEnabled/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionHttpStateEnabled/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionHttpStateEnabled/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionHttpStateEnabled/`

<h3 id="coreactionsetoptionhttpstateenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionhttpstateenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainPort

<a id="opIdcoreActionSetOptionProxyChainPort"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainPort/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainPort/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainPort/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainPort/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainPort/`

<h3 id="coreactionsetoptionproxychainport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionProxyChainPrompt

<a id="opIdcoreActionSetOptionProxyChainPrompt"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionProxyChainPrompt/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionProxyChainPrompt/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionProxyChainPrompt/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionProxyChainPrompt/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionProxyChainPrompt/`

<h3 id="coreactionsetoptionproxychainprompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionproxychainprompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionSingleCookieRequestHeader

<a id="opIdcoreActionSetOptionSingleCookieRequestHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionSingleCookieRequestHeader/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionSingleCookieRequestHeader/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionSingleCookieRequestHeader/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionSingleCookieRequestHeader/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionSingleCookieRequestHeader/`

<h3 id="coreactionsetoptionsinglecookierequestheader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionsinglecookierequestheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionTimeoutInSecs

<a id="opIdcoreActionSetOptionTimeoutInSecs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionTimeoutInSecs/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionTimeoutInSecs/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionTimeoutInSecs/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionTimeoutInSecs/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionTimeoutInSecs/`

Sets the connection time out, in seconds.

<h3 id="coreactionsetoptiontimeoutinsecs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptiontimeoutinsecs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionUseProxyChain

<a id="opIdcoreActionSetOptionUseProxyChain"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionUseProxyChain/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionUseProxyChain/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionUseProxyChain/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionUseProxyChain/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionUseProxyChain/`

Sets whether or not the outgoing proxy should be used. The address/hostname of the outgoing proxy must be set to enable this option.

<h3 id="coreactionsetoptionuseproxychain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionuseproxychain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreActionSetOptionUseProxyChainAuth

<a id="opIdcoreActionSetOptionUseProxyChainAuth"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/core/action/setOptionUseProxyChainAuth/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/core/action/setOptionUseProxyChainAuth/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/core/action/setOptionUseProxyChainAuth/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/core/action/setOptionUseProxyChainAuth/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/core/action/setOptionUseProxyChainAuth/`

<h3 id="coreactionsetoptionuseproxychainauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreactionsetoptionuseproxychainauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherProxy.pac

<a id="opIdcoreOtherProxy.pac"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/proxy.pac/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/proxy.pac/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/proxy.pac/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/proxy.pac/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/proxy.pac/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreotherproxy.pac-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherRootcert

<a id="opIdcoreOtherRootcert"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/rootcert/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/rootcert/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/rootcert/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/rootcert/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/rootcert/`

Gets the Root CA certificate used by the local proxies.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreotherrootcert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherSetproxy

<a id="opIdcoreOtherSetproxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/setproxy/?proxy=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/setproxy/?proxy=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/setproxy/', params={
  'proxy': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/setproxy/',
  params: {
  'proxy' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/setproxy/`

<h3 id="coreothersetproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proxy|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothersetproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherXmlreport

<a id="opIdcoreOtherXmlreport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/xmlreport/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/xmlreport/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/xmlreport/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/xmlreport/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/xmlreport/`

Generates a report in XML format

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreotherxmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherHtmlreport

<a id="opIdcoreOtherHtmlreport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/htmlreport/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/htmlreport/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/htmlreport/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/htmlreport/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/htmlreport/`

Generates a report in HTML format

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreotherhtmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherJsonreport

<a id="opIdcoreOtherJsonreport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/jsonreport/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/jsonreport/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/jsonreport/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/jsonreport/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/jsonreport/`

Generates a report in JSON format

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreotherjsonreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherMdreport

<a id="opIdcoreOtherMdreport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/mdreport/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/mdreport/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/mdreport/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/mdreport/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/mdreport/`

Generates a report in Markdown format

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothermdreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherMessageHar

<a id="opIdcoreOtherMessageHar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/messageHar/?id=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/messageHar/?id=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/messageHar/', params={
  'id': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/messageHar/',
  params: {
  'id' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/messageHar/`

Gets the message with the given ID in HAR format

<h3 id="coreothermessagehar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothermessagehar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherMessagesHar

<a id="opIdcoreOtherMessagesHar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/messagesHar/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/messagesHar/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/messagesHar/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/messagesHar/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/messagesHar/`

Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages

<h3 id="coreothermessageshar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|baseurl|query|string|false|none|
|start|query|integer|false|none|
|count|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothermessageshar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherMessagesHarById

<a id="opIdcoreOtherMessagesHarById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/messagesHarById/?ids=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/messagesHarById/?ids=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/messagesHarById/', params={
  'ids': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/messagesHarById/',
  params: {
  'ids' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/messagesHarById/`

Gets the HTTP messages with the given IDs, in HAR format.

<h3 id="coreothermessagesharbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothermessagesharbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## coreOtherSendHarRequest

<a id="opIdcoreOtherSendHarRequest"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/OTHER/core/other/sendHarRequest/?request=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/OTHER/core/other/sendHarRequest/?request=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/OTHER/core/other/sendHarRequest/', params={
  'request': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/OTHER/core/other/sendHarRequest/',
  params: {
  'request' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /OTHER/core/other/sendHarRequest/`

Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.

<h3 id="coreothersendharrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|request|query|string|true|none|
|followRedirects|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="coreothersendharrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-params">params</h1>

## paramsViewParams

<a id="opIdparamsViewParams"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/params/view/params/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/params/view/params/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/params/view/params/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/params/view/params/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/params/view/params/`

Shows the parameters for the specified site, or for all sites if the site is not specified

<h3 id="paramsviewparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="paramsviewparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-ascan">ascan</h1>

## ascanViewStatus

<a id="opIdascanViewStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/status/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/status/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/status/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/status/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/status/`

<h3 id="ascanviewstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewScanProgress

<a id="opIdascanViewScanProgress"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/scanProgress/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/scanProgress/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/scanProgress/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/scanProgress/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/scanProgress/`

<h3 id="ascanviewscanprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewscanprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewMessagesIds

<a id="opIdascanViewMessagesIds"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/messagesIds/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/messagesIds/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/messagesIds/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/messagesIds/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/messagesIds/`

Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view.

<h3 id="ascanviewmessagesids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewmessagesids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewAlertsIds

<a id="opIdascanViewAlertsIds"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/alertsIds/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/alertsIds/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/alertsIds/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/alertsIds/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/alertsIds/`

Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view.

<h3 id="ascanviewalertsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewalertsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewScans

<a id="opIdascanViewScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/scans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/scans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/scans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/scans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/scans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewScanPolicyNames

<a id="opIdascanViewScanPolicyNames"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/scanPolicyNames/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/scanPolicyNames/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/scanPolicyNames/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/scanPolicyNames/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/scanPolicyNames/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewscanpolicynames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewExcludedFromScan

<a id="opIdascanViewExcludedFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/excludedFromScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/excludedFromScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/excludedFromScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/excludedFromScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/excludedFromScan/`

Gets the regexes of URLs excluded from the active scans.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewexcludedfromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewScanners

<a id="opIdascanViewScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/scanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/scanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/scanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/scanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/scanners/`

Gets the scanners, optionally, of the given scan policy and/or scanner policy/category ID.

<h3 id="ascanviewscanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|false|none|
|policyId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewPolicies

<a id="opIdascanViewPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/policies/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/policies/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/policies/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/policies/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/policies/`

<h3 id="ascanviewpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|false|none|
|policyId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewAttackModeQueue

<a id="opIdascanViewAttackModeQueue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/attackModeQueue/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/attackModeQueue/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/attackModeQueue/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/attackModeQueue/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/attackModeQueue/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewattackmodequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewExcludedParams

<a id="opIdascanViewExcludedParams"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/excludedParams/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/excludedParams/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/excludedParams/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/excludedParams/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/excludedParams/`

Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewexcludedparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionExcludedParamList

<a id="opIdascanViewOptionExcludedParamList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionExcludedParamList/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionExcludedParamList/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionExcludedParamList/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionExcludedParamList/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionExcludedParamList/`

Use view excludedParams instead.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionexcludedparamlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewExcludedParamTypes

<a id="opIdascanViewExcludedParamTypes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/excludedParamTypes/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/excludedParamTypes/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/excludedParamTypes/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/excludedParamTypes/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/excludedParamTypes/`

Gets all the types of excluded parameters. For each type the following are shown: the ID and the name.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewexcludedparamtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionAttackPolicy

<a id="opIdascanViewOptionAttackPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionAttackPolicy/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionAttackPolicy/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionAttackPolicy/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionAttackPolicy/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionAttackPolicy/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionattackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionDefaultPolicy

<a id="opIdascanViewOptionDefaultPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionDefaultPolicy/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionDefaultPolicy/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionDefaultPolicy/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionDefaultPolicy/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionDefaultPolicy/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptiondefaultpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionDelayInMs

<a id="opIdascanViewOptionDelayInMs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionDelayInMs/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionDelayInMs/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionDelayInMs/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionDelayInMs/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionDelayInMs/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptiondelayinms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionHandleAntiCSRFTokens

<a id="opIdascanViewOptionHandleAntiCSRFTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionHandleAntiCSRFTokens/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionHandleAntiCSRFTokens/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionHandleAntiCSRFTokens/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionHandleAntiCSRFTokens/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionHandleAntiCSRFTokens/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionhandleanticsrftokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionHostPerScan

<a id="opIdascanViewOptionHostPerScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionHostPerScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionHostPerScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionHostPerScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionHostPerScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionHostPerScan/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionhostperscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionMaxChartTimeInMins

<a id="opIdascanViewOptionMaxChartTimeInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionMaxChartTimeInMins/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionMaxChartTimeInMins/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionMaxChartTimeInMins/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionMaxChartTimeInMins/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionMaxChartTimeInMins/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionmaxcharttimeinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionMaxResultsToList

<a id="opIdascanViewOptionMaxResultsToList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionMaxResultsToList/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionMaxResultsToList/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionMaxResultsToList/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionMaxResultsToList/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionMaxResultsToList/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionmaxresultstolist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionMaxRuleDurationInMins

<a id="opIdascanViewOptionMaxRuleDurationInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionMaxRuleDurationInMins/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionMaxRuleDurationInMins/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionMaxRuleDurationInMins/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionMaxRuleDurationInMins/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionMaxRuleDurationInMins/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionmaxruledurationinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionMaxScanDurationInMins

<a id="opIdascanViewOptionMaxScanDurationInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionMaxScanDurationInMins/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionMaxScanDurationInMins/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionMaxScanDurationInMins/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionMaxScanDurationInMins/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionMaxScanDurationInMins/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionmaxscandurationinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionMaxScansInUI

<a id="opIdascanViewOptionMaxScansInUI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionMaxScansInUI/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionMaxScansInUI/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionMaxScansInUI/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionMaxScansInUI/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionMaxScansInUI/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionmaxscansinui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionTargetParamsEnabledRPC

<a id="opIdascanViewOptionTargetParamsEnabledRPC"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionTargetParamsEnabledRPC/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionTargetParamsEnabledRPC/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionTargetParamsEnabledRPC/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionTargetParamsEnabledRPC/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionTargetParamsEnabledRPC/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptiontargetparamsenabledrpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionTargetParamsInjectable

<a id="opIdascanViewOptionTargetParamsInjectable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionTargetParamsInjectable/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionTargetParamsInjectable/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionTargetParamsInjectable/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionTargetParamsInjectable/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionTargetParamsInjectable/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptiontargetparamsinjectable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionThreadPerHost

<a id="opIdascanViewOptionThreadPerHost"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionThreadPerHost/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionThreadPerHost/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionThreadPerHost/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionThreadPerHost/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionThreadPerHost/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionthreadperhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionAddQueryParam

<a id="opIdascanViewOptionAddQueryParam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionAddQueryParam/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionAddQueryParam/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionAddQueryParam/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionAddQueryParam/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionAddQueryParam/`

Tells whether or not the active scanner should add a query parameter to GET request that don't have parameters to start with.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionaddqueryparam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionAllowAttackOnStart

<a id="opIdascanViewOptionAllowAttackOnStart"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionAllowAttackOnStart/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionAllowAttackOnStart/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionAllowAttackOnStart/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionAllowAttackOnStart/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionAllowAttackOnStart/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionallowattackonstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionInjectPluginIdInHeader

<a id="opIdascanViewOptionInjectPluginIdInHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionInjectPluginIdInHeader/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionInjectPluginIdInHeader/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionInjectPluginIdInHeader/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionInjectPluginIdInHeader/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionInjectPluginIdInHeader/`

Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that's sending the requests.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptioninjectpluginidinheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionPromptInAttackMode

<a id="opIdascanViewOptionPromptInAttackMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionPromptInAttackMode/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionPromptInAttackMode/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionPromptInAttackMode/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionPromptInAttackMode/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionPromptInAttackMode/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionpromptinattackmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionPromptToClearFinishedScans

<a id="opIdascanViewOptionPromptToClearFinishedScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionPromptToClearFinishedScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionPromptToClearFinishedScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionPromptToClearFinishedScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionPromptToClearFinishedScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionPromptToClearFinishedScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionprompttoclearfinishedscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionRescanInAttackMode

<a id="opIdascanViewOptionRescanInAttackMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionRescanInAttackMode/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionRescanInAttackMode/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionRescanInAttackMode/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionRescanInAttackMode/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionRescanInAttackMode/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionrescaninattackmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionScanHeadersAllRequests

<a id="opIdascanViewOptionScanHeadersAllRequests"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionScanHeadersAllRequests/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionScanHeadersAllRequests/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionScanHeadersAllRequests/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionScanHeadersAllRequests/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionScanHeadersAllRequests/`

Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionscanheadersallrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanViewOptionShowAdvancedDialog

<a id="opIdascanViewOptionShowAdvancedDialog"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/view/optionShowAdvancedDialog/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/view/optionShowAdvancedDialog/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/view/optionShowAdvancedDialog/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/view/optionShowAdvancedDialog/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/view/optionShowAdvancedDialog/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanviewoptionshowadvanceddialog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionScan

<a id="opIdascanActionScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/scan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/scan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/scan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/scan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/scan/`

Runs the active scanner against the given URL and/or Context. Optionally, the 'recurse' parameter can be used to scan URLs under the given URL, the parameter 'inScopeOnly' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified), the parameter 'scanPolicyName' allows to specify the scan policy (if none is given it uses the default scan policy), the parameters 'method' and 'postData' allow to select a given request in conjunction with the given URL.

<h3 id="ascanactionscan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|recurse|query|boolean|false|none|
|inScopeOnly|query|boolean|false|none|
|scanPolicyName|query|string|false|none|
|method|query|string|false|none|
|postData|query|string|false|none|
|contextId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionScanAsUser

<a id="opIdascanActionScanAsUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/scanAsUser/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/scanAsUser/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/scanAsUser/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/scanAsUser/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/scanAsUser/`

Active Scans from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details.

<h3 id="ascanactionscanasuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|contextId|query|integer|false|none|
|userId|query|integer|false|none|
|recurse|query|boolean|false|none|
|scanPolicyName|query|string|false|none|
|method|query|string|false|none|
|postData|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionscanasuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionPause

<a id="opIdascanActionPause"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/pause/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/pause/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/pause/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/pause/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/pause/`

<h3 id="ascanactionpause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionpause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionResume

<a id="opIdascanActionResume"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/resume/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/resume/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/resume/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/resume/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/resume/`

<h3 id="ascanactionresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionStop

<a id="opIdascanActionStop"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/stop/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/stop/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/stop/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/stop/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/stop/`

<h3 id="ascanactionstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionRemoveScan

<a id="opIdascanActionRemoveScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/removeScan/?scanId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/removeScan/?scanId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/removeScan/', params={
  'scanId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/removeScan/',
  params: {
  'scanId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/removeScan/`

<h3 id="ascanactionremovescan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionremovescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionPauseAllScans

<a id="opIdascanActionPauseAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/pauseAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/pauseAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/pauseAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/pauseAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/pauseAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionpauseallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionResumeAllScans

<a id="opIdascanActionResumeAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/resumeAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/resumeAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/resumeAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/resumeAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/resumeAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionresumeallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionStopAllScans

<a id="opIdascanActionStopAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/stopAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/stopAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/stopAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/stopAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/stopAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionstopallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionRemoveAllScans

<a id="opIdascanActionRemoveAllScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/removeAllScans/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/removeAllScans/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/removeAllScans/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/removeAllScans/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/removeAllScans/`

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionremoveallscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionClearExcludedFromScan

<a id="opIdascanActionClearExcludedFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/clearExcludedFromScan/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/clearExcludedFromScan/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/clearExcludedFromScan/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/clearExcludedFromScan/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/clearExcludedFromScan/`

Clears the regexes of URLs excluded from the active scans.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionclearexcludedfromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionExcludeFromScan

<a id="opIdascanActionExcludeFromScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/excludeFromScan/?regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/excludeFromScan/?regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/excludeFromScan/', params={
  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/excludeFromScan/',
  params: {
  'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/excludeFromScan/`

Adds a regex of URLs that should be excluded from the active scans.

<h3 id="ascanactionexcludefromscan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionexcludefromscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionEnableAllScanners

<a id="opIdascanActionEnableAllScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/enableAllScanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/enableAllScanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/enableAllScanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/enableAllScanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/enableAllScanners/`

Enables all scanners of the scan policy with the given name, or the default if none given.

<h3 id="ascanactionenableallscanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionenableallscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionDisableAllScanners

<a id="opIdascanActionDisableAllScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/disableAllScanners/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/disableAllScanners/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/disableAllScanners/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/disableAllScanners/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/disableAllScanners/`

Disables all scanners of the scan policy with the given name, or the default if none given.

<h3 id="ascanactiondisableallscanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactiondisableallscanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionEnableScanners

<a id="opIdascanActionEnableScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/enableScanners/?ids=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/enableScanners/?ids=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/enableScanners/', params={
  'ids': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/enableScanners/',
  params: {
  'ids' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/enableScanners/`

Enables the scanners with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.

<h3 id="ascanactionenablescanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionenablescanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionDisableScanners

<a id="opIdascanActionDisableScanners"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/disableScanners/?ids=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/disableScanners/?ids=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/disableScanners/', params={
  'ids': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/disableScanners/',
  params: {
  'ids' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/disableScanners/`

Disables the scanners with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given.

<h3 id="ascanactiondisablescanners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactiondisablescanners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetEnabledPolicies

<a id="opIdascanActionSetEnabledPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setEnabledPolicies/?ids=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setEnabledPolicies/?ids=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setEnabledPolicies/', params={
  'ids': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setEnabledPolicies/',
  params: {
  'ids' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setEnabledPolicies/`

<h3 id="ascanactionsetenabledpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetenabledpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetPolicyAttackStrength

<a id="opIdascanActionSetPolicyAttackStrength"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setPolicyAttackStrength/?id=0&attackStrength=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setPolicyAttackStrength/?id=0&attackStrength=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setPolicyAttackStrength/', params={
  'id': '0',  'attackStrength': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setPolicyAttackStrength/',
  params: {
  'id' => 'integer',
'attackStrength' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setPolicyAttackStrength/`

<h3 id="ascanactionsetpolicyattackstrength-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|
|attackStrength|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetpolicyattackstrength-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetPolicyAlertThreshold

<a id="opIdascanActionSetPolicyAlertThreshold"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setPolicyAlertThreshold/?id=0&alertThreshold=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setPolicyAlertThreshold/?id=0&alertThreshold=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setPolicyAlertThreshold/', params={
  'id': '0',  'alertThreshold': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setPolicyAlertThreshold/',
  params: {
  'id' => 'integer',
'alertThreshold' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setPolicyAlertThreshold/`

<h3 id="ascanactionsetpolicyalertthreshold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|
|alertThreshold|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetpolicyalertthreshold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetScannerAttackStrength

<a id="opIdascanActionSetScannerAttackStrength"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setScannerAttackStrength/?id=0&attackStrength=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setScannerAttackStrength/?id=0&attackStrength=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setScannerAttackStrength/', params={
  'id': '0',  'attackStrength': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setScannerAttackStrength/',
  params: {
  'id' => 'integer',
'attackStrength' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setScannerAttackStrength/`

<h3 id="ascanactionsetscannerattackstrength-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|
|attackStrength|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetscannerattackstrength-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetScannerAlertThreshold

<a id="opIdascanActionSetScannerAlertThreshold"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setScannerAlertThreshold/?id=0&alertThreshold=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setScannerAlertThreshold/?id=0&alertThreshold=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setScannerAlertThreshold/', params={
  'id': '0',  'alertThreshold': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setScannerAlertThreshold/',
  params: {
  'id' => 'integer',
'alertThreshold' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setScannerAlertThreshold/`

<h3 id="ascanactionsetscanneralertthreshold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|
|alertThreshold|query|string|true|none|
|scanPolicyName|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetscanneralertthreshold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionAddScanPolicy

<a id="opIdascanActionAddScanPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/addScanPolicy/?scanPolicyName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/addScanPolicy/?scanPolicyName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/addScanPolicy/', params={
  'scanPolicyName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/addScanPolicy/',
  params: {
  'scanPolicyName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/addScanPolicy/`

<h3 id="ascanactionaddscanpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|true|none|
|alertThreshold|query|string|false|none|
|attackStrength|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionaddscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionRemoveScanPolicy

<a id="opIdascanActionRemoveScanPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/removeScanPolicy/?scanPolicyName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/removeScanPolicy/?scanPolicyName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/removeScanPolicy/', params={
  'scanPolicyName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/removeScanPolicy/',
  params: {
  'scanPolicyName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/removeScanPolicy/`

<h3 id="ascanactionremovescanpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionremovescanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionUpdateScanPolicy

<a id="opIdascanActionUpdateScanPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/updateScanPolicy/?scanPolicyName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/updateScanPolicy/?scanPolicyName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/updateScanPolicy/', params={
  'scanPolicyName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/updateScanPolicy/',
  params: {
  'scanPolicyName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/updateScanPolicy/`

<h3 id="ascanactionupdatescanpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanPolicyName|query|string|true|none|
|alertThreshold|query|string|false|none|
|attackStrength|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionupdatescanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionImportScanPolicy

<a id="opIdascanActionImportScanPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/importScanPolicy/?path=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/importScanPolicy/?path=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/importScanPolicy/', params={
  'path': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/importScanPolicy/',
  params: {
  'path' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/importScanPolicy/`

Imports a Scan Policy using the given file system path.

<h3 id="ascanactionimportscanpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionimportscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionAddExcludedParam

<a id="opIdascanActionAddExcludedParam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/addExcludedParam/?name=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/addExcludedParam/?name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/addExcludedParam/', params={
  'name': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/addExcludedParam/',
  params: {
  'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/addExcludedParam/`

Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes. 

<h3 id="ascanactionaddexcludedparam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|
|type|query|string|false|none|
|url|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionaddexcludedparam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionModifyExcludedParam

<a id="opIdascanActionModifyExcludedParam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/modifyExcludedParam/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/modifyExcludedParam/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/modifyExcludedParam/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/modifyExcludedParam/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/modifyExcludedParam/`

Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams.

<h3 id="ascanactionmodifyexcludedparam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|
|name|query|string|false|none|
|type|query|string|false|none|
|url|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionmodifyexcludedparam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionRemoveExcludedParam

<a id="opIdascanActionRemoveExcludedParam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/removeExcludedParam/?idx=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/removeExcludedParam/?idx=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/removeExcludedParam/', params={
  'idx': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/removeExcludedParam/',
  params: {
  'idx' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/removeExcludedParam/`

Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams.

<h3 id="ascanactionremoveexcludedparam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idx|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionremoveexcludedparam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSkipScanner

<a id="opIdascanActionSkipScanner"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/skipScanner/?scanId=0&scannerId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/skipScanner/?scanId=0&scannerId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/skipScanner/', params={
  'scanId': '0',  'scannerId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/skipScanner/',
  params: {
  'scanId' => 'integer',
'scannerId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/skipScanner/`

Skips the scanner using the given IDs of the scan and the scanner.

<h3 id="ascanactionskipscanner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|query|integer|true|none|
|scannerId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionskipscanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionAttackPolicy

<a id="opIdascanActionSetOptionAttackPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionAttackPolicy/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionAttackPolicy/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionAttackPolicy/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionAttackPolicy/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionAttackPolicy/`

<h3 id="ascanactionsetoptionattackpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionattackpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionDefaultPolicy

<a id="opIdascanActionSetOptionDefaultPolicy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionDefaultPolicy/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionDefaultPolicy/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionDefaultPolicy/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionDefaultPolicy/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionDefaultPolicy/`

<h3 id="ascanactionsetoptiondefaultpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptiondefaultpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionAddQueryParam

<a id="opIdascanActionSetOptionAddQueryParam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionAddQueryParam/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionAddQueryParam/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionAddQueryParam/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionAddQueryParam/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionAddQueryParam/`

Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with.

<h3 id="ascanactionsetoptionaddqueryparam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionaddqueryparam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionAllowAttackOnStart

<a id="opIdascanActionSetOptionAllowAttackOnStart"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionAllowAttackOnStart/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionAllowAttackOnStart/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionAllowAttackOnStart/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionAllowAttackOnStart/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionAllowAttackOnStart/`

<h3 id="ascanactionsetoptionallowattackonstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionallowattackonstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionDelayInMs

<a id="opIdascanActionSetOptionDelayInMs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionDelayInMs/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionDelayInMs/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionDelayInMs/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionDelayInMs/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionDelayInMs/`

<h3 id="ascanactionsetoptiondelayinms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptiondelayinms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionHandleAntiCSRFTokens

<a id="opIdascanActionSetOptionHandleAntiCSRFTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionHandleAntiCSRFTokens/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionHandleAntiCSRFTokens/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionHandleAntiCSRFTokens/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionHandleAntiCSRFTokens/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionHandleAntiCSRFTokens/`

<h3 id="ascanactionsetoptionhandleanticsrftokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionhandleanticsrftokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionHostPerScan

<a id="opIdascanActionSetOptionHostPerScan"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionHostPerScan/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionHostPerScan/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionHostPerScan/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionHostPerScan/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionHostPerScan/`

<h3 id="ascanactionsetoptionhostperscan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionhostperscan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionInjectPluginIdInHeader

<a id="opIdascanActionSetOptionInjectPluginIdInHeader"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionInjectPluginIdInHeader/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionInjectPluginIdInHeader/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionInjectPluginIdInHeader/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionInjectPluginIdInHeader/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionInjectPluginIdInHeader/`

Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scanner that's sending the requests.

<h3 id="ascanactionsetoptioninjectpluginidinheader-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptioninjectpluginidinheader-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionMaxChartTimeInMins

<a id="opIdascanActionSetOptionMaxChartTimeInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionMaxChartTimeInMins/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionMaxChartTimeInMins/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionMaxChartTimeInMins/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionMaxChartTimeInMins/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionMaxChartTimeInMins/`

<h3 id="ascanactionsetoptionmaxcharttimeinmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionmaxcharttimeinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionMaxResultsToList

<a id="opIdascanActionSetOptionMaxResultsToList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionMaxResultsToList/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionMaxResultsToList/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionMaxResultsToList/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionMaxResultsToList/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionMaxResultsToList/`

<h3 id="ascanactionsetoptionmaxresultstolist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionmaxresultstolist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionMaxRuleDurationInMins

<a id="opIdascanActionSetOptionMaxRuleDurationInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionMaxRuleDurationInMins/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionMaxRuleDurationInMins/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionMaxRuleDurationInMins/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionMaxRuleDurationInMins/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionMaxRuleDurationInMins/`

<h3 id="ascanactionsetoptionmaxruledurationinmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionmaxruledurationinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionMaxScanDurationInMins

<a id="opIdascanActionSetOptionMaxScanDurationInMins"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionMaxScanDurationInMins/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionMaxScanDurationInMins/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionMaxScanDurationInMins/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionMaxScanDurationInMins/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionMaxScanDurationInMins/`

<h3 id="ascanactionsetoptionmaxscandurationinmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionmaxscandurationinmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionMaxScansInUI

<a id="opIdascanActionSetOptionMaxScansInUI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionMaxScansInUI/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionMaxScansInUI/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionMaxScansInUI/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionMaxScansInUI/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionMaxScansInUI/`

<h3 id="ascanactionsetoptionmaxscansinui-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionmaxscansinui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionPromptInAttackMode

<a id="opIdascanActionSetOptionPromptInAttackMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionPromptInAttackMode/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionPromptInAttackMode/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionPromptInAttackMode/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionPromptInAttackMode/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionPromptInAttackMode/`

<h3 id="ascanactionsetoptionpromptinattackmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionpromptinattackmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionPromptToClearFinishedScans

<a id="opIdascanActionSetOptionPromptToClearFinishedScans"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionPromptToClearFinishedScans/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionPromptToClearFinishedScans/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionPromptToClearFinishedScans/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionPromptToClearFinishedScans/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionPromptToClearFinishedScans/`

<h3 id="ascanactionsetoptionprompttoclearfinishedscans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionprompttoclearfinishedscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionRescanInAttackMode

<a id="opIdascanActionSetOptionRescanInAttackMode"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionRescanInAttackMode/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionRescanInAttackMode/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionRescanInAttackMode/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionRescanInAttackMode/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionRescanInAttackMode/`

<h3 id="ascanactionsetoptionrescaninattackmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionrescaninattackmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionScanHeadersAllRequests

<a id="opIdascanActionSetOptionScanHeadersAllRequests"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionScanHeadersAllRequests/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionScanHeadersAllRequests/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionScanHeadersAllRequests/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionScanHeadersAllRequests/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionScanHeadersAllRequests/`

Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body.

<h3 id="ascanactionsetoptionscanheadersallrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionscanheadersallrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionShowAdvancedDialog

<a id="opIdascanActionSetOptionShowAdvancedDialog"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionShowAdvancedDialog/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionShowAdvancedDialog/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionShowAdvancedDialog/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionShowAdvancedDialog/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionShowAdvancedDialog/`

<h3 id="ascanactionsetoptionshowadvanceddialog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionshowadvanceddialog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionTargetParamsEnabledRPC

<a id="opIdascanActionSetOptionTargetParamsEnabledRPC"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionTargetParamsEnabledRPC/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionTargetParamsEnabledRPC/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionTargetParamsEnabledRPC/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionTargetParamsEnabledRPC/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionTargetParamsEnabledRPC/`

<h3 id="ascanactionsetoptiontargetparamsenabledrpc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptiontargetparamsenabledrpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionTargetParamsInjectable

<a id="opIdascanActionSetOptionTargetParamsInjectable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionTargetParamsInjectable/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionTargetParamsInjectable/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionTargetParamsInjectable/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionTargetParamsInjectable/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionTargetParamsInjectable/`

<h3 id="ascanactionsetoptiontargetparamsinjectable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptiontargetparamsinjectable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ascanActionSetOptionThreadPerHost

<a id="opIdascanActionSetOptionThreadPerHost"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ascan/action/setOptionThreadPerHost/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ascan/action/setOptionThreadPerHost/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ascan/action/setOptionThreadPerHost/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ascan/action/setOptionThreadPerHost/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ascan/action/setOptionThreadPerHost/`

<h3 id="ascanactionsetoptionthreadperhost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ascanactionsetoptionthreadperhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-context">context</h1>

## contextViewContextList

<a id="opIdcontextViewContextList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/contextList/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/contextList/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/contextList/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/contextList/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/contextList/`

List context names of current session

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewcontextlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewExcludeRegexs

<a id="opIdcontextViewExcludeRegexs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/excludeRegexs/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/excludeRegexs/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/excludeRegexs/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/excludeRegexs/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/excludeRegexs/`

List excluded regexs for context

<h3 id="contextviewexcluderegexs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewexcluderegexs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewIncludeRegexs

<a id="opIdcontextViewIncludeRegexs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/includeRegexs/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/includeRegexs/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/includeRegexs/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/includeRegexs/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/includeRegexs/`

List included regexs for context

<h3 id="contextviewincluderegexs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewincluderegexs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewContext

<a id="opIdcontextViewContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/context/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/context/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/context/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/context/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/context/`

List the information about the named context

<h3 id="contextviewcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewTechnologyList

<a id="opIdcontextViewTechnologyList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/technologyList/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/technologyList/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/technologyList/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/technologyList/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/technologyList/`

Lists the names of all built in technologies

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewtechnologylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewIncludedTechnologyList

<a id="opIdcontextViewIncludedTechnologyList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/includedTechnologyList/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/includedTechnologyList/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/includedTechnologyList/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/includedTechnologyList/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/includedTechnologyList/`

Lists the names of all technologies included in a context

<h3 id="contextviewincludedtechnologylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewincludedtechnologylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewExcludedTechnologyList

<a id="opIdcontextViewExcludedTechnologyList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/excludedTechnologyList/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/excludedTechnologyList/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/excludedTechnologyList/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/excludedTechnologyList/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/excludedTechnologyList/`

Lists the names of all technologies excluded from a context

<h3 id="contextviewexcludedtechnologylist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewexcludedtechnologylist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextViewUrls

<a id="opIdcontextViewUrls"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/view/urls/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/view/urls/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/view/urls/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/view/urls/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/view/urls/`

Lists the URLs accessed through/by ZAP, that belong to the context with the given name.

<h3 id="contextviewurls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextviewurls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionExcludeFromContext

<a id="opIdcontextActionExcludeFromContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/excludeFromContext/?contextName=string&regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/excludeFromContext/?contextName=string&regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/excludeFromContext/', params={
  'contextName': 'string',  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/excludeFromContext/',
  params: {
  'contextName' => 'string',
'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/excludeFromContext/`

Add exclude regex to context

<h3 id="contextactionexcludefromcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|regex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionexcludefromcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionIncludeInContext

<a id="opIdcontextActionIncludeInContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/includeInContext/?contextName=string&regex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/includeInContext/?contextName=string&regex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/includeInContext/', params={
  'contextName': 'string',  'regex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/includeInContext/',
  params: {
  'contextName' => 'string',
'regex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/includeInContext/`

Add include regex to context

<h3 id="contextactionincludeincontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|regex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionincludeincontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionSetContextRegexs

<a id="opIdcontextActionSetContextRegexs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/setContextRegexs/?contextName=string&incRegexs=string&excRegexs=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/setContextRegexs/?contextName=string&incRegexs=string&excRegexs=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/setContextRegexs/', params={
  'contextName': 'string',  'incRegexs': 'string',  'excRegexs': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/setContextRegexs/',
  params: {
  'contextName' => 'string',
'incRegexs' => 'string',
'excRegexs' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/setContextRegexs/`

Set the regexs to include and exclude for a context, both supplied as JSON string arrays

<h3 id="contextactionsetcontextregexs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|incRegexs|query|string|true|none|
|excRegexs|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionsetcontextregexs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionNewContext

<a id="opIdcontextActionNewContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/newContext/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/newContext/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/newContext/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/newContext/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/newContext/`

Creates a new context with the given name in the current session

<h3 id="contextactionnewcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionnewcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionRemoveContext

<a id="opIdcontextActionRemoveContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/removeContext/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/removeContext/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/removeContext/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/removeContext/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/removeContext/`

Removes a context in the current session

<h3 id="contextactionremovecontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionremovecontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionExportContext

<a id="opIdcontextActionExportContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/exportContext/?contextName=string&contextFile=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/exportContext/?contextName=string&contextFile=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/exportContext/', params={
  'contextName': 'string',  'contextFile': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/exportContext/',
  params: {
  'contextName' => 'string',
'contextFile' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/exportContext/`

Exports the context with the given name to a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.

<h3 id="contextactionexportcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|contextFile|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionexportcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionImportContext

<a id="opIdcontextActionImportContext"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/importContext/?contextFile=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/importContext/?contextFile=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/importContext/', params={
  'contextFile': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/importContext/',
  params: {
  'contextFile' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/importContext/`

Imports a context from a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir.

<h3 id="contextactionimportcontext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextFile|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionimportcontext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionIncludeContextTechnologies

<a id="opIdcontextActionIncludeContextTechnologies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/includeContextTechnologies/?contextName=string&technologyNames=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/includeContextTechnologies/?contextName=string&technologyNames=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/includeContextTechnologies/', params={
  'contextName': 'string',  'technologyNames': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/includeContextTechnologies/',
  params: {
  'contextName' => 'string',
'technologyNames' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/includeContextTechnologies/`

Includes technologies with the given names, separated by a comma, to a context

<h3 id="contextactionincludecontexttechnologies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|technologyNames|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionincludecontexttechnologies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionIncludeAllContextTechnologies

<a id="opIdcontextActionIncludeAllContextTechnologies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/includeAllContextTechnologies/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/includeAllContextTechnologies/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/includeAllContextTechnologies/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/includeAllContextTechnologies/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/includeAllContextTechnologies/`

Includes all built in technologies in to a context

<h3 id="contextactionincludeallcontexttechnologies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionincludeallcontexttechnologies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionExcludeContextTechnologies

<a id="opIdcontextActionExcludeContextTechnologies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/excludeContextTechnologies/?contextName=string&technologyNames=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/excludeContextTechnologies/?contextName=string&technologyNames=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/excludeContextTechnologies/', params={
  'contextName': 'string',  'technologyNames': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/excludeContextTechnologies/',
  params: {
  'contextName' => 'string',
'technologyNames' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/excludeContextTechnologies/`

Excludes technologies with the given names, separated by a comma, from a context

<h3 id="contextactionexcludecontexttechnologies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|technologyNames|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionexcludecontexttechnologies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionExcludeAllContextTechnologies

<a id="opIdcontextActionExcludeAllContextTechnologies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/excludeAllContextTechnologies/?contextName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/excludeAllContextTechnologies/?contextName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/excludeAllContextTechnologies/', params={
  'contextName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/excludeAllContextTechnologies/',
  params: {
  'contextName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/excludeAllContextTechnologies/`

Excludes all built in technologies from a context

<h3 id="contextactionexcludeallcontexttechnologies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionexcludeallcontexttechnologies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## contextActionSetContextInScope

<a id="opIdcontextActionSetContextInScope"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/context/action/setContextInScope/?contextName=string&booleanInScope=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/context/action/setContextInScope/?contextName=string&booleanInScope=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/context/action/setContextInScope/', params={
  'contextName': 'string',  'booleanInScope': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/context/action/setContextInScope/',
  params: {
  'contextName' => 'string',
'booleanInScope' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/context/action/setContextInScope/`

Sets a context to in scope (contexts are in scope by default)

<h3 id="contextactionsetcontextinscope-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextName|query|string|true|none|
|booleanInScope|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="contextactionsetcontextinscope-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-httpsessions">httpSessions</h1>

## httpSessionsViewSites

<a id="opIdhttpSessionsViewSites"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/view/sites/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/view/sites/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/view/sites/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/view/sites/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/view/sites/`

Gets all of the sites that have sessions.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsviewsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsViewSessions

<a id="opIdhttpSessionsViewSessions"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/view/sessions/?site=string&session=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/view/sessions/?site=string&session=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/view/sessions/', params={
  'site': 'string',  'session': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/view/sessions/',
  params: {
  'site' => 'string',
'session' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/view/sessions/`

Gets the sessions for the given site. Optionally returning just the session with the given name.

<h3 id="httpsessionsviewsessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|session|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsviewsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsViewActiveSession

<a id="opIdhttpSessionsViewActiveSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/view/activeSession/?site=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/view/activeSession/?site=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/view/activeSession/', params={
  'site': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/view/activeSession/',
  params: {
  'site' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/view/activeSession/`

Gets the name of the active session for the given site.

<h3 id="httpsessionsviewactivesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsviewactivesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsViewSessionTokens

<a id="opIdhttpSessionsViewSessionTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/view/sessionTokens/?site=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/view/sessionTokens/?site=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/view/sessionTokens/', params={
  'site': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/view/sessionTokens/',
  params: {
  'site' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/view/sessionTokens/`

Gets the names of the session tokens for the given site.

<h3 id="httpsessionsviewsessiontokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsviewsessiontokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsViewDefaultSessionTokens

<a id="opIdhttpSessionsViewDefaultSessionTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/view/defaultSessionTokens/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/view/defaultSessionTokens/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/view/defaultSessionTokens/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/view/defaultSessionTokens/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/view/defaultSessionTokens/`

Gets the default session tokens.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsviewdefaultsessiontokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionCreateEmptySession

<a id="opIdhttpSessionsActionCreateEmptySession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/createEmptySession/?site=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/createEmptySession/?site=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/createEmptySession/', params={
  'site': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/createEmptySession/',
  params: {
  'site' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/createEmptySession/`

Creates an empty session for the given site. Optionally with the given name.

<h3 id="httpsessionsactioncreateemptysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|session|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactioncreateemptysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionRemoveSession

<a id="opIdhttpSessionsActionRemoveSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/removeSession/?site=string&session=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/removeSession/?site=string&session=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/removeSession/', params={
  'site': 'string',  'session': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/removeSession/',
  params: {
  'site' => 'string',
'session' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/removeSession/`

Removes the session from the given site.

<h3 id="httpsessionsactionremovesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|session|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionremovesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionSetActiveSession

<a id="opIdhttpSessionsActionSetActiveSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/setActiveSession/?site=string&session=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/setActiveSession/?site=string&session=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/setActiveSession/', params={
  'site': 'string',  'session': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/setActiveSession/',
  params: {
  'site' => 'string',
'session' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/setActiveSession/`

Sets the given session as active for the given site.

<h3 id="httpsessionsactionsetactivesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|session|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionsetactivesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionUnsetActiveSession

<a id="opIdhttpSessionsActionUnsetActiveSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/unsetActiveSession/?site=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/unsetActiveSession/?site=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/unsetActiveSession/', params={
  'site': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/unsetActiveSession/',
  params: {
  'site' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/unsetActiveSession/`

Unsets the active session of the given site.

<h3 id="httpsessionsactionunsetactivesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionunsetactivesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionAddSessionToken

<a id="opIdhttpSessionsActionAddSessionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/addSessionToken/?site=string&sessionToken=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/addSessionToken/?site=string&sessionToken=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/addSessionToken/', params={
  'site': 'string',  'sessionToken': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/addSessionToken/',
  params: {
  'site' => 'string',
'sessionToken' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/addSessionToken/`

Adds the session token to the given site.

<h3 id="httpsessionsactionaddsessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|sessionToken|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionaddsessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionRemoveSessionToken

<a id="opIdhttpSessionsActionRemoveSessionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/removeSessionToken/?site=string&sessionToken=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/removeSessionToken/?site=string&sessionToken=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/removeSessionToken/', params={
  'site': 'string',  'sessionToken': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/removeSessionToken/',
  params: {
  'site' => 'string',
'sessionToken' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/removeSessionToken/`

Removes the session token from the given site.

<h3 id="httpsessionsactionremovesessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|sessionToken|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionremovesessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionSetSessionTokenValue

<a id="opIdhttpSessionsActionSetSessionTokenValue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/setSessionTokenValue/?site=string&session=string&sessionToken=string&tokenValue=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/setSessionTokenValue/?site=string&session=string&sessionToken=string&tokenValue=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/setSessionTokenValue/', params={
  'site': 'string',  'session': 'string',  'sessionToken': 'string',  'tokenValue': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/setSessionTokenValue/',
  params: {
  'site' => 'string',
'session' => 'string',
'sessionToken' => 'string',
'tokenValue' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/setSessionTokenValue/`

Sets the value of the session token of the given session for the given site.

<h3 id="httpsessionsactionsetsessiontokenvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|session|query|string|true|none|
|sessionToken|query|string|true|none|
|tokenValue|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionsetsessiontokenvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionRenameSession

<a id="opIdhttpSessionsActionRenameSession"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/renameSession/?site=string&oldSessionName=string&newSessionName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/renameSession/?site=string&oldSessionName=string&newSessionName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/renameSession/', params={
  'site': 'string',  'oldSessionName': 'string',  'newSessionName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/renameSession/',
  params: {
  'site' => 'string',
'oldSessionName' => 'string',
'newSessionName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/renameSession/`

Renames the session of the given site.

<h3 id="httpsessionsactionrenamesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|oldSessionName|query|string|true|none|
|newSessionName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionrenamesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionAddDefaultSessionToken

<a id="opIdhttpSessionsActionAddDefaultSessionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/addDefaultSessionToken/?sessionToken=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/addDefaultSessionToken/?sessionToken=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/addDefaultSessionToken/', params={
  'sessionToken': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/addDefaultSessionToken/',
  params: {
  'sessionToken' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/addDefaultSessionToken/`

Adds a default session token with the given name and enabled state.

<h3 id="httpsessionsactionadddefaultsessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionToken|query|string|true|none|
|tokenEnabled|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionadddefaultsessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionSetDefaultSessionTokenEnabled

<a id="opIdhttpSessionsActionSetDefaultSessionTokenEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/setDefaultSessionTokenEnabled/?sessionToken=string&tokenEnabled=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/setDefaultSessionTokenEnabled/?sessionToken=string&tokenEnabled=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/setDefaultSessionTokenEnabled/', params={
  'sessionToken': 'string',  'tokenEnabled': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/setDefaultSessionTokenEnabled/',
  params: {
  'sessionToken' => 'string',
'tokenEnabled' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/setDefaultSessionTokenEnabled/`

Sets whether or not the default session token with the given name is enabled.

<h3 id="httpsessionsactionsetdefaultsessiontokenenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionToken|query|string|true|none|
|tokenEnabled|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionsetdefaultsessiontokenenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## httpSessionsActionRemoveDefaultSessionToken

<a id="opIdhttpSessionsActionRemoveDefaultSessionToken"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/httpSessions/action/removeDefaultSessionToken/?sessionToken=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/httpSessions/action/removeDefaultSessionToken/?sessionToken=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/httpSessions/action/removeDefaultSessionToken/', params={
  'sessionToken': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/httpSessions/action/removeDefaultSessionToken/',
  params: {
  'sessionToken' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/httpSessions/action/removeDefaultSessionToken/`

Removes the default session token with the given name.

<h3 id="httpsessionsactionremovedefaultsessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionToken|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="httpsessionsactionremovedefaultsessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-break">break</h1>

## breakViewIsBreakAll

<a id="opIdbreakViewIsBreakAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/view/isBreakAll/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/view/isBreakAll/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/view/isBreakAll/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/view/isBreakAll/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/view/isBreakAll/`

Returns True if ZAP will break on both requests and responses

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakviewisbreakall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakViewIsBreakRequest

<a id="opIdbreakViewIsBreakRequest"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/view/isBreakRequest/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/view/isBreakRequest/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/view/isBreakRequest/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/view/isBreakRequest/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/view/isBreakRequest/`

Returns True if ZAP will break on requests

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakviewisbreakrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakViewIsBreakResponse

<a id="opIdbreakViewIsBreakResponse"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/view/isBreakResponse/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/view/isBreakResponse/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/view/isBreakResponse/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/view/isBreakResponse/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/view/isBreakResponse/`

Returns True if ZAP will break on responses

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakviewisbreakresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakViewHttpMessage

<a id="opIdbreakViewHttpMessage"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/view/httpMessage/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/view/httpMessage/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/view/httpMessage/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/view/httpMessage/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/view/httpMessage/`

Returns the HTTP message currently intercepted (if any)

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakviewhttpmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionBreak

<a id="opIdbreakActionBreak"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/break/?type=string&state=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/break/?type=string&state=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/break/', params={
  'type': 'string',  'state': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/break/',
  params: {
  'type' => 'string',
'state' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/break/`

Controls the global break functionality. The type may be one of: http-all, http-request or http-response. The state may be true (for turning break on for the specified type) or false (for turning break off). Scope is not currently used.

<h3 id="breakactionbreak-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|none|
|state|query|string|true|none|
|scope|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactionbreak-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionSetHttpMessage

<a id="opIdbreakActionSetHttpMessage"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/setHttpMessage/?httpHeader=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/setHttpMessage/?httpHeader=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/setHttpMessage/', params={
  'httpHeader': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/setHttpMessage/',
  params: {
  'httpHeader' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/setHttpMessage/`

Overwrites the currently intercepted message with the data provided

<h3 id="breakactionsethttpmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|httpHeader|query|string|true|none|
|httpBody|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactionsethttpmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionContinue

<a id="opIdbreakActionContinue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/continue/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/continue/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/continue/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/continue/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/continue/`

Submits the currently intercepted message and unsets the global request/response break points

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactioncontinue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionStep

<a id="opIdbreakActionStep"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/step/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/step/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/step/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/step/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/step/`

Submits the currently intercepted message, the next request or response will automatically be intercepted

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactionstep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionDrop

<a id="opIdbreakActionDrop"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/drop/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/drop/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/drop/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/drop/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/drop/`

Drops the currently intercepted message

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactiondrop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionAddHttpBreakpoint

<a id="opIdbreakActionAddHttpBreakpoint"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/addHttpBreakpoint/?string=string&location=string&match=string&inverse=true&ignorecase=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/addHttpBreakpoint/?string=string&location=string&match=string&inverse=true&ignorecase=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/addHttpBreakpoint/', params={
  'string': 'string',  'location': 'string',  'match': 'string',  'inverse': 'true',  'ignorecase': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/addHttpBreakpoint/',
  params: {
  'string' => 'string',
'location' => 'string',
'match' => 'string',
'inverse' => 'boolean',
'ignorecase' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/addHttpBreakpoint/`

Adds a custom HTTP breakpoint. The string is the string to match. Location may be one of: url, request_header, request_body, response_header or response_body. Match may be: contains or regex. Inverse (match) may be true or false. Lastly, ignorecase (when matching the string) may be true or false.  

<h3 id="breakactionaddhttpbreakpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|string|query|string|true|none|
|location|query|string|true|none|
|match|query|string|true|none|
|inverse|query|boolean|true|none|
|ignorecase|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactionaddhttpbreakpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## breakActionRemoveHttpBreakpoint

<a id="opIdbreakActionRemoveHttpBreakpoint"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/break/action/removeHttpBreakpoint/?string=string&location=string&match=string&inverse=true&ignorecase=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/break/action/removeHttpBreakpoint/?string=string&location=string&match=string&inverse=true&ignorecase=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/break/action/removeHttpBreakpoint/', params={
  'string': 'string',  'location': 'string',  'match': 'string',  'inverse': 'true',  'ignorecase': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/break/action/removeHttpBreakpoint/',
  params: {
  'string' => 'string',
'location' => 'string',
'match' => 'string',
'inverse' => 'boolean',
'ignorecase' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/break/action/removeHttpBreakpoint/`

Removes the specified break point

<h3 id="breakactionremovehttpbreakpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|string|query|string|true|none|
|location|query|string|true|none|
|match|query|string|true|none|
|inverse|query|boolean|true|none|
|ignorecase|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="breakactionremovehttpbreakpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-authentication">authentication</h1>

## authenticationViewGetSupportedAuthenticationMethods

<a id="opIdauthenticationViewGetSupportedAuthenticationMethods"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/view/getSupportedAuthenticationMethods/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/view/getSupportedAuthenticationMethods/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/view/getSupportedAuthenticationMethods/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/view/getSupportedAuthenticationMethods/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/view/getSupportedAuthenticationMethods/`

Gets the name of the authentication methods.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationviewgetsupportedauthenticationmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationViewGetAuthenticationMethodConfigParams

<a id="opIdauthenticationViewGetAuthenticationMethodConfigParams"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/view/getAuthenticationMethodConfigParams/?authMethodName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/view/getAuthenticationMethodConfigParams/?authMethodName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/view/getAuthenticationMethodConfigParams/', params={
  'authMethodName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/view/getAuthenticationMethodConfigParams/',
  params: {
  'authMethodName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/view/getAuthenticationMethodConfigParams/`

Gets the configuration parameters for the authentication method with the given name.

<h3 id="authenticationviewgetauthenticationmethodconfigparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authMethodName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationviewgetauthenticationmethodconfigparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationViewGetAuthenticationMethod

<a id="opIdauthenticationViewGetAuthenticationMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/view/getAuthenticationMethod/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/view/getAuthenticationMethod/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/view/getAuthenticationMethod/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/view/getAuthenticationMethod/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/view/getAuthenticationMethod/`

Gets the name of the authentication method for the context with the given ID.

<h3 id="authenticationviewgetauthenticationmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationviewgetauthenticationmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationViewGetLoggedInIndicator

<a id="opIdauthenticationViewGetLoggedInIndicator"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/view/getLoggedInIndicator/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/view/getLoggedInIndicator/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/view/getLoggedInIndicator/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/view/getLoggedInIndicator/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/view/getLoggedInIndicator/`

Gets the logged in indicator for the context with the given ID.

<h3 id="authenticationviewgetloggedinindicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationviewgetloggedinindicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationViewGetLoggedOutIndicator

<a id="opIdauthenticationViewGetLoggedOutIndicator"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/view/getLoggedOutIndicator/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/view/getLoggedOutIndicator/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/view/getLoggedOutIndicator/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/view/getLoggedOutIndicator/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/view/getLoggedOutIndicator/`

Gets the logged out indicator for the context with the given ID.

<h3 id="authenticationviewgetloggedoutindicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationviewgetloggedoutindicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationActionSetAuthenticationMethod

<a id="opIdauthenticationActionSetAuthenticationMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/action/setAuthenticationMethod/?contextId=0&authMethodName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/action/setAuthenticationMethod/?contextId=0&authMethodName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/action/setAuthenticationMethod/', params={
  'contextId': '0',  'authMethodName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/action/setAuthenticationMethod/',
  params: {
  'contextId' => 'integer',
'authMethodName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/action/setAuthenticationMethod/`

Sets the authentication method for the context with the given ID.

<h3 id="authenticationactionsetauthenticationmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|authMethodName|query|string|true|none|
|authMethodConfigParams|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationactionsetauthenticationmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationActionSetLoggedInIndicator

<a id="opIdauthenticationActionSetLoggedInIndicator"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/action/setLoggedInIndicator/?contextId=0&loggedInIndicatorRegex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/action/setLoggedInIndicator/?contextId=0&loggedInIndicatorRegex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/action/setLoggedInIndicator/', params={
  'contextId': '0',  'loggedInIndicatorRegex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/action/setLoggedInIndicator/',
  params: {
  'contextId' => 'integer',
'loggedInIndicatorRegex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/action/setLoggedInIndicator/`

Sets the logged in indicator for the context with the given ID.

<h3 id="authenticationactionsetloggedinindicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|loggedInIndicatorRegex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationactionsetloggedinindicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authenticationActionSetLoggedOutIndicator

<a id="opIdauthenticationActionSetLoggedOutIndicator"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authentication/action/setLoggedOutIndicator/?contextId=0&loggedOutIndicatorRegex=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authentication/action/setLoggedOutIndicator/?contextId=0&loggedOutIndicatorRegex=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authentication/action/setLoggedOutIndicator/', params={
  'contextId': '0',  'loggedOutIndicatorRegex': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authentication/action/setLoggedOutIndicator/',
  params: {
  'contextId' => 'integer',
'loggedOutIndicatorRegex' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authentication/action/setLoggedOutIndicator/`

Sets the logged out indicator for the context with the given ID.

<h3 id="authenticationactionsetloggedoutindicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|loggedOutIndicatorRegex|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authenticationactionsetloggedoutindicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-authorization">authorization</h1>

## authorizationViewGetAuthorizationDetectionMethod

<a id="opIdauthorizationViewGetAuthorizationDetectionMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authorization/view/getAuthorizationDetectionMethod/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authorization/view/getAuthorizationDetectionMethod/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authorization/view/getAuthorizationDetectionMethod/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authorization/view/getAuthorizationDetectionMethod/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authorization/view/getAuthorizationDetectionMethod/`

Obtains all the configuration of the authorization detection method that is currently set for a context.

<h3 id="authorizationviewgetauthorizationdetectionmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authorizationviewgetauthorizationdetectionmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## authorizationActionSetBasicAuthorizationDetectionMethod

<a id="opIdauthorizationActionSetBasicAuthorizationDetectionMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/authorization/action/setBasicAuthorizationDetectionMethod/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/authorization/action/setBasicAuthorizationDetectionMethod/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/authorization/action/setBasicAuthorizationDetectionMethod/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/authorization/action/setBasicAuthorizationDetectionMethod/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/authorization/action/setBasicAuthorizationDetectionMethod/`

Sets the authorization detection method for a context as one that identifies un-authorized messages based on: the message's status code or a regex pattern in the response's header or body. Also, whether all conditions must match or just some can be specified via the logicalOperator parameter, which accepts two values: "AND" (default), "OR".  

<h3 id="authorizationactionsetbasicauthorizationdetectionmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|headerRegex|query|string|false|none|
|bodyRegex|query|string|false|none|
|statusCode|query|string|false|none|
|logicalOperator|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="authorizationactionsetbasicauthorizationdetectionmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-localproxies">localProxies</h1>

## localProxiesViewAdditionalProxies

<a id="opIdlocalProxiesViewAdditionalProxies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/localProxies/view/additionalProxies/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/localProxies/view/additionalProxies/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/localProxies/view/additionalProxies/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/localProxies/view/additionalProxies/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/localProxies/view/additionalProxies/`

Gets all of the additional proxies that have been configured.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="localproxiesviewadditionalproxies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## localProxiesActionAddAdditionalProxy

<a id="opIdlocalProxiesActionAddAdditionalProxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/localProxies/action/addAdditionalProxy/?address=string&port=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/localProxies/action/addAdditionalProxy/?address=string&port=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/localProxies/action/addAdditionalProxy/', params={
  'address': 'string',  'port': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/localProxies/action/addAdditionalProxy/',
  params: {
  'address' => 'string',
'port' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/localProxies/action/addAdditionalProxy/`

Adds an new proxy using the details supplied.

<h3 id="localproxiesactionaddadditionalproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|true|none|
|port|query|integer|true|none|
|behindNat|query|boolean|false|none|
|alwaysDecodeZip|query|boolean|false|none|
|removeUnsupportedEncodings|query|boolean|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="localproxiesactionaddadditionalproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## localProxiesActionRemoveAdditionalProxy

<a id="opIdlocalProxiesActionRemoveAdditionalProxy"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/localProxies/action/removeAdditionalProxy/?address=string&port=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/localProxies/action/removeAdditionalProxy/?address=string&port=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/localProxies/action/removeAdditionalProxy/', params={
  'address': 'string',  'port': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/localProxies/action/removeAdditionalProxy/',
  params: {
  'address' => 'string',
'port' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/localProxies/action/removeAdditionalProxy/`

Removes the additional proxy with the specified address and port.

<h3 id="localproxiesactionremoveadditionalproxy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|address|query|string|true|none|
|port|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="localproxiesactionremoveadditionalproxy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-ruleconfig">ruleConfig</h1>

## ruleConfigViewRuleConfigValue

<a id="opIdruleConfigViewRuleConfigValue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ruleConfig/view/ruleConfigValue/?key=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ruleConfig/view/ruleConfigValue/?key=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ruleConfig/view/ruleConfigValue/', params={
  'key': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ruleConfig/view/ruleConfigValue/',
  params: {
  'key' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ruleConfig/view/ruleConfigValue/`

Show the specified rule configuration

<h3 id="ruleconfigviewruleconfigvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ruleconfigviewruleconfigvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ruleConfigViewAllRuleConfigs

<a id="opIdruleConfigViewAllRuleConfigs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ruleConfig/view/allRuleConfigs/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ruleConfig/view/allRuleConfigs/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ruleConfig/view/allRuleConfigs/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ruleConfig/view/allRuleConfigs/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ruleConfig/view/allRuleConfigs/`

Show all of the rule configurations

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ruleconfigviewallruleconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ruleConfigActionResetRuleConfigValue

<a id="opIdruleConfigActionResetRuleConfigValue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ruleConfig/action/resetRuleConfigValue/?key=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ruleConfig/action/resetRuleConfigValue/?key=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ruleConfig/action/resetRuleConfigValue/', params={
  'key': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ruleConfig/action/resetRuleConfigValue/',
  params: {
  'key' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ruleConfig/action/resetRuleConfigValue/`

Reset the specified rule configuration, which must already exist

<h3 id="ruleconfigactionresetruleconfigvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ruleconfigactionresetruleconfigvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ruleConfigActionResetAllRuleConfigValues

<a id="opIdruleConfigActionResetAllRuleConfigValues"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ruleConfig/action/resetAllRuleConfigValues/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ruleConfig/action/resetAllRuleConfigValues/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ruleConfig/action/resetAllRuleConfigValues/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ruleConfig/action/resetAllRuleConfigValues/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/ruleConfig/action/resetAllRuleConfigValues/`

Reset all of the rule configurations

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ruleconfigactionresetallruleconfigvalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## ruleConfigActionSetRuleConfigValue

<a id="opIdruleConfigActionSetRuleConfigValue"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/ruleConfig/action/setRuleConfigValue/?key=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/ruleConfig/action/setRuleConfigValue/?key=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/ruleConfig/action/setRuleConfigValue/', params={
  'key': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/ruleConfig/action/setRuleConfigValue/',
  params: {
  'key' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/ruleConfig/action/setRuleConfigValue/`

Set the specified rule configuration, which must already exist

<h3 id="ruleconfigactionsetruleconfigvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|none|
|value|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="ruleconfigactionsetruleconfigvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-sessionmanagement">sessionManagement</h1>

## sessionManagementViewGetSupportedSessionManagementMethods

<a id="opIdsessionManagementViewGetSupportedSessionManagementMethods"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/sessionManagement/view/getSupportedSessionManagementMethods/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/sessionManagement/view/getSupportedSessionManagementMethods/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/sessionManagement/view/getSupportedSessionManagementMethods/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/sessionManagement/view/getSupportedSessionManagementMethods/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/sessionManagement/view/getSupportedSessionManagementMethods/`

Gets the name of the session management methods.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="sessionmanagementviewgetsupportedsessionmanagementmethods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## sessionManagementViewGetSessionManagementMethodConfigParams

<a id="opIdsessionManagementViewGetSessionManagementMethodConfigParams"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/?methodName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/?methodName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/', params={
  'methodName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/',
  params: {
  'methodName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/sessionManagement/view/getSessionManagementMethodConfigParams/`

Gets the configuration parameters for the session management method with the given name.

<h3 id="sessionmanagementviewgetsessionmanagementmethodconfigparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|methodName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="sessionmanagementviewgetsessionmanagementmethodconfigparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## sessionManagementViewGetSessionManagementMethod

<a id="opIdsessionManagementViewGetSessionManagementMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/sessionManagement/view/getSessionManagementMethod/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/sessionManagement/view/getSessionManagementMethod/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/sessionManagement/view/getSessionManagementMethod/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/sessionManagement/view/getSessionManagementMethod/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/sessionManagement/view/getSessionManagementMethod/`

Gets the name of the session management method for the context with the given ID.

<h3 id="sessionmanagementviewgetsessionmanagementmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="sessionmanagementviewgetsessionmanagementmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## sessionManagementActionSetSessionManagementMethod

<a id="opIdsessionManagementActionSetSessionManagementMethod"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/sessionManagement/action/setSessionManagementMethod/?contextId=0&methodName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/sessionManagement/action/setSessionManagementMethod/?contextId=0&methodName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/sessionManagement/action/setSessionManagementMethod/', params={
  'contextId': '0',  'methodName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/sessionManagement/action/setSessionManagementMethod/',
  params: {
  'contextId' => 'integer',
'methodName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/sessionManagement/action/setSessionManagementMethod/`

Sets the session management method for the context with the given ID.

<h3 id="sessionmanagementactionsetsessionmanagementmethod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|methodName|query|string|true|none|
|methodConfigParams|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="sessionmanagementactionsetsessionmanagementmethod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-users">users</h1>

## usersViewUsersList

<a id="opIdusersViewUsersList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/view/usersList/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/view/usersList/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/view/usersList/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/view/usersList/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/view/usersList/`

Gets a list of users that belong to the context with the given ID, or all users if none provided.

<h3 id="usersviewuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersviewuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersViewGetUserById

<a id="opIdusersViewGetUserById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/view/getUserById/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/view/getUserById/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/view/getUserById/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/view/getUserById/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/view/getUserById/`

Gets the data of the user with the given ID that belongs to the context with the given ID.

<h3 id="usersviewgetuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersviewgetuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersViewGetAuthenticationCredentialsConfigParams

<a id="opIdusersViewGetAuthenticationCredentialsConfigParams"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/view/getAuthenticationCredentialsConfigParams/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/view/getAuthenticationCredentialsConfigParams/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/view/getAuthenticationCredentialsConfigParams/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/view/getAuthenticationCredentialsConfigParams/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/view/getAuthenticationCredentialsConfigParams/`

Gets the configuration parameters for the credentials of the context with the given ID.

<h3 id="usersviewgetauthenticationcredentialsconfigparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersviewgetauthenticationcredentialsconfigparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersViewGetAuthenticationCredentials

<a id="opIdusersViewGetAuthenticationCredentials"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/view/getAuthenticationCredentials/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/view/getAuthenticationCredentials/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/view/getAuthenticationCredentials/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/view/getAuthenticationCredentials/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/view/getAuthenticationCredentials/`

Gets the authentication credentials of the user with given ID that belongs to the context with the given ID.

<h3 id="usersviewgetauthenticationcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersviewgetauthenticationcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersActionNewUser

<a id="opIdusersActionNewUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/action/newUser/?contextId=0&name=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/action/newUser/?contextId=0&name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/action/newUser/', params={
  'contextId': '0',  'name': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/action/newUser/',
  params: {
  'contextId' => 'integer',
'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/action/newUser/`

Creates a new user with the given name for the context with the given ID.

<h3 id="usersactionnewuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|name|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersactionnewuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersActionRemoveUser

<a id="opIdusersActionRemoveUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/action/removeUser/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/action/removeUser/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/action/removeUser/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/action/removeUser/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/action/removeUser/`

Removes the user with the given ID that belongs to the context with the given ID.

<h3 id="usersactionremoveuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersactionremoveuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersActionSetUserEnabled

<a id="opIdusersActionSetUserEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/action/setUserEnabled/?contextId=0&userId=0&enabled=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/action/setUserEnabled/?contextId=0&userId=0&enabled=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/action/setUserEnabled/', params={
  'contextId': '0',  'userId': '0',  'enabled': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/action/setUserEnabled/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer',
'enabled' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/action/setUserEnabled/`

Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled.

<h3 id="usersactionsetuserenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|
|enabled|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersactionsetuserenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersActionSetUserName

<a id="opIdusersActionSetUserName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/action/setUserName/?contextId=0&userId=0&name=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/action/setUserName/?contextId=0&userId=0&name=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/action/setUserName/', params={
  'contextId': '0',  'userId': '0',  'name': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/action/setUserName/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer',
'name' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/action/setUserName/`

Renames the user with the given ID that belongs to the context with the given ID.

<h3 id="usersactionsetusername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|
|name|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersactionsetusername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## usersActionSetAuthenticationCredentials

<a id="opIdusersActionSetAuthenticationCredentials"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/users/action/setAuthenticationCredentials/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/users/action/setAuthenticationCredentials/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/users/action/setAuthenticationCredentials/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/users/action/setAuthenticationCredentials/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/users/action/setAuthenticationCredentials/`

Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID.

<h3 id="usersactionsetauthenticationcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|
|authCredentialsConfigParams|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="usersactionsetauthenticationcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-forceduser">forcedUser</h1>

## forcedUserViewIsForcedUserModeEnabled

<a id="opIdforcedUserViewIsForcedUserModeEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/forcedUser/view/isForcedUserModeEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/forcedUser/view/isForcedUserModeEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/forcedUser/view/isForcedUserModeEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/forcedUser/view/isForcedUserModeEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/forcedUser/view/isForcedUserModeEnabled/`

Returns 'true' if 'forced user' mode is enabled, 'false' otherwise

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="forceduserviewisforcedusermodeenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## forcedUserViewGetForcedUser

<a id="opIdforcedUserViewGetForcedUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/forcedUser/view/getForcedUser/?contextId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/forcedUser/view/getForcedUser/?contextId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/forcedUser/view/getForcedUser/', params={
  'contextId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/forcedUser/view/getForcedUser/',
  params: {
  'contextId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/forcedUser/view/getForcedUser/`

Gets the user (ID) set as 'forced user' for the given context (ID)

<h3 id="forceduserviewgetforceduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="forceduserviewgetforceduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## forcedUserActionSetForcedUser

<a id="opIdforcedUserActionSetForcedUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/forcedUser/action/setForcedUser/?contextId=0&userId=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/forcedUser/action/setForcedUser/?contextId=0&userId=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/forcedUser/action/setForcedUser/', params={
  'contextId': '0',  'userId': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/forcedUser/action/setForcedUser/',
  params: {
  'contextId' => 'integer',
'userId' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/forcedUser/action/setForcedUser/`

Sets the user (ID) that should be used in 'forced user' mode for the given context (ID)

<h3 id="forceduseractionsetforceduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contextId|query|integer|true|none|
|userId|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="forceduseractionsetforceduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## forcedUserActionSetForcedUserModeEnabled

<a id="opIdforcedUserActionSetForcedUserModeEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/forcedUser/action/setForcedUserModeEnabled/?boolean=true \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/forcedUser/action/setForcedUserModeEnabled/?boolean=true");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/forcedUser/action/setForcedUserModeEnabled/', params={
  'boolean': 'true'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/forcedUser/action/setForcedUserModeEnabled/',
  params: {
  'boolean' => 'boolean'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/forcedUser/action/setForcedUserModeEnabled/`

Sets if 'forced user' mode should be enabled or not

<h3 id="forceduseractionsetforcedusermodeenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|boolean|query|boolean|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="forceduseractionsetforcedusermodeenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-script">script</h1>

## scriptViewListEngines

<a id="opIdscriptViewListEngines"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/listEngines/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/listEngines/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/listEngines/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/listEngines/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/listEngines/`

Lists the script engines available

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewlistengines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewListTypes

<a id="opIdscriptViewListTypes"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/listTypes/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/listTypes/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/listTypes/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/listTypes/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/listTypes/`

Lists the script types available.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewlisttypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewListScripts

<a id="opIdscriptViewListScripts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/listScripts/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/listScripts/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/listScripts/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/listScripts/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/listScripts/`

Lists the scripts available, with its engine, name, description, type and error state.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewlistscripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewGlobalVar

<a id="opIdscriptViewGlobalVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/globalVar/?varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/globalVar/?varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/globalVar/', params={
  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/globalVar/',
  params: {
  'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/globalVar/`

Gets the value of the global variable with the given key. Returns an API error (DOES_NOT_EXIST) if no value was previously set.

<h3 id="scriptviewglobalvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|varKey|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewglobalvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewGlobalVars

<a id="opIdscriptViewGlobalVars"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/globalVars/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/globalVars/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/globalVars/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/globalVars/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/globalVars/`

Gets all the global variables (key/value pairs).

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewglobalvars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewScriptVar

<a id="opIdscriptViewScriptVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/scriptVar/?scriptName=string&varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/scriptVar/?scriptName=string&varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/scriptVar/', params={
  'scriptName': 'string',  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/scriptVar/',
  params: {
  'scriptName' => 'string',
'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/scriptVar/`

Gets the value of the variable with the given key for the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set.

<h3 id="scriptviewscriptvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|
|varKey|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewscriptvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptViewScriptVars

<a id="opIdscriptViewScriptVars"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/view/scriptVars/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/view/scriptVars/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/view/scriptVars/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/view/scriptVars/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/view/scriptVars/`

Gets all the variables (key/value pairs) of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.

<h3 id="scriptviewscriptvars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptviewscriptvars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionEnable

<a id="opIdscriptActionEnable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/enable/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/enable/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/enable/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/enable/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/enable/`

Enables the script with the given name

<h3 id="scriptactionenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionDisable

<a id="opIdscriptActionDisable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/disable/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/disable/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/disable/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/disable/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/disable/`

Disables the script with the given name

<h3 id="scriptactiondisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactiondisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionLoad

<a id="opIdscriptActionLoad"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/load/?scriptName=string&scriptType=string&scriptEngine=string&fileName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/load/?scriptName=string&scriptType=string&scriptEngine=string&fileName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/load/', params={
  'scriptName': 'string',  'scriptType': 'string',  'scriptEngine': 'string',  'fileName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/load/',
  params: {
  'scriptName' => 'string',
'scriptType' => 'string',
'scriptEngine' => 'string',
'fileName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/load/`

Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1).

<h3 id="scriptactionload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|
|scriptType|query|string|true|none|
|scriptEngine|query|string|true|none|
|fileName|query|string|true|none|
|scriptDescription|query|string|false|none|
|charset|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionRemove

<a id="opIdscriptActionRemove"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/remove/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/remove/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/remove/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/remove/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/remove/`

Removes the script with the given name

<h3 id="scriptactionremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionRunStandAloneScript

<a id="opIdscriptActionRunStandAloneScript"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/runStandAloneScript/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/runStandAloneScript/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/runStandAloneScript/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/runStandAloneScript/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/runStandAloneScript/`

Runs the stand alone script with the given name

<h3 id="scriptactionrunstandalonescript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionrunstandalonescript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionClearGlobalVar

<a id="opIdscriptActionClearGlobalVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/clearGlobalVar/?varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/clearGlobalVar/?varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/clearGlobalVar/', params={
  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/clearGlobalVar/',
  params: {
  'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/clearGlobalVar/`

Clears the global variable with the given key.

<h3 id="scriptactionclearglobalvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|varKey|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionclearglobalvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionClearGlobalVars

<a id="opIdscriptActionClearGlobalVars"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/clearGlobalVars/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/clearGlobalVars/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/clearGlobalVars/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/clearGlobalVars/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/clearGlobalVars/`

Clears the global variables.

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionclearglobalvars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionClearScriptVar

<a id="opIdscriptActionClearScriptVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/clearScriptVar/?scriptName=string&varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/clearScriptVar/?scriptName=string&varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/clearScriptVar/', params={
  'scriptName': 'string',  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/clearScriptVar/',
  params: {
  'scriptName' => 'string',
'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/clearScriptVar/`

Clears the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.

<h3 id="scriptactionclearscriptvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|
|varKey|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionclearscriptvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionClearScriptVars

<a id="opIdscriptActionClearScriptVars"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/clearScriptVars/?scriptName=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/clearScriptVars/?scriptName=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/clearScriptVars/', params={
  'scriptName': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/clearScriptVars/',
  params: {
  'scriptName' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/clearScriptVars/`

Clears the variables of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.

<h3 id="scriptactionclearscriptvars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionclearscriptvars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionSetScriptVar

<a id="opIdscriptActionSetScriptVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/setScriptVar/?scriptName=string&varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/setScriptVar/?scriptName=string&varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/setScriptVar/', params={
  'scriptName': 'string',  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/setScriptVar/',
  params: {
  'scriptName' => 'string',
'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/setScriptVar/`

Sets the value of the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists.

<h3 id="scriptactionsetscriptvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptName|query|string|true|none|
|varKey|query|string|true|none|
|varValue|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionsetscriptvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## scriptActionSetGlobalVar

<a id="opIdscriptActionSetGlobalVar"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/script/action/setGlobalVar/?varKey=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/script/action/setGlobalVar/?varKey=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/script/action/setGlobalVar/', params={
  'varKey': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/script/action/setGlobalVar/',
  params: {
  'varKey' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/script/action/setGlobalVar/`

Sets the value of the global variable with the given key.

<h3 id="scriptactionsetglobalvar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|varKey|query|string|true|none|
|varValue|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="scriptactionsetglobalvar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="zap-api-stats">stats</h1>

## statsViewStats

<a id="opIdstatsViewStats"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/stats/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/stats/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/stats/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/stats/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/stats/`

Statistics

<h3 id="statsviewstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyPrefix|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewAllSitesStats

<a id="opIdstatsViewAllSitesStats"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/allSitesStats/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/allSitesStats/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/allSitesStats/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/allSitesStats/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/allSitesStats/`

Gets all of the site based statistics, optionally filtered by a key prefix

<h3 id="statsviewallsitesstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyPrefix|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewallsitesstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewSiteStats

<a id="opIdstatsViewSiteStats"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/siteStats/?site=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/siteStats/?site=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/siteStats/', params={
  'site': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/siteStats/',
  params: {
  'site' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/siteStats/`

Gets all of the global statistics, optionally filtered by a key prefix

<h3 id="statsviewsitestats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|none|
|keyPrefix|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewsitestats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewOptionStatsdHost

<a id="opIdstatsViewOptionStatsdHost"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/optionStatsdHost/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/optionStatsdHost/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/optionStatsdHost/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/optionStatsdHost/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/optionStatsdHost/`

Gets the Statsd service hostname

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewoptionstatsdhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewOptionStatsdPort

<a id="opIdstatsViewOptionStatsdPort"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/optionStatsdPort/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/optionStatsdPort/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/optionStatsdPort/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/optionStatsdPort/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/optionStatsdPort/`

Gets the Statsd service port

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewoptionstatsdport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewOptionStatsdPrefix

<a id="opIdstatsViewOptionStatsdPrefix"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/optionStatsdPrefix/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/optionStatsdPrefix/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/optionStatsdPrefix/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/optionStatsdPrefix/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/optionStatsdPrefix/`

Gets the prefix to be applied to all stats sent to the configured Statsd service

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewoptionstatsdprefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewOptionInMemoryEnabled

<a id="opIdstatsViewOptionInMemoryEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/optionInMemoryEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/optionInMemoryEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/optionInMemoryEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/optionInMemoryEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/optionInMemoryEnabled/`

Returns 'true' if in memory statistics are enabled, otherwise returns 'false'

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewoptioninmemoryenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsViewOptionStatsdEnabled

<a id="opIdstatsViewOptionStatsdEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/view/optionStatsdEnabled/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/view/optionStatsdEnabled/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/view/optionStatsdEnabled/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/view/optionStatsdEnabled/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/view/optionStatsdEnabled/`

Returns 'true' if a Statsd server has been correctly configured, otherwise returns 'false'

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsviewoptionstatsdenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsActionClearStats

<a id="opIdstatsActionClearStats"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/action/clearStats/ \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/action/clearStats/");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/action/clearStats/', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/action/clearStats/',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/action/clearStats/`

Clears all of the statistics

<h3 id="statsactionclearstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyPrefix|query|string|false|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsactionclearstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsActionSetOptionStatsdHost

<a id="opIdstatsActionSetOptionStatsdHost"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/action/setOptionStatsdHost/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/action/setOptionStatsdHost/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/action/setOptionStatsdHost/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/action/setOptionStatsdHost/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/action/setOptionStatsdHost/`

Sets the Statsd service hostname, supply an empty string to stop using a Statsd service

<h3 id="statsactionsetoptionstatsdhost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsactionsetoptionstatsdhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsActionSetOptionStatsdPrefix

<a id="opIdstatsActionSetOptionStatsdPrefix"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/action/setOptionStatsdPrefix/?String=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/action/setOptionStatsdPrefix/?String=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/action/setOptionStatsdPrefix/', params={
  'String': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/action/setOptionStatsdPrefix/',
  params: {
  'String' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/action/setOptionStatsdPrefix/`

Sets the prefix to be applied to all stats sent to the configured Statsd service

<h3 id="statsactionsetoptionstatsdprefix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|String|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsactionsetoptionstatsdprefix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsActionSetOptionInMemoryEnabled

<a id="opIdstatsActionSetOptionInMemoryEnabled"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/action/setOptionInMemoryEnabled/?Boolean=string \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/action/setOptionInMemoryEnabled/?Boolean=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/action/setOptionInMemoryEnabled/', params={
  'Boolean': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/action/setOptionInMemoryEnabled/',
  params: {
  'Boolean' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/action/setOptionInMemoryEnabled/`

Sets whether in memory statistics are enabled

<h3 id="statsactionsetoptioninmemoryenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Boolean|query|string|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsactionsetoptioninmemoryenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## statsActionSetOptionStatsdPort

<a id="opIdstatsActionSetOptionStatsdPort"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://zap/JSON/stats/action/setOptionStatsdPort/?Integer=0 \
  -H 'Accept: application/json' \
  -H 'X-ZAP-API-Key: API_KEY'

```

```java
URL obj = new URL("http://zap/JSON/stats/action/setOptionStatsdPort/?Integer=0");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-ZAP-API-Key': 'API_KEY'
}

r = requests.get('http://zap/JSON/stats/action/setOptionStatsdPort/', params={
  'Integer': '0'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-ZAP-API-Key' => 'API_KEY'
}

result = RestClient.get 'http://zap/JSON/stats/action/setOptionStatsdPort/',
  params: {
  'Integer' => 'integer'
}, headers: headers

p JSON.parse(result)

```

`GET /JSON/stats/action/setOptionStatsdPort/`

Sets the Statsd service port

<h3 id="statsactionsetoptionstatsdport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Integer|query|integer|true|none|

> Example responses

> default Response

```json
{
  "message": "string",
  "code": 100
}
```

<h3 id="statsactionsetoptionstatsdport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "message": "string",
  "code": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|code|integer|true|none|none|
