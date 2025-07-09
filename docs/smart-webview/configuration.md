---
title: 'Configuration'
description: 'Adjusting core Smart WebView settings.'
icon: 'sliders'
---

Core behaviors and feature toggles in Smart WebView are controlled by static variables in the `app/src/main/java/mgks/os/swv/SmartWebView.java` file. Modify them directly in the code to configure your app.

::: callout tip
Remember to rebuild your project in Android Studio after making changes to `SmartWebView.java`.
:::

---

## Key Configuration Variables

### URLs

Define the web addresses your application will load.

```java
// Default app URL (web address or local file path)
// Example Web: "https://your-website.com"
// Example Local: "file:///android_asset/index.html"
public static String ASWV_APP_URL = "https://mgks.github.io/Android-SmartWebView/";

// Fallback URL if device is offline
public static String ASWV_OFFLINE_URL = "file:///android_asset/offline.html";

// Base URL for the in-app search feature (if using Drawer Layout)
public static String ASWV_SEARCH = "https://www.google.com/search?q=";

// Comma-separated list of *additional* domains allowed to open within the app's WebView.
public static String ASWV_EXC_LIST = "mgks.dev,mgks.github.io,github.com";
```

### Feature Toggles

Enable or disable specific native features integrated with the WebView.

```java
// Enable file uploads from the WebView (<input type="file" />)
public static boolean ASWP_FUPLOAD = true;

// Allow capturing photos/videos directly from the camera for uploads
public static boolean ASWP_CAMUPLOAD = true;

// Allow selecting multiple files for upload
public static boolean ASWP_MULFILE = true;

// Enable GPS location tracking
public static boolean ASWP_LOCATION = true;

// Allow users to copy/paste text within the WebView
public static boolean ASWP_COPYPASTE = false;

// Enable the automatic app rating dialog prompt
public static boolean ASWP_RATINGS = true;

// Enable the pull-to-refresh gesture on the WebView
public static boolean ASWP_PULLFRESH = true;

// Show a progress bar during page loads
public static boolean ASWP_PBAR = true;

// Allow pinch-to-zoom gestures within the WebView
public static boolean ASWP_ZOOM = false;

// Allow the WebView to save form data (cache and autofill)
public static boolean ASWP_SFORM = false;

// Open external links outside the app's WebView
public static boolean ASWP_EXTURL = true;

// If ASWP_EXTURL is true, use Chrome Custom Tabs for external links
public static boolean ASWP_TAB = true;

// Show a confirmation dialog when pressing back on the first page.
public static boolean ASWP_EXITDIAL = true;
```

### Security

Configure security-related aspects of the WebView.

```java
// Verify SSL certificates for HTTPS connections. (Recommended: true)
public static boolean ASWP_CERT_VERI = true;
```

### UI & Layout

Control screen orientation and overall navigation structure.

```java
// Set the default device orientation (0=Unspecified, 1=Portrait, 2=Landscape)
public static int ASWV_ORIENTATION = 0;

// Choose the main app layout (0=Fullscreen, 1=Drawer Layout)
public static int ASWV_LAYOUT = 0;
```

### User Agent

Modify the User Agent string sent by the WebView.

```java
// Append USER_AGENT_POSTFIX to the default WebView User Agent string.
public static boolean POSTFIX_USER_AGENT = true;
public static String USER_AGENT_POSTFIX = "SWVAndroid";

// Completely override the default User Agent with CUSTOM_USER_AGENT.
public static boolean OVERRIDE_USER_AGENT = false;
public static String CUSTOM_USER_AGENT = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) ...";
```

### File Upload Types

Specify default allowed file types for uploads.

```java
// Default MIME type filter for the file chooser. "*/*" allows any type.
public static String ASWV_F_TYPE = "*/*";
```

### Google Analytics

Configure the ID for Google Analytics integration.

```java
// Your Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX")
public static String ASWV_GTAG = "G-7XXC1C7CRQ"; // Replace with your ID
```

### Rating Dialog Timing

Adjust when the app rating prompt appears.

```java
// Minimum days after install before showing the rating dialog.
static int ASWR_DAYS = 3;
// Minimum number of app launches before showing the dialog.
static int ASWR_TIMES = 10;
// If user chooses "Remind Me Later", wait days before asking again.
static int ASWR_INTERVAL = 2;
```

### Debug Mode

Enable verbose logging for development.

```java
// Enable verbose logging and error toasts. (Set to `false` for production!)
public static boolean SWV_DEBUGMODE = true;
```

### Plugin Configuration

Control which plugins are active. The `ASWP_PLUGIN_SETTINGS` map is the definitive source for enabling or disabling plugins.

```java
// Individual plugin switches. To disable a plugin, set its value to false.
public static Map<String, Boolean> ASWP_PLUGIN_SETTINGS = new HashMap<String, Boolean>() {{
    put("AdMobPlugin", true);
    put("JSInterfacePlugin", true);
    put("ToastPlugin", true);
    put("QRScannerPlugin", true);
    put("BiometricPlugin", true);
    put("ImageCompressionPlugin", true);
}};
```

Enable the plugin test UI (Playground). (Set to `false` for production!)

```java
public static boolean SWV_PLAYGROUND = true;
```

Remember to review these settings and adjust them according to your application's needs.