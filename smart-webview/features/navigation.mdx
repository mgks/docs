---
title: 'Navigation & UI'
description: 'Handling external links and choosing the app layout.'
icon: 'compass'
---

Smart WebView offers options for handling links that navigate outside your primary web domain and allows you to choose between different UI layouts (currently Android-specific).

---

## External Link Handling

Control how links to external websites (those not matching your primary `ASWV_URL`'s host or allowed domains) are handled.

**Configuration:**

<Tabs>
 <Tab title="Android">
    Set variables in `SmartWebView.java`:
    *   `ASWP_EXTURL` (`true`/`false`):
        *   `true`: External links open outside the app's WebView.
        *   `false`: Attempts to load *all* links in-app (use with caution).
    *   `ASWP_TAB` (`true`/`false`): (Only if `ASWP_EXTURL` is `true`)
        *   `true`: Use Chrome Custom Tabs (recommended).
        *   `false`: Use the default system browser app.
    *   `ASWV_EXC_LIST` (String): Comma-separated list of additional domains to treat as internal.
 </Tab>
 <Tab title="iOS">
    iOS external link handling typically involves WKNavigationDelegate's `webView(_:decidePolicyFor:decisionHandler:)`. You check the URL's host and decide whether to let the WebView handle it (`decisionHandler(.allow)`) or open it externally using `UIApplication.shared.open(url)`. Configuration might involve storing allowed domains.
 </Tab>
</Tabs>

**How it Works:**

<Tabs>
 <Tab title="Android">
    The `shouldOverrideUrlLoading` method in `MainActivity.java`'s `Callback` checks the URL. If it's deemed external based on `ASWP_EXTURL`, `ASWV_HOST`, and `ASWV_EXC_LIST`, the `Functions.url_actions` method triggers either a Custom Tab or an `Intent.ACTION_VIEW`.
 </Tab>
 <Tab title="iOS">
    The `webView(_:decidePolicyFor:decisionHandler:)` delegate method intercepts navigation. Logic within this method checks the URL against allowed domains and either calls `decisionHandler(.allow)` or `decisionHandler(.cancel)` followed by `UIApplication.shared.open()`.
 </Tab>
</Tabs>

---

## UI Layout Modes (Android Specific)

Smart WebView currently supports two primary UI layouts on Android, configured via `ASWV_LAYOUT` in `SmartWebView.java`.

**Configuration (Android):**

<Tabs>
 <Tab title="Android">
    ```java
    // Choose the main app layout.
    // 0 = Fullscreen WebView only
    // 1 = Drawer Layout (with sidebar navigation menu and top action bar)
    static int ASWV_LAYOUT = 0; // Default is Fullscreen
    ```
 </Tab>
 <Tab title="iOS">
    iOS uses different paradigms. Common layouts involve simple full-screen WebViews, Tab Bars (`UITabBarController`), or custom container view controllers. This configuration variable is not directly applicable.
 </Tab>
</Tabs>

### Mode 0: Fullscreen Layout (Android)

*   **Description:** WebView takes up the entire screen. Ideal for simple web wrappers.
*   **Layout File:** `app/src/main/res/layout/activity_main.xml`

### Mode 1: Drawer Layout (Android)

*   **Description:** Implements a standard Android navigation drawer pattern with a top Action Bar and side menu.
*   **Layout Files:** `drawer_main.xml`, `drawer_main_bar.xml`, etc.
*   **Menu Definition:** `activity_main_drawer.xml`
*   **Menu Handling:** `onNavigationItemSelected` in `Functions.java`.

<Tip>
For iOS, equivalent navigation structures would be built using native iOS components like `UITabBarController`, `UINavigationController`, or custom side menu implementations.
</Tip>