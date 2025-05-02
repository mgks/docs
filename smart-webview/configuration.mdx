---
title: 'Configuration'
description: 'Adjusting core Smart WebView settings.'
icon: 'sliders'
---

Many core behaviors and feature toggles in Smart WebView are controlled by static variables or configuration files.

<Tabs>
 <Tab title="Android">
    These variables are defined in the `app/src/main/java/mgks/os/swv/SmartWebView.java` file. Modify them directly in the code to configure your app.

    <Tip>Remember to rebuild your project in Android Studio after making changes to `SmartWebView.java`.</Tip>
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Configuration details for iOS (e.g., using a settings plist or Swift variables) will be added here. -->
    ```
 </Tab>
</Tabs>

---

## Key Configuration Variables

Here's a breakdown of important configuration areas and their current Android implementation:

### URLs

Define the web addresses your application will load and interact with.

<Tabs>
 <Tab title="Android">
 
    ```java SmartWebView.java
    // Default app URL (web address or local file path)
    // Example Web: "https://your-website.com"
    // Example Local: "file:///android_asset/index.html"
    static String ASWV_APP_URL = "https://mgks.github.io/Android-SmartWebView/";

    // Fallback URL if ASWV_APP_URL is empty or device is offline
    static String ASWV_OFFLINE_URL = "file:///android_asset/offline.html";

    // Base URL for the in-app search feature (if using Drawer Layout)
    static String ASWV_SEARCH = "https://www.google.com/search?q=";

    // URL endpoint on your website to handle content shared *to* the app.
    static String ASWV_SHARE_URL = ASWV_URL + "?share=";

    // Comma-separated list of *additional* domains allowed to open within the app's WebView.
    static String ASWV_EXC_LIST = "mgks.dev,mgks.github.io,github.com";
    ```

 </Tab>
 <Tab title="iOS">

    ```Swift
    <!-- iOS equivalent URL configuration will be added here. -->
    ```

 </Tab>
</Tabs>

### Feature Toggles

Permissions & Behavior (Enable or disable specific native features) integrated with the WebView.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java [expandable]
    // Enable file uploads from the WebView (<input type="file" />)
    static boolean ASWP_FUPLOAD = true;

    // Allow capturing photos/videos directly from the camera for uploads
    static boolean ASWP_CAMUPLOAD = true;

    // Allow selecting multiple files for upload
    static boolean ASWP_MULFILE = true;

    // Enable GPS location tracking
    static boolean ASWP_LOCATION = true;

    // Allow users to copy/paste text within the WebView
    static boolean ASWP_COPYPASTE = false;

    // Enable the automatic app rating dialog prompt
    static boolean ASWP_RATINGS = true;

    // Enable the pull-to-refresh gesture on the WebView
    static boolean ASWP_PULLFRESH = true;

    // Show a progress bar during page loads
    static boolean ASWP_PBAR = true;

    // Allow pinch-to-zoom gestures within the WebView
    static boolean ASWP_ZOOM = false;

    // Allow the WebView to save form data (cache and autofill)
    static boolean ASWP_SFORM = false;

    // Open external links outside the app's WebView
    static boolean ASWP_EXTURL = true;

    // If ASWP_EXTURL is true, use Chrome Custom Tabs for external links
    static boolean ASWP_TAB = true;

    // Show a confirmation dialog when pressing back on the first page.
    static boolean ASWP_EXITDIAL = true;    
    ```

 </Tab>
 <Tab title="iOS">

    ```Swift
    <!-- iOS equivalent feature toggles will be added here. -->
    ```

 </Tab>
</Tabs>

### Security

Configure security-related aspects of the WebView.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java
    // Verify SSL certificates for HTTPS connections. (Recommended: true)
    static boolean ASWP_CERT_VERI = true;
    ```

 </Tab>
 <Tab title="iOS">

    ```Swift
    <!-- iOS equivalent security settings (e.g., App Transport Security) will be added here. -->
    ```

 </Tab>
</Tabs>

### UI & Layout

Control aspects like screen orientation and overall navigation structure.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java
    // Set the default device orientation (0=Unspecified, 1=Portrait, 2=Landscape)
    static int ASWV_ORIENTATION = 0;

    // Choose the main app layout (0=Fullscreen, 1=Drawer Layout)
    static int ASWV_LAYOUT = 0;
    ```

 </Tab>
 <Tab title="iOS">

    ```Swift
    <!-- iOS equivalent UI/Layout settings (e.g., supported orientations, root view controller) will be added here. -->
    ```

 </Tab>
</Tabs>

### User Agent

Modify the User Agent string sent by the WebView.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java
    // Append USER_AGENT_POSTFIX to the default WebView User Agent string.
    static boolean POSTFIX_USER_AGENT = true;
    static String USER_AGENT_POSTFIX = "SWVAndroid";

    // Completely override the default User Agent with CUSTOM_USER_AGENT.
    static boolean OVERRIDE_USER_AGENT = false;
    static String CUSTOM_USER_AGENT = "Mozilla/5.0 ...";
    ```

 </Tab>
 <Tab title="iOS">

    ```md
    <!-- iOS equivalent User Agent modification will be added here. -->
    ```

 </Tab>
</Tabs>

### File Upload Types

Specify default allowed file types for uploads.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java
    // Default MIME type filter for the file chooser. "*/*" allows any type.
    static String ASWV_F_TYPE = "*/*";
    ```

 </Tab>
 <Tab title="iOS">

    ```md
    <!-- iOS equivalent file type configuration will be added here. -->
    ```

 </Tab>
</Tabs>

### Google Analytics

Configure the ID for Google Analytics integration.

<Tabs>
 <Tab title="Android">

    ```java SmartWebView.java
    // Your Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX")
    static String ASWV_GTAG = "7XXC1C7CRQ"; // Replace with your ID
    ```

 </Tab>
 <Tab title="iOS">

    ```md
    <!-- iOS equivalent Analytics configuration will be added here. -->
    ```

 </Tab>
</Tabs>

### Rating Dialog Timing

Adjust when the app rating prompt appears.

<Tabs>
 <Tab title="Android">
    
    ```java SmartWebView.java
    // Minimum days after install before showing the rating dialog.
    static int ASWR_DAYS = 3;
    // Minimum number of app launches before showing the dialog.
    static int ASWR_TIMES = 10;
    // If user chooses "Remind Me Later", wait days before asking again.
    static int ASWR_INTERVAL = 2;
    ```

 </Tab>
 <Tab title="iOS">

    ```md
    <!-- iOS rating prompt configuration (uses SKStoreReviewController, timing less directly controllable) will be added here. -->
    ```

 </Tab>
</Tabs>

### Debug Mode

Enable verbose logging for development.

<Tabs>
 <Tab title="Android">
    
    ```java SmartWebView.java
    // Enable verbose logging and error toasts. (Set to `false` for production!)
    static boolean SWV_DEBUGMODE = true;
    ```

 </Tab>
 <Tab title="iOS">

    ```md
    <!-- iOS equivalent debug mode settings will be added here. -->
    ```

 </Tab>
</Tabs>

---

Remember to review these settings and adjust them according to your specific application needs for each platform you target.