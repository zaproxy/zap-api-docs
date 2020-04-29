# Troubleshooting

The following section contains the frequently asked questions regarding ZAP APIs.

## Regression Testing

```java
ProcessBuilder pb = new ProcessBuilder("/home/myuser/fullpath/ZAP 2.9.0/zap.sh");  // full path to script, use zap.bat on Windows
pb.directory(new File("/home/myuser/fullpath/ZAP 2.9.0/"));  // directory where the script is in
Process p = pb.start();
```

You can use ZAP to perform security regression tests on your own products. As elaborated in the introduction section
install Java and ZAP and launch the ZAP script via your programming language of choice.

Note that this will bring up the full UI, which is useful for initial testing. To launch it in the background pass `-daemon` as an argument to the script.
Next run your unit tests proxying via ZAP. You can then control ZAP using the ZAP API, for example, to spider or active scan.

## Scan APIs

ZAP understands API formats like JSON and XML and so can be used to scan APIs.
The problem is usually how to effectively explore the APIs.

There are various options:

  * If your API has an OpenAPI/Swagger definition then you can import it using the [OpenAPI add-on](/docs/desktop/addons/openapi-support/).
  * If your API has a WSDL then you can import it using the SOAP Scanner add-on.
  * If you have a list of endpoint URLs then you can import these using the [Import files containing URLs add-on](/docs/desktop/addons/import-urls/).
  * If you have regression tests for you API then you can proxy these through ZAP

The add-ons are available from the [ZAP Marketplace](/addons/).

Once ZAP knows about the URL endpoints it can scan them in the same way as it
scans HTML based web sites.

If you don't have any of these things then post to the [ZAP User Group](https://groups.google.com/group/zaproxy-users) explaining what you are
trying to do and the problems you are having.

## Error: No Implementor 

If you come across the `No Implementor Error` while invoking the APIs: Check that the necessary addon or component is installed and enabled. 
(For example if you receive "no_implementor" in relation to Ajax Spider calls, perhaps the Ajax Spider addon isn't installed.)

