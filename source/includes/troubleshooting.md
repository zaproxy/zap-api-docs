# Troubleshooting

This section explains how to troubleshoot issues that might occur when interacting with the ZAP API.

## Enable Useful Dev Options

While developing scripts/programs that interact with ZAP API it's recommended that the following [ZAP API options](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/api/) 
are enabled, to have more information about possible errors:

 - `Report permission errors via API`
 - `Report error details via API`

The API response will then contain the details about why the API request was rejected or was not successful.
<aside class="info">
The ZAP log/output will always provide these details if you are not able to enable those options, e.g. not developing in a safe environment.
</aside>

## Common Errors

### Wrong API Key or Address Not Allowed

```java
//org.zaproxy.clientapi.core.ClientApiException: java.net.SocketException: Unexpected end of file from server
//	at org.zaproxy.clientapi.core.ClientApi.callApiDom(ClientApi.java:366)
//	at org.zaproxy.clientapi.core.ClientApi.callApi(ClientApi.java:350)
//	at org.zaproxy.clientapi.gen.Spider.scan(Spider.java:242)
```

```python
requests.exceptions.ProxyError: HTTPConnectionPool(host='127.0.0.1', port=8080): Max retries exceeded with 
url: http://zap/JSON/spider/action/scan/?apikey=changeMe&url=https%3A%2F%2Fexample.com 
(Caused by ProxyError('Cannot connect to proxy.', RemoteDisconnected('Remote end closed connection without response')))
```

By default, ZAP will close the connection without a response if an API request is not from an allowed address or the API key is wrong.
If you get exceptions similar to the following ensure that the API client is using the correct API key and that the address is allowed.

### No Connection to ZAP

```java
//org.zaproxy.clientapi.core.ClientApiException: java.net.ConnectException: Connection refused: connect
//	at org.zaproxy.clientapi.core.ClientApi.callApiDom(ClientApi.java:366)
//	at org.zaproxy.clientapi.core.ClientApi.callApi(ClientApi.java:350)
//	at org.zaproxy.clientapi.gen.Spider.scan(Spider.java:242)
//	at ZAP_tests.Spider.main(Spider.java:25)
```

```python
requests.exceptions.ProxyError: HTTPConnectionPool(host='127.0.0.1', port=8080): Max retries exceeded with 
url: http://zap/JSON/spider/action/scan/?apikey=changeMe&url=https%3A%2F%2Fexample.com 
(Caused by ProxyError('Cannot connect to proxy.', NewConnectionError('<urllib3.connection.HTTPConnection object at 
0x101be78e0>: Failed to establish a new connection: [Errno 61] Connection refused')))
```

There are several reasons that the API client might not be able to connect to ZAP:

 - ZAP is not yet started, some clients might have methods to wait for ZAP;
 - ZAP is not listening on the address, for example, if the API client is connecting from an external machine then ZAP will have to listen on the external address (or all addresses `0.0.0.0`)
 - The API client is not configured with correct address/port;

### Error: No Implementor

If you come across the `No Implementor Error` while invoking the APIs: Check the necessary add-on or component is installed and enabled. 
(For example if you receive "no_implementor" in relation to Ajax Spider calls, perhaps the Ajax Spider add-on isn't installed.)

