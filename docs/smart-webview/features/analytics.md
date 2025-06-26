---
title: 'Analytics'
description: 'Integrating Google Analytics for usage tracking.'
icon: 'chart-area'
---

Smart WebView supports integration with Google Analytics using the gtag.js library to track user interactions within your web content.

---

## Configuration

1.  **Get Your Measurement ID:** Obtain your Google Analytics Measurement ID (e.g., `G-XXXXXXXXXX`) from your Google Analytics property settings.
2.  **Set the ID in Configuration:** Assign your Measurement ID to the `ASWV_GTAG` variable in `SmartWebView.java`:
    ```java
    // Your Google Analytics Measurement ID
    public static String ASWV_GTAG = "G-7XXC1C7CRQ"; // <-- Replace with your actual ID
    ```
    If `ASWV_GTAG` is left empty or `null`, Analytics integration will be disabled.

---

## How it Works

*   **Dynamic Injection:** Instead of adding the gtag.js snippet to your HTML, Smart WebView injects it dynamically using JavaScript *after* the page has finished loading. This is handled by the `onPageFinished` event in `MainActivity.java`, which calls the `Functions.inject_gtag` method.
*   **Improved Performance:** This approach prevents the Analytics script from blocking initial page rendering.

---

## Tracking Events

Once gtag.js is loaded, you can track events within your web application's JavaScript just as you would on a regular website.

**Example: Tracking a Button Click**

```javascript
// In your web page's JavaScript (e.g., script.js)
document.getElementById('myButton').addEventListener('click', function() {
  // Check if gtag function exists
  if (typeof gtag === 'function') {
    gtag('event', 'button_click', {
      'event_category': 'Engagement',
      'event_label': 'Special Feature Button'
    });
    console.log('GA event sent: button_click');
  } else {
    console.error('gtag function not found.');
  }
});
```

Refer to the [Google Analytics gtag.js documentation](https://developers.google.com/analytics/devguides/collection/gtagjs/events) for more details.

---

## Identifying App Traffic

The User-Agent string modification feature can help distinguish traffic from your app. If `POSTFIX_USER_AGENT` is enabled (default is `true`), the `USER_AGENT_POSTFIX` (default: "SWVAndroid") will be appended to the User-Agent string. You can create filters or segments in Google Analytics based on this identifier.