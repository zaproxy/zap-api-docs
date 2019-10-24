#Attacking the App

The web application should be explored before starting to scan for security vulnerabilities. 
If you haven't done that look at the [explore](#exploring-the-app) section on how to explore the web application. 
The following section provides examples on how to use the Passive and Active Scanner to find security vulnerabilities in 
the application.

<aside class="warning">
In many jurisdictions it is illegal to "test" web sites/applications without permission. Please be aware that you should 
only use ZAP with targets that you have been specifically given permission to test.
</aside>

##Using Passive Scan


```java
public class PassiveScan {

    private static final int ZAP_PORT = 8080;
    private static final String ZAP_API_KEY = null;
    private static final String ZAP_ADDRESS = "localhost";

    public static void main(String[] args) {
        ClientApi api = new ClientApi(ZAP_ADDRESS, ZAP_PORT, ZAP_API_KEY);
        int numberOfRecords;
        
        try {
            // TODO : explore the app (Spider, etc) before using the Passive Scan API, Refer the explore section for details
            // Loop until the ajax spider has finished or the timeout has exceeded
            while (true) {
                Thread.sleep(2000);
                api.pscan.recordsToScan();
                numberOfRecords = Integer.parseInt(((ApiResponseElement) api.pscan.recordsToScan()).getValue());
                System.out.println("Number of records left for scanning : " + numberOfRecords);
                if (numberOfRecords == 0) {
                    break;
                }
            }
            System.out.println("Passive Scan completed");
            
            // Print Passive scan results/alerts
            System.out.println("Alerts:");
            System.out.println(new String(api.core.xmlreport(), StandardCharsets.UTF_8));

        } catch (Exception e) {
            System.out.println("Exception : " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

```python
#!/usr/bin/env python
import time
from pprint import pprint
from zapv2 import ZAPv2

apiKey = 'changeme'
target = 'https://public-firing-range.appspot.com'
zap = ZAPv2(apikey=apiKey, proxies={'http': 'http://127.0.0.1:8080', 'https': 'http://127.0.0.1:8080'})

# TODO : explore the app (Spider, etc) before using the Passive Scan API, Refer the explore section for details
while int(zap.pscan.records_to_scan) > 0:
    # Loop until the ajax spider has finished or the timeout has exceeded
    print('Records to passive scan : ' + zap.pscan.records_to_scan)
    time.sleep(2)

print('Passive Scan completed')

# Print Passive scan results/alerts
print('Hosts: {}'.format(', '.join(zap.core.hosts)))
print('Alerts: ')
pprint(zap.core.alerts())
```

``` shell
# To view the number of records left to be scanned
$ curl "http://localhost:8080/JSON/pscan/view/recordsToScan/?apikey=<ZAP_API_KEY>"

# To view the alerts of passive scan
$ curl "http://localhost:8080/JSON/core/view/alerts/?apikey=<ZAP_API_KEY>&baseurl=<TARGET_URL>&start=0&count=10"
```

All requests that are proxied through ZAP or initialised by tools like the Spider are passively scanned. You do not have 
to manually start the passive scan process, ZAP by default passively scans all HTTP messages (requests and responses) sent 
to the web application being tested. 

Passive scanning does not change the requests nor the responses in any way and is therefore safe to use.
This is good for finding problems like missing security headers or missing anti CSRF tokens but is no good for finding 
vulnerabilities like XSS which require malicious requests to be sent - that's the job of the [active scanner](#using-active-scan).

### View the Status

As the records are passively scanned it will take additional time to complete the full scan. After the crawling is completed 
use the [recordsToScan](#pscanviewrecordstoscan) API to obtain the number of records left to be scanned. After the scanning 
has completed the alerts can be obtained via the alerts endpoint(s).

View the [advanced section](#passive-scan-settings) to know how to configure additional parameters of Passive Scan.

##Using Active Scan

Active scanning attempts to find potential vulnerabilities by using known attacks against the selected targets. Active scanning 
is an attack on those targets. You should **NOT** use it on web applications that you do not own. 

### Start Active Scanner

```java
public class ActiveScan {

    private static final int ZAP_PORT = 8080;
    private static final String ZAP_API_KEY = null;
    private static final String ZAP_ADDRESS = "localhost";
    private static final String TARGET = "https://public-firing-range.appspot.com";

