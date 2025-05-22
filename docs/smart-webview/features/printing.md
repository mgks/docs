---
title: 'Printing'
description: 'Allowing users to print the current web page content.'
icon: 'print'
---

Smart WebView supports printing the content currently displayed in the WebView using the native platform's print framework.

---

## How to Trigger Printing

Printing is typically initiated from your web content by using a hyperlink with a special URL scheme: `print:`.

**HTML Example (Platform Agnostic):**

```html
<a href="print:">Print this Page</a>

<!-- You can also use a button with JavaScript -->
<button onclick="window.location.href='print:'">Print Report</button>
```

---

## How it Works

<Tabs>
 <Tab title="Android">
    1.  User clicks a `print:` link.
    2.  `shouldOverrideUrlLoading` in `MainActivity.java`'s `Callback` intercepts the URL.
    3.  It calls `Functions.print_page`.
    4.  `Functions.print_page` uses the Android `PrintManager` service.
    5.  It creates a `PrintDocumentAdapter` from the main `WebView` (`SmartWebView.asw_view`).
    6.  It starts a print job, potentially setting default attributes.
    7.  The standard Android print preview screen appears, allowing printer selection (including Save as PDF) and settings adjustment.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- 1. User clicks a `print:` link.
         2. `webView(_:decidePolicyFor:decisionHandler:)` (WKNavigationDelegate) intercepts the URL.
         3. It recognizes the `print:` scheme and cancels the web navigation (`decisionHandler(.cancel)`).
         4. It gets a `UIPrintInteractionController`.
         5. It sets the `printFormatter` property of the controller using the `WKWebView`'s `viewPrintFormatter()`.
         6. It presents the standard iOS print interaction controller modally (`present(animated:completionHandler:)`).
         7. This controller allows printer selection (including Save to Files) and settings adjustment.
         Details of the delegate implementation here. -->
    ```
 </Tab>
</Tabs>

<Note>
The quality and layout of the printout depend heavily on how well the webpage's CSS is optimized for print media (`@media print`).
</Note>

---

## Requirements

<Tabs>
 <Tab title="Android">
    *   Android 4.4 (KitKat, API 19) or higher.
    *   Device must have print services enabled/configured (e.g., Cloud Print, Wi-Fi Direct, Save as PDF).
 </Tab>
 <Tab title="iOS">
    *   Relies on UIKit's printing framework.
    *   Device must have AirPrint printers available on the network or support other printing methods (like Save to Files).
 </Tab>
</Tabs>

No specific configuration variables in `SmartWebView.java` are needed for this feature on Android; it relies on intercepting the `print:` URL scheme.