---
title: 'Analytics'
description: 'Integrating Google Analytics for usage tracking.'
icon: 'chart-area'
---

Smart WebView supports integration with Google Analytics using the gtag.js library to track user interactions within your web content loaded in the app.

---

## Configuration

1.  **Get Your Measurement ID:** Obtain your Google Analytics Measurement ID (format `G-XXXXXXXXXX` for GA4 or `UA-XXXXXXXXX-Y` for Universal Analytics) from your Google Analytics property settings.
2.  **Set the ID in Configuration:**

    <Tabs>
     <Tab title="Android">
        Assign your Measurement ID to the `ASWV_GTAG` variable in `SmartWebView.java`:
        ```java
        // Your Google Analytics Measurement ID
        static String ASWV_GTAG = "YOUR_GTAG_ID"; // <-- Replace with your actual ID
        ```
        If `ASWV_GTAG` is left empty, Analytics integration will be disabled.
     </Tab>
     <Tab title="iOS">
        ```md
        <!-- iOS would require a similar configuration mechanism (e.g., in Info.plist or a Swift settings file) to store the GTAG ID. Details here. -->
        ```
     </Tab>
    </Tabs>

---

## How it Works

*   **Dynamic Injection:** Instead of adding the gtag.js snippet directly to your web page's HTML, Smart WebView injects it dynamically using JavaScript *after* the page has finished loading.
    <Tabs>
     <Tab title="Android">
        This is handled by the `onPageFinished` event in `MainActivity.java`'s `Callback`, which calls the `Functions.inject_gtag` method. This method executes JavaScript in the WebView to load and initialize gtag.js with your configured `ASWV_GTAG` ID.
     </Tab>
     <Tab title="iOS">
        iOS would use the `webView(_:didFinish:)` delegate method (WKNavigationDelegate) to trigger JavaScript evaluation (`evaluateJavaScript(_:completionHandler:)`) that injects and initializes gtag.js.
     </Tab>
    </Tabs>
*   **Improved Performance:** This dynamic injection approach prevents the Analytics script from potentially blocking initial page rendering and ensures more reliable tracking.

---

## Tracking Events

Once gtag.js is loaded, you can track events within your web application's JavaScript code just as you would on a regular website. This part is platform-agnostic.

**Example: Tracking a Button Click**

```javascript script.js
// In your web page's JavaScript (e.g., script.js)

document.getElementById('myButton').addEventListener('click', function() {
  // Check if gtag function exists (it should after injection)
  if (typeof gtag === 'function') {
    gtag('event', 'button_click', {
      'event_category': 'Engagement',
      'event_label': 'Special Feature Button',
      'value': 1
    });
    console.log('GA event sent: button_click');
  } else {
    console.error('gtag function not found. Analytics might not be initialized.');
  }
});
```

Refer to the [Google Analytics gtag.js documentation](https://developers.google.com/analytics/devguides/collection/gtagjs/events) for details on tracking events.

---

## Identifying App Traffic

The User-Agent string modification feature can help distinguish traffic coming from your Smart WebView app.
<Tabs>
 <Tab title="Android">
    If `POSTFIX_USER_AGENT` is enabled (default), the `USER_AGENT_POSTFIX` (default: "SWVAndroid") will be appended to the User-Agent string.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- A similar mechanism can be implemented on iOS to modify the WKWebView's user agent string. Details here. -->
    ```
 </Tab>
</Tabs>
You can create filters or segments in Google Analytics based on this identifier.