    public static void main(String[] args) {

        ClientApi api = new ClientApi(ZAP_ADDRESS, ZAP_PORT, ZAP_API_KEY);

        try {
            // TODO : explore the app (Spider, etc) before using the Active Scan API, Refer the explore section
            System.out.println("Active Scanning target : " + TARGET);
            ApiResponse resp = api.ascan.scan(TARGET, "True", "False", null, null, null);
            String scanid;
            int progress;

            // The scan now returns a scan id to support concurrent scanning
            scanid = ((ApiResponseElement) resp).getValue();
            // Poll the status until it completes
            while (true) {
                Thread.sleep(5000);
                progress =
                        Integer.parseInt(
                                ((ApiResponseElement) api.ascan.status(scanid)).getValue());
                System.out.println("Active Scan progress : " + progress + "%");
                if (progress >= 100) {
                    break;
                }
            }

            System.out.println("Active Scan complete");
            // Print vulnerabilities found by the scanning
            System.out.println("Alerts:");
            System.out.println(new String(api.core.xmlreport(), StandardCharsets.UTF_8));

        } catch (Exception e) {
            System.out.println("Exception : " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

```python
#!/usr/bin/env python
import time
from pprint import pprint
from zapv2 import ZAPv2

apiKey = 'changeme'
target = 'https://public-firing-range.appspot.com'
zap = ZAPv2(apikey=apiKey, proxies={'http': 'http://127.0.0.1:8080', 'https': 'http://127.0.0.1:8080'})

# TODO : explore the app (Spider, etc) before using the Active Scan API, Refer the explore section
print('Active Scanning target {}'.format(target))
scanID = zap.ascan.scan(target)
while int(zap.ascan.status(scanID)) < 100:
    # Loop until the scanner has finished
    print('Scan progress %: {}'.format(zap.ascan.status(scanID)))
    time.sleep(5)

print('Active Scan completed')
# Print vulnerabilities found by the scanning
print('Hosts: {}'.format(', '.join(zap.core.hosts)))
print('Alerts: ')
pprint(zap.core.alerts(baseurl=target))
```

``` shell
# To start the the active scan
$ curl "http://localhost:8080/JSON/ascan/action/scan/?apikey=<ZAP_API_KEY>&url=<TARGET_URL>&recurse=true&inScopeOnly=&scanPolicyName=&method=&postData=&contextId="

# To view the the status of active scan
$ curl "http://localhost:8080/JSON/ascan/view/status/?apikey=<ZAP_API_KEY>&scanId=<SCAN_ID>"

# To view the alerts of active scan
$ curl "http://localhost:8080/JSON/core/view/alerts/?apikey=<ZAP_API_KEY>&baseurl=<TARGET_URL>&start=0&count=10"

# To stop the active scan
$ curl "http://localhost:8080/JSON/ascan/action/stop/?apikey=<ZAP_API_KEY>&scanId=<SCAN_ID>"
```

The [scan](#ascanactionscan) endpoint runs the active scanner against the given URL or Context. Optionally, the 'recurse' parameter can be used to scan URLs 
under the given URL, the parameter 'inScopeOnly' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified).
The parameter 'scanPolicyName' allows to specify the scan policy (if none is given it uses the default scan policy). 
The parameters 'method' and 'postData' allow to select a given request in conjunction with the given URL. 

View advanced settings to learn, how to configure the [context](#context-advanced), [scope](#scope-advanced), and 
scan policy with ZAP APIs.

### View Status

The [status](#ascanviewstatus) API provides the percentage of scanning done by the active scanner. The scan ID returned 
via starting the Active Scan should be used to query the status of the scanner. 

### View Results

Similar to the passive scan results, the active scan results can be viewed using the same alerts endpoint(s). 
The alerts endpoint(s) will show the consolidated results of Passive and Active Scan.

### Stop Active Scanning

Use the [stop](#ascanactionstop) API to stop a long running active scan. Optionally you can use the [stopAllScans](#ascanactionstopallscans) 
endpoints or [pause](#ascanactionpause) endpoint to stop and pause the active scanning.

It should be noted that active scanning can only find certain types of vulnerabilities. Logical vulnerabilities, such as 
broken access control, will not be found by any active or automated vulnerability scanning. Manual penetration testing should 
always be performed in addition to active scanning to find all types of vulnerabilities.
