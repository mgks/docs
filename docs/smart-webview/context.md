Of course. I will generate a new, updated set of documentation for the Smart WebView project based on the provided source code. I will adhere to the specified formatting, using docmd syntax where appropriate, and focus on creating clear, concise, and well-structured content.

Here is the complete, updated documentation:

***

## `index.md`

```markdown
---
title: 'Smart WebView'
description: 'Smart WebView is a versatile and lightweight project designed to help you quickly convert your website or web application into a native mobile app.'
---

## Welcome to Smart WebView

Smart WebView is a versatile and lightweight project designed to help you quickly convert your website or web application into a native mobile app. It provides a robust foundation with essential features built-in, saving you significant development time.

::: card
[Smart WebView on GitHub](https://github.com/mgks/Android-SmartWebView/)
:::

**Key Highlights:**

*   **Hybrid App Solution:** Seamlessly wrap your existing web content within a native container.
*   **Feature Rich:** Includes support for common requirements like file uploads, camera access, geolocation, push notifications (Firebase), analytics, and more.
*   **Customizable:** Easily configure and style the app to match your brand identity.
*   **Extensible:** Features a powerful plugin architecture allowing developers to add custom native functionalities without altering the core code.
*   **Modern:** Built with up-to-date native development practices, libraries, and target APIs.

Whether you need a simple web wrapper or a more complex hybrid application with native integrations, Smart WebView provides a solid starting point.

**Ready to get started?** Head over to the [Getting Started](/getting-started) guide.
```

## `getting-started.md`

```markdown
---
title: 'Getting Started'
description: 'Setting up the Smart WebView project.'
icon: 'rocket'
---

Follow these steps to get your Smart WebView project up and running.

## Prerequisites

*   **Android Studio:** The official IDE for Android development. Download from the [Android Developers site](https://developer.android.com/studio).
*   **Android SDK:** Minimum API Level 24 (Android 7.0 Nougat) or higher installed via the Android Studio SDK Manager.

## Setup

::: steps

### Step 1: Download Project Files

You have two options:
*   **(Recommended)** Download the latest stable Source code asset (`.zip` or `.tar.gz`) from the [GitHub Releases](https://github.com/mgks/Android-SmartWebView/releases) page.
*   Clone the repository (might include untested changes):
    ```bash
    git clone https://github.com/mgks/Android-SmartWebView.git
    ```

### Step 2: Add Firebase Configuration (Important)

If you plan to use Firebase Cloud Messaging (Push Notifications), you need to add your Firebase project's configuration file.

1.  Go to your [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project or select an existing one.
3.  Add an **Android app** to your project, following the on-screen instructions. Use `mgks.os.swv` as the package name during setup unless you plan to change it later.
4.  Download the `google-services.json` file provided during the setup.
5.  Place this downloaded `google-services.json` file directly into the `app/` directory of your Smart WebView project.
    ```bash
    Android-SmartWebView/
    ├── app/
    │   ├── google-services.json  <-- Place it here
    │   ├── src/
    │   └── ...
    └── ...
    ```
    ::: tip
    This step is crucial for Firebase features to work. See the [Firebase Messaging](/features/firebase-messaging) guide for more details.
    :::

### Step 3: Load Project in Android Studio

1.  Open Android Studio.
2.  Select `File > Open...`.
3.  Navigate to the directory where you downloaded or cloned the Smart WebView project and select the root folder.
4.  Click `Open`.

### Step 4: Sync and Build Project

1.  Allow Android Studio to index the files and download all necessary Gradle dependencies. This might take a few minutes.
2.  Once the sync is complete, it's good practice to clean and rebuild:
    *   Go to `Build > Clean Project`.
    *   Then go to `Build > Rebuild Project`.

### Step 5: Run the App

1.  Connect an Android device or start an emulator.
2.  Select your device/emulator from the target dropdown menu in Android Studio.
3.  Click the `Run 'app'` button (green play icon) or use the shortcut `Shift + F10`.

:::

Your Smart WebView app should now build and launch! If you encounter issues, double-check the `google-services.json` file placement and ensure the build process completed without errors.
```

## `configuration.md`

```markdown
---
title: 'Configuration'
description: 'Adjusting core Smart WebView settings.'
icon: 'sliders'
---

Core behaviors and feature toggles in Smart WebView are controlled by static variables in the `app/src/main/java/mgks/os/swv/SmartWebView.java` file. Modify them directly in the code to configure your app.

::: tip
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

Control which plugins are active.

```java
// Globally enable or disable all plugins
public static boolean ASWP_PLUGINS = true;

// Individual plugin switches. To disable a plugin, set its value to false.
public static Map<String, Boolean> ASWP_PLUGIN_SETTINGS = new HashMap<String, Boolean>() {{
    put("AdMobPlugin", true);
    put("JSInterfacePlugin", true);
    put("ToastPlugin", true);
    put("QRScannerPlugin", true);
    put("BiometricPlugin", true);
    put("ImageCompressionPlugin", true);
}};```
---

Remember to review these settings and adjust them according to your application's needs.
```

## `customization.md`

```markdown
---
title: 'Customization'
description: 'Tailoring the appearance and resources of your Smart WebView app.'
icon: 'palette'
---

Smart WebView is designed to be easily customizable. You can modify various aspects of the app, from visual styles to text strings and assets.

---

## App Name and Package ID

*   **App Name:** Change the `app_name` string value in `app/src/main/res/values/strings.xml`.
*   **Package ID:** Right-click on `mgks.os.swv` in the `java` directory (Project view), select `Refactor > Rename`, choose "Rename package", enter your ID (e.g., `com.yourcompany.yourapp`), and let Android Studio refactor. Also, update the `applicationId` in `app/build.gradle`.

::: danger
Changing the Package ID after release complicates app updates on Google Play.
:::

---

## Launcher Icons

Replace icons in `app/src/main/res/mipmap-*` directories. Use Android Studio's "Image Asset Studio" (Right-click `res` > `New` > `Image Asset`) for generating adaptive icons.

---

## UI Appearance

*   **Colors:** Define your palette in `app/src/main/res/values/colors.xml`.
*   **Themes:** Modify app themes in `app/src/main/res/values/styles.xml` and `app/src/main/res/values/themes.xml`.
*   **Splash Screen Background:** Customize in `app/src/main/res/drawable/background_splash.xml` and the `SplashTheme` in `styles.xml`.

---

## Layouts

Modify the XML layout files in `app/src/main/res/layout/` (e.g., `activity_main.xml`, `drawer_main.xml`) to change the native UI structure.

---

## Navigation Drawer

When using the drawer layout (`ASWV_LAYOUT = 1`), you can customize it:

*   **Menu Items:** Define items in `app/src/main/res/menu/activity_main_drawer.xml`.
*   **Header:** Customize the header view in `app/src/main/res/layout/drawer_main_header.xml`.
*   **Item Click Handling:** Modify `onNavigationItemSelected` in `Functions.java`.

---

## Local Assets

Place files in `app/src/main/assets/` to bundle them with your app. Access them in the WebView using the path `file:///android_asset/YOUR_FILENAME`. The project includes:
- `error.html`
- `offline.html`
- `script.js`
- `style.css`

---

## Text Strings

Centralize user-facing text for easy modification and localization in `app/src/main/res/values/strings.xml`. To add translations, create new resource folders like `values-es/strings.xml`.

---

## Android Manifest

The core application configuration file is `app/src/main/AndroidManifest.xml`.

::: warning
Modify this file with care. It is used for declaring permissions, registering activities/services, defining intent filters for deep linking, and specifying hardware features.
:::
```

## `features/index.md`

```markdown
---
title: 'Core Features'
description: 'Overview of the main features available in Smart WebView.'
---

This section details the core native functionalities integrated into the Smart WebView project.
```

## `features/analytics.md`

```markdown
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
```

## `features/firebase-messaging.md`

```markdown
---
title: 'Firebase Messaging'
description: 'Setting up and using Firebase push notifications.'
icon: 'bell'
---

Smart WebView integrates Firebase Cloud Messaging (FCM) to enable push notifications.

---

## Setup

Refer to the [Getting Started](/getting-started#add-firebase-configuration-important) guide for the initial step of adding the `google-services.json` file to your project. This is mandatory for FCM.

::: card
[Official FCM Android Setup Guide](https://firebase.google.com/docs/cloud-messaging/android/client)
:::

---

## How it Works

*   **Token Generation:** The Firebase SDK automatically generates a unique registration token. The `Firebase.java` service listens for new tokens (`onNewToken`) and stores the latest token in `SmartWebView.fcm_token`. The `Functions.fcm_token()` method attempts to retrieve this and set it as a cookie (`FCM_TOKEN=...`) for your web application to access.
*   **Receiving Messages:**
    *   **Foreground:** `Firebase.java`'s `onMessageReceived` is triggered, and a notification is manually displayed.
    *   **Background/Closed:** The Firebase SDK automatically handles displaying notifications sent with a `notification` payload.
*   **Handling Clicks:** Notifications can include a `data` payload with a `uri` key. When the user taps the notification, the app opens and loads the specified `uri`. If no `uri` is provided, it defaults to the main `ASWV_URL`.

---

## Sending Notifications

Use the Firebase Console or the FCM HTTP v1 API to send notifications.

**Example POST Request (FCM HTTP v1 API):**

```json
// POST https://fcm.googleapis.com/v1/projects/YOUR_PROJECT_ID/messages:send
{
  "message": {
    "token": "DEVICE_REGISTRATION_TOKEN", // <-- Get this from the device
    "notification": {
      "title": "Your Notification Title",
      "body": "This is the main message body."
    },
    "android": {
      "notification": {
        "click_action": "OPEN_URI"
      }
    },
    "data": { // Custom data payload
      "uri": "https://your-website.com/specific-page",
      "nid": "unique_notification_id_123"
    }
  }
}
```

**Headers:**

*   `Content-Type: application/json`
*   `Authorization: Bearer YOUR_OAUTH2_ACCESS_TOKEN`

::: tip
The `FCM_TOKEN` cookie can be read by your website's JavaScript to send the token to your server.
:::

---

## Customization

*   **Notification Channel:** Customize the channel ID (`SmartWebView.asw_fcm_channel`) and names/descriptions in `app/src/main/res/values/strings.xml`. This is required for Android 8.0+.
*   **Notification Icon:** Set the icon in `Firebase.java` via `.setSmallIcon()`.
*   **Data Handling:** Modify `onMessageReceived` in `Firebase.java` to process custom `data` payloads for more complex interactions.
```

## `features/file-handling.md`

```markdown
---
title: 'File Handling'
description: 'Managing file uploads, camera access, and downloads.'
icon: 'folder-open'
---

Smart WebView provides robust support for handling file uploads initiated from your web content, including direct access to the device camera, and manages file downloads.

---

## File Uploads & Camera Access

This functionality allows users to interact with `<input type="file">` elements in your web content.

**Configuration:**

Controlled by variables in `SmartWebView.java`:
*   `ASWP_FUPLOAD` (`true`/`false`): Globally enable/disable file input.
*   `ASWP_CAMUPLOAD` (`true`/`false`): Include a camera capture option in the chooser.
*   `ASWP_MULFILE` (`true`/`false`): Allow multiple file selection if the HTML input tag supports it.

**Permissions:**

The following permissions are declared in `AndroidManifest.xml` and requested at runtime if needed:
*   `android.permission.CAMERA`
*   `android.permission.READ_MEDIA_IMAGES`
*   `android.permission.READ_MEDIA_VIDEO`
*   `android.permission.READ_MEDIA_AUDIO`
*   `android.permission.WRITE_EXTERNAL_STORAGE` (with `maxSdkVersion` for older Android versions)

**How it Works:**

1.  A user taps an `<input type="file">` element in the WebView.
2.  The `onShowFileChooser` method in `FileProcessing.java` is triggered.
3.  It constructs an `Intent` that opens a system chooser, allowing the user to select files or use the camera (if enabled).
4.  The HTML `accept` attribute can filter the file types shown (e.g., `image/*`).
5.  The HTML `multiple` attribute, combined with `ASWP_MULFILE`, allows for multi-file selection.
6.  The selected file URIs are returned to the WebView to be processed by your web application.

---

## Downloads

This handles files downloaded *from* the WebView.

**How it Works:**

1.  The WebView's `DownloadListener` detects a URL that triggers a download.
2.  It uses the Android `DownloadManager` service to handle the download.
3.  A system notification shows the download progress.
4.  Files are saved to the public "Downloads" directory on the device.
5.  A Toast message confirms that the download has started.
```

## `features/location.md`

```markdown
---
title: 'GPS Location'
description: 'Accessing device GPS coordinates and sending them to your web app.'
icon: 'map-pin'
---

Smart WebView can access the device's location and make the coordinates available to your web application.

---

## Enabling Location Services

**Configuration:**

Set the `ASWP_LOCATION` variable to `true` in `SmartWebView.java`:
```java
// Enable GPS location tracking
public static boolean ASWP_LOCATION = true;
```
If set to `false`, the app will not request location permissions or access the GPS.

---

## Permissions

The app declares and requests `ACCESS_FINE_LOCATION` and `ACCESS_COARSE_LOCATION` permissions as needed. The user must grant this permission at runtime.

---

## How it Works

1.  If `ASWP_LOCATION` is `true` and permissions are granted, the `GPSTrack.java` service attempts to get the current latitude and longitude.
2.  This typically occurs when the app starts or resumes via the `fns.get_location()` call in `MainActivity`.
3.  If successful, the coordinates are sent to the webpage (at `ASWV_URL`) by setting cookies:
    *   `lat`: Latitude value.
    *   `long`: Longitude value.
4.  For the offline `offline.html` page, a special `getloc:` link can be used to manually trigger a location fetch and display it on the page.

**Accessing Coordinates in JavaScript (via Cookies):**

Your web application can read the cookies to get the location.

```javascript
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const latitude = getCookie('lat');
const longitude = getCookie('long');

if (latitude && longitude) {
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Use the coordinates in your web app
} else {
  console.log('Location cookies not found.');
}
```

---

## Considerations

*   **Battery Usage:** The current implementation primarily gets location on app start/resume to conserve battery.
*   **User Privacy:** Clearly inform users why you need their location.
*   **Accuracy:** Location accuracy depends on the device and signal availability.
```

## `features/navigation.md`

```markdown
---
title: 'URL Handling & Navigation'
description: 'Managing internal/external links and UI layouts.'
icon: 'compass'
---

Smart WebView provides flexible options for handling URL navigation and choosing the app's primary UI layout.

---

## URL Handling

This controls how the app treats different types of links.

**External Links:**

You can configure how links that point to domains outside your main website are handled.

*   `ASWP_EXTURL` (`true`/`false`): If `true`, external links are opened outside the app. If `false`, all links are loaded inside the WebView.
*   `ASWP_TAB` (`true`/`false`): If `ASWP_EXTURL` is `true`, this determines whether to use integrated Chrome Custom Tabs (`true`) or the device's default browser (`false`).
*   `ASWV_EXC_LIST` (String): A comma-separated list of domains that should be treated as internal, even if they don't match your main `ASWV_HOST`.

**Special URL Schemes:**

The app intercepts URLs with specific prefixes to trigger native actions:

*   `tel:*`: Opens the default phone dialer.
*   `rate:*`: Opens the app's page on the Google Play Store.
*   `share:*`: Opens the native sharing dialog to share content from the app.
*   `exit:*`: Closes the application.
*   `print:*`: Opens the native print dialog.
*   `getloc:*`: (For offline page) Fetches and displays GPS coordinates.
*   `fcm:*`: (For offline page) Triggers a test Firebase notification.

These are handled in the `url_actions` method in `Functions.java`.

---

## UI Layout Modes

Configure the app's main layout via the `ASWV_LAYOUT` variable in `SmartWebView.java`.

### Mode 0: Fullscreen Layout (Default)

*   **Description:** The WebView occupies the entire screen. This is ideal for a simple, immersive web wrapper.
*   **Layout File:** `app/src/main/res/layout/activity_main.xml`

### Mode 1: Drawer Layout

*   **Description:** Implements a standard Android navigation drawer with a side menu and a top action bar.
*   **Layout Files:** `drawer_main.xml`, `drawer_main_bar.xml`, etc.
*   **Menu Definition:** `app/src/main/res/menu/activity_main_drawer.xml`
*   **Menu Handling:** `onNavigationItemSelected` in `Functions.java`.
```

## `features/printing.md`

```markdown
---
title: 'Printing'
description: 'Allowing users to print the current web page content.'
icon: 'print'
---

Smart WebView supports printing the content currently displayed in the WebView using the native Android print framework.

---

## How to Trigger Printing

Printing is initiated from your web content by using a hyperlink with the special URL scheme `print:`.

**HTML Example:**

```html
<a href="print:">Print this Page</a>

<!-- Or use a button with JavaScript -->
<button onclick="window.location.href='print:'">Print Report</button>
```

---

## How it Works

1.  A user clicks a `print:` link in the WebView.
2.  The `shouldOverrideUrlLoading` method in `MainActivity.java` intercepts this URL.
3.  It calls the `Functions.print_page` method.
4.  This method uses the Android `PrintManager` service to create a print job from the current WebView content.
5.  The standard Android print preview screen appears, allowing the user to select a printer, save as a PDF, and adjust settings.

::: tip
The quality of the printout depends on how well your webpage's CSS is optimized for print media (e.g., using `@media print` styles).
:::

---

## Requirements

*   Android 4.4 (KitKat, API 19) or higher.
*   The device must have print services enabled or configured (e.g., Cloud Print, Wi-Fi Direct printing, or Save as PDF).
```

## `features/rating-system.md`

```markdown
---
title: 'Rating System'
description: 'Prompting users to rate your app on the Google Play store.'
icon: 'star'
---

Smart WebView includes a system to prompt users to rate your application after certain usage conditions are met. This feature is based on the [Android-Rate](https://github.com/hotchemi/Android-Rate) library.

---

## Enabling and Configuring

This feature is enabled and configured using variables in `SmartWebView.java`.

```java
// Enable the automatic app rating dialog prompt
public static boolean ASWP_RATINGS = true;

// Minimum days after install before showing.
static int ASWR_DAYS = 3;
// Minimum number of app launches before showing.
static int ASWR_TIMES = 10;
// Days to wait before reminding if user selects "Later".
static int ASWR_INTERVAL = 2;
```

---

## How it Works

1.  If `ASWP_RATINGS` is `true`, `MainActivity` schedules a check.
2.  The `AppRate` library monitors the install date and launch count based on the configured `ASWR_DAYS` and `ASWR_TIMES`.
3.  If the conditions are met and the user hasn't permanently opted out, a dialog is displayed.
4.  The user has three options:
    *   **Rate Now:** Opens the app's page on the Google Play Store.
    *   **Later:** Dismisses the dialog and waits for `ASWR_INTERVAL` days before potentially showing it again.
    *   **Don't Ask Again:** Permanently disables future rating prompts for the user.

::: tip
The rating dialog requires an internet connection to function correctly.
:::

---

## Customizing Dialog Text

You can change the text displayed in the rating dialog by editing the string resources in `app/src/main/res/values/strings.xml`:
*   `rate_dialog_title`
*   `rate_dialog_message`
*   `rate_dialog_ok` (for the "Rate Now" button)
*   `rate_dialog_cancel` (for the "Later" button)
*   `rate_dialog_no` (for the "Don't Ask Again" button)

---

## Disabling the Rating Prompt

To completely disable this feature, set `ASWP_RATINGS` to `false` in `SmartWebView.java`.
```

## `features/sharing.md`

```markdown
---
title: 'Inbound Sharing'
description: 'Receiving text and links shared from other apps.'
icon: 'share'
---

Smart WebView can register as a target for Android's native sharing functionality, allowing users to share content like URLs and text directly *to* your application from other apps.

---

## How it Works

1.  **Enabling via Manifest:** Sharing is enabled via `<intent-filter>` elements for the `ShareActivity` in `AndroidManifest.xml`. These filters specify that the app can handle `ACTION_SEND` intents for `text/*` and `image/*` MIME types.
2.  **User Action:** A user in another app (like a browser or social media app) uses the "Share" button and selects your app from the list.
3.  **Activity Launch:** Android launches the `ShareActivity` of your app.
4.  **Data Handling:** `ShareActivity` extracts the shared text or link from the intent.
5.  **Redirection:** It then constructs a URL based on the main app URL (`ASWV_URL`) and appends the shared content as query parameters. For example: `https://your-site.com/?s_uri=SHARED_CONTENT`.
6.  **Loading in WebView:** Finally, it launches the `MainActivity` and instructs it to load this newly constructed URL, allowing your web application to process the shared content.

---

## Processing on Your Website

Your web application needs to be able to parse the URL query parameters to handle the shared data.

**Example JavaScript:**

```javascript
const urlParams = new URLSearchParams(window.location.search);
const sharedContent = urlParams.get('s_uri'); // Matches the key from ShareActivity

if (sharedContent) {
  // The content was shared from another app
  console.log('Received shared content:', sharedContent);
  // Now you can display it, fill a form, etc.
  document.getElementById('my-textarea').value = sharedContent;
}
```

---

## Disabling Sharing

To disable this feature, remove or comment out the entire `<activity android:name=".ShareActivity">...</activity>` block from `AndroidManifest.xml`.
```

## `plugins/index.md`

```markdown
---
title: 'Plugin Architecture'
description: 'Understanding the Smart WebView plugin system.'
icon: 'puzzle'
---

Smart WebView features a powerful plugin architecture, allowing you to extend native functionalities without altering the core project code.

## Core Concepts

*   **Self-Contained:** Plugins are designed as independent, modular classes.
*   **Self-Registration:** Plugins register themselves with the `PluginManager` when their class is first loaded by the application.
*   **Standardized Interface:** All plugins implement the `PluginInterface`, which defines essential lifecycle methods (`initialize`, `onDestroy`, `onActivityResult`, etc.).
*   **Central Management:** The `PluginManager` class handles plugin registration, initialization, and routing of lifecycle events.
*   **Configuration:** Plugin behavior can be configured externally through the `Playground` class or disabled entirely in `SmartWebView.java`, preventing the need to modify the plugin's source code.

## Benefits

*   **Modularity:** Keeps custom features separate and organized.
*   **Extensibility:** Easily add new native capabilities.
*   **Simplified Updates:** Core project updates are easier when custom code is isolated.

## Key Components

*   **`PluginInterface.java`:** The contract that all plugins must implement. It defines the methods the `PluginManager` will call.
*   **`PluginManager.java`:** The central hub for managing all registered plugins. It's a singleton accessed via `SmartWebView.getPluginManager()`.
*   **`Playground.java`:** A dedicated class for configuring and testing plugins during development. See the [Playground](/plugins/playground) documentation.
*   **`plugins/` directory:** The conventional location for plugin source files.
*   **Static Initializer Block:** The common pattern used for self-registration within a plugin class.
    ```java
    // Inside YourPlugin.java
    static {
        // Provide a default configuration for the plugin
        Map<String, Object> defaultConfig = new HashMap<>();
        defaultConfig.put("some_key", "default_value");

        // Register an instance of the plugin with the PluginManager
        PluginManager.registerPlugin(new YourPlugin(), defaultConfig);
    }
    ```

Ready to build your own? Check out the [Creating Plugins](/plugins/creating-plugins) guide.
```

## `plugins/creating-plugins.md`

```markdown
---
title: 'Creating Plugins'
description: 'A guide to building your own custom plugins for Smart WebView.'
icon: 'plug'
---

The Smart WebView plugin architecture allows you to extend the application's native capabilities. Follow these steps to create your own plugin.

## 1. Create the Plugin Class

1.  Create a new Java class inside the `app/src/main/java/mgks/os/swv/plugins/` directory.
2.  Make your class implement the `PluginInterface`.

    ```java
    package mgks.os.swv.plugins;

    import android.app.Activity;
    import android.content.Intent;
    import android.webkit.WebView;
    import androidx.annotation.NonNull;
    import java.util.Map;

    import mgks.os.swv.Functions;
    import mgks.os.swv.PluginInterface;

    public class MyCustomPlugin implements PluginInterface {

        private Activity activity;
        private WebView webView;

        @Override
        public void initialize(Activity activity, WebView webView, Functions functions, Map<String, Object> config) {
            this.activity = activity;
            this.webView = webView;
            // Initialization logic here...
        }

        @Override
        public String getPluginName() {
            return "MyCustomPlugin"; // Must be a unique name
        }

        @Override
        public void onActivityResult(int requestCode, int resultCode, Intent data) {
            // Handle results from activities started by this plugin
        }

        @Override
        public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
            // Handle results from permission requests
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            // Example: Handle a custom URL scheme
            if (url.startsWith("myplugin://dosomething")) {
                // Perform a native action
                return true; // We've handled the URL
            }
            return false; // Let other plugins or the default handler process it
        }

        @Override
        public void onPageStarted(String url) { }

        @Override
        public void onPageFinished(String url) {
            // Logic to run after a page loads, like injecting JS
        }

        @Override
        public void onDestroy() {
            // Clean up resources
        }

        @Override
        public void evaluateJavascript(String script) {
            if (webView != null) {
                webView.evaluateJavascript(script, null);
            }
        }
    }
    ```

## 2. Implement Self-Registration

Add a `static` initializer block to your plugin class. This automatically registers an instance of your plugin with the `PluginManager` when the app starts.

```java
public class MyCustomPlugin implements PluginInterface {

    // ... (existing methods) ...

    // Static initializer block for self-registration
    static {
        // Provide a default configuration for your plugin
        Map<String, Object> defaultConfig = new HashMap<>();
        defaultConfig.put("apiKey", "DEFAULT_KEY");
        defaultConfig.put("enabled", true);

        // Register the plugin with the manager
        PluginManager.registerPlugin(new MyCustomPlugin(), defaultConfig);
    }

    // ... (rest of the class) ...
}
```

## 3. Implement Plugin Logic

Fill in the methods from the `PluginInterface` to add your native functionality. You can start activities, request permissions, handle URL loading, and communicate with the WebView.

## 4. Communicate with JavaScript

You have two primary ways to trigger native code from your web content:

*   **Custom URL Schemes:** Your web page can navigate to a unique URL like `myplugin://show-dialog?title=Hello`. Your plugin intercepts this in `shouldOverrideUrlLoading`, parses the URL, and performs the native action. This is simple but less flexible.
*   **JavaScript Interface:** Add a dedicated class with methods annotated with `@JavascriptInterface`. Add an instance of this interface to the WebView in your plugin's `initialize` method (e.g., `webView.addJavascriptInterface(new MyJSInterface(), "MyPluginAndroid")`). This allows your JavaScript to directly call native methods (e.g., `window.MyPluginAndroid.performAction("data")`), which is more powerful and flexible.

To send data from native back to JavaScript, use the `evaluateJavascript()` method.

## 5. Enable and Test

1.  **Enable the Plugin:** Ensure your plugin is enabled in the `ASWP_PLUGIN_SETTINGS` map in `SmartWebView.java`.
    ```java
    put("MyCustomPlugin", true);
    ```
2.  **Test with Playground:** Use the `Playground.java` class to test your plugin in a sandboxed environment. You can run diagnostic checks and add buttons to the demo UI to trigger your plugin's features.

::: card
[Read more about the Playground](/plugins/playground)
:::
```

## `plugins/playground.md`

```markdown
---
title: 'Playground'
description: 'Configuring and testing plugins using Playground.java.'
icon: 'flask'
---

The `Playground.java` class is a dedicated component designed to facilitate plugin development and testing. It acts as a sandbox where you can configure, diagnose, and experiment with plugins without modifying their source code.

---

## Purpose

*   **Centralized Testing:** Provides a single place to run diagnostic checks and add UI elements to the web page for manually testing plugin functionality.
*   **Initialization Hook:** Ensures that plugin tests only run *after* the core plugin system is fully initialized and ready.
*   **Fail-Safe Diagnostics:** Contains a robust system (`runPluginDiagnostic`) to test plugins without crashing the app if a plugin is missing or fails.
*   **Example Implementation:** Serves as a clear example of how to get a plugin instance from the `PluginManager` and interact with it.

---

## How It Works

The `Playground` is initialized in `MainActivity`. Its constructor registers a callback, `onPluginsReady`, which is executed only when the `PluginManager` has finished loading all enabled plugins.

Inside `onPluginsReady`, two main actions occur:
1.  `runAllDiagnostics()`: This method iterates through known plugins and runs a test for each one.
2.  `setupPluginDemoUI()`: This method injects HTML and JavaScript into the loaded web page to create a floating panel with buttons for testing each plugin's features manually.

---

## Testing Your Plugin

To test a new or existing plugin, you can modify `Playground.java`:

### 1. Run a Diagnostic Check

Add a call to `runPluginDiagnostic` inside the `runAllDiagnostics` method. This safely gets your plugin's instance and executes a simple test.

```java
// Inside runAllDiagnostics() in Playground.java
runPluginDiagnostic("MyCustomPlugin", MyCustomPlugin.class, plugin -> {
    // This code runs only if MyCustomPlugin is found and enabled.
    // Call a method on your plugin to test it.
    plugin.performNativeAction("Diagnostic Test");
});
```

### 2. Add a Demo UI Button

Modify the `setupPluginDemoUI` method to inject a button that triggers your plugin's JavaScript interface.

```java
// Inside setupPluginDemoUI() in Playground.java

// Add your button to the `buttons` array
const buttons = [
    // ... existing buttons
    { text: 'Test My Plugin', action: "window.MyPluginAndroid.performAction('Button Clicked')" }
];

// ... the rest of the method will generate the button
```

By using the `Playground`, you can effectively develop and debug your plugins in an isolated and controlled manner.
```

## `plugins/toast.md`

```markdown
---
title: 'Toast Plugin'
description: 'Displaying native Toast messages from native code or JavaScript.'
icon: 'bread-slice'
---

The `ToastPlugin` is included as a basic example of how the plugin architecture works. It provides a simple way to display native "Toast" messages (short, non-blocking pop-ups).

---

## Features

*   Display toasts from native Java code.
*   Display toasts triggered from JavaScript in the WebView.
*   Configurable default duration (short or long).

---

## Setup & Initialization

The `ToastPlugin.java` class uses a static initializer block to automatically register itself with the `PluginManager`.

During initialization, the plugin:
1.  Stores the `Activity` and `WebView` context.
2.  Reads its configuration (e.g., `defaultDuration`).
3.  Adds a JavaScript interface named `ToastInterface` to the WebView.
4.  After a page loads, it injects a helper JavaScript object, `window.Toast`, which makes calling the native code more convenient.

---

## Usage

### From Native Code

1.  Get the plugin instance from the `PluginManager`.
2.  Call its `showToast` method.

```java
// Example from another class, like Playground.java
Object plugin = SmartWebView.getPluginManager().getPluginInstance("ToastPlugin");
if (plugin instanceof mgks.os.swv.plugins.ToastPlugin toastPlugin) {
    // Show a toast with the default duration
    toastPlugin.showToast("Hello from Native!");

    // Show a toast with a specific duration
    toastPlugin.showToast("This is a long toast", Toast.LENGTH_LONG);
}
```

### From JavaScript

After the page has loaded, you can call the injected `window.Toast` object's methods.

```javascript
// Check if the interface is ready
if (window.Toast) {
  // Show a toast with the default duration
  window.Toast.show("Hello from JavaScript!");

  // Show a toast with a long duration
  window.Toast.showLong("This JavaScript toast stays for longer.");
}
```

This plugin serves as a great starting point for understanding how to create your own custom plugins.
```

## `plugins/admob.md`

```markdown
---
title: 'AdMob Plugin (Premium)'
description: 'Integrating Google AdMob advertisements.'
icon: 'dollar-sign'
---

This premium plugin facilitates the integration of Google AdMob ads (Banner, Interstitial, and Rewarded) into your Smart WebView application.

::: danger
This is a premium plugin and is not included in the open-source project. Its source code is only available to project sponsors.
:::

---

## Setup and Configuration

1.  **Obtain the Plugin:** Acquire the plugin files through a GitHub sponsorship.
2.  **Add to Project:** Place the `AdMobPlugin.java` file in the `app/src/main/java/mgks/os/swv/plugins/` directory.
3.  **AdMob App ID:**
    *   Add your AdMob App ID to `app/src/main/AndroidManifest.xml`:
        ```xml
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="YOUR_ADMOB_APP_ID"/>
        ```
    *   Also, update the `app_id` string in `app/src/main/res/values/ads.xml`.
4.  **Enable Plugin:** Ensure the plugin is enabled in `SmartWebView.java`:
    ```java
    put("AdMobPlugin", true);
    ```
5.  **Configure Ad Units:** In `AdMobPlugin.java`, replace the default test ad unit IDs in the `static` block with your real ad unit IDs for production.
    ```java
    // In AdMobPlugin.java
    static {
        Map<String, Object> config = new HashMap<>();
        // ...
        config.put("bannerAdUnitId", "YOUR_BANNER_ID");
        config.put("interstitialAdUnitId", "YOUR_INTERSTITIAL_ID");
        config.put("rewardedAdUnitId", "YOUR_REWARDED_ID");
        // ...
    }
    ```

---
## Usage

The plugin can be controlled from native code or via a JavaScript interface.

### Displaying Ads from JavaScript

The plugin injects a `window.AdMob` object into your web page.

```javascript
// Show a banner ad at the bottom of the screen
window.AdMob.showBanner();

// Hide the banner ad
window.AdMob.hideBanner();

// Show an interstitial ad (if one is loaded)
window.AdMob.showInterstitial();

// Show a rewarded ad (if one is loaded)
window.AdMob.showRewarded();

// Check if an ad is ready to be shown
if (window.AdMob.isInterstitialReady()) {
  // Safe to call showInterstitial()
}
```

### Callbacks in JavaScript

You can define callback functions in your JavaScript to react to ad events.

```javascript
// Called when a user earns a reward from a rewarded ad
window.AdMob.onUserEarnedReward = function(reward) {
  console.log("User earned reward!", reward.amount, reward.type);
  // Grant the user their reward in the web app
};
```
```

## `plugins/biometric-auth.md`

```markdown
---
title: 'Biometric Auth Plugin (Premium)'
description: 'Securing the app with fingerprint or face unlock.'
icon: 'fingerprint'
---

This premium plugin allows you to add an extra layer of security by requiring biometric authentication (fingerprint, face recognition) before granting access to your app or specific features.

::: danger
This is a premium plugin and is not included in the open-source project. Its source code is only available to project sponsors.
:::

---

## Setup and Configuration

1.  **Obtain the Plugin:** Acquire the plugin files through a GitHub sponsorship.
2.  **Add to Project:** Place the `BiometricPlugin.java` file in the `app/src/main/java/mgks/os/swv/plugins/` directory.
3.  **Enable Plugin:** Ensure the plugin is enabled in `SmartWebView.java`:
    ```java
    put("BiometricPlugin", true);
    ```
4.  **Configure Prompt:** You can optionally modify the text shown in the biometric prompt by editing the `BiometricPrompt.PromptInfo.Builder` settings inside the plugin's `initialize` method.

---
## Usage

The plugin is primarily controlled via a JavaScript interface.

### Triggering Authentication from JavaScript

The plugin injects a `window.Biometric` object into your web page.

```javascript
// Request biometric authentication
window.Biometric.authenticate();
```

### Callbacks in JavaScript

Define callback functions in your JavaScript to handle the result of the authentication attempt.

```javascript
// Called on successful authentication
window.Biometric.onAuthSuccess = function() {
  console.log("Authentication successful!");
  // Unlock feature or proceed with login
};

// Called if there's an error (e.g., no hardware, lock screen not set up)
window.Biometric.onAuthError = function(errorMessage) {
  console.error("Authentication error:", errorMessage);
  // Show an error message to the user
};

// Called when the fingerprint/face is not recognized
window.Biometric.onAuthFailed = function() {
  console.warn("Authentication failed. Please try again.");
  // Optional: Update UI to prompt user to try again
};
```
```

## `plugins/image-compression.md`

```markdown
---
title: 'Image Compression Plugin (Premium)'
description: 'Compressing images before uploading.'
icon: 'file-zipper'
---

This premium plugin provides functionality to compress images selected for upload directly on the device, significantly reducing bandwidth usage and upload times.

::: danger
This is a premium plugin and is not included in the open-source project. Its source code is only available to project sponsors.
:::

---

## Setup and Configuration

1.  **Obtain the Plugin:** Acquire the plugin files through a GitHub sponsorship.
2.  **Add to Project:** Place the `ImageCompressionPlugin.java` file in the `app/src/main/java/mgks/os/swv/plugins/` directory.
3.  **Enable Plugin:** Ensure the plugin is enabled in `SmartWebView.java`:
    ```java
    put("ImageCompressionPlugin", true);
    ```
4.  **Configure Quality:** The default compression quality is `80` (out of 100). You can change this default in the `static` block of the `ImageCompressionPlugin.java` file.
    ```java
    // In ImageCompressionPlugin.java
    static {
        Map<String, Object> config = new HashMap<>();
        config.put("quality", 75); // Change default quality
        PluginManager.registerPlugin(new ImageCompressionPlugin(), config);
    }
    ```

---
## Usage

The plugin is designed to be used from JavaScript, typically after a user has selected an image file for upload and you have its `base64` representation.

### Compressing an Image from JavaScript

The plugin injects a `window.ImageCompressor` object into your web page.

```javascript
// Assume 'originalBase64' is the base64 string of the image you want to compress
// (e.g., from a FileReader result)

if (window.ImageCompressor) {
  // The compress function takes the original base64 string and a callback
  window.ImageCompressor.compress(originalBase64, function(compressedBase64) {
    if (compressedBase64) {
      console.log('Compression successful!');
      console.log('Original size:', originalBase64.length);
      console.log('Compressed size:', compressedBase64.length);
      
      // Now you can upload the 'compressedBase64' string to your server
      uploadImage(compressedBase64);

    } else {
      console.error('Compression failed.');
    }
  });
}
```
This workflow allows you to seamlessly compress images on the client-side before they are transmitted, saving data for both the user and your server.
```

## `plugins/qr-barcode-reader.md`

```markdown
---
title: 'QR/Barcode Reader Plugin (Premium)'
description: 'Scanning QR codes and barcodes using the device camera.'
icon: 'qrcode'
---

This premium plugin integrates native QR code and barcode scanning functionality using the device's camera.

::: danger
This is a premium plugin and is not included in the open-source project. Its source code is only available to project sponsors.
:::

---

## Setup and Configuration

1.  **Obtain the Plugin:** Acquire the plugin files through a GitHub sponsorship.
2.  **Add to Project:** Place the `QRScannerPlugin.java` file in the `app/src/main/java/mgks/os/swv/plugins/` directory.
3.  **Enable Plugin:** Ensure the plugin is enabled in `SmartWebView.java`:
    ```java
    put("QRScannerPlugin", true);
    ```
4.  **Dependencies:** The plugin relies on the `zxing-android-embedded` library. Ensure this dependency is present in your `app/build.gradle` file:
    ```groovy
    implementation 'com.journeyapps:zxing-android-embedded:4.3.0'
    ```
5.  **Camera Permission:** The app already requests the `CAMERA` permission, which this plugin requires.

---
## Usage

The plugin is controlled via a JavaScript interface.

### Starting a Scan from JavaScript

The plugin injects a `window.QRScanner` object into your web page.

```javascript
// Open the camera and start scanning for a code
window.QRScanner.scan();
```

### Callbacks in JavaScript

Define callback functions in your JavaScript to handle the results of the scan.

```javascript
// Called when a code is successfully scanned
window.QRScanner.onScanSuccess = function(contents) {
  console.log('Scanned content:', contents);
  alert('Scanned: ' + contents);
  // Process the scanned data in your web app
};

// Called if the user cancels the scan (e.g., by pressing the back button)
window.QRScanner.onScanCancelled = function() {
  console.log('Scan was cancelled by the user.');
};
```
```

## `contributing.md`

```markdown
---
title: 'Contributing'
description: 'How to contribute to the Smart WebView project.'
icon: 'code-merge'
---

Contributions to Smart WebView are welcome! Whether it's fixing bugs, improving documentation, or adding new features, your help is appreciated.

---

## How to Contribute

1.  **Fork the Repository:**
    Start by forking the main repository on GitHub to your own account.

    ::: card
    [Fork Smart WebView on GitHub](https://github.com/mgks/Android-SmartWebView/fork)
    :::

2.  **Clone Your Fork:**
    Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/Android-SmartWebView.git
    cd Android-SmartWebView
    ```

3.  **Create a Feature Branch:**
    Create a new branch for your changes. Use a descriptive name (e.g., `fix-fcm-token-bug`, `feature-add-file-download-progress`).
    ```bash
    git checkout -b my-new-feature
    ```

4.  **Make Your Changes:**
    Implement your bug fix or feature. Follow the existing code style and conventions.

5.  **Test Your Changes:**
    Ensure your changes work correctly and don't introduce regressions.

6.  **Commit Your Changes:**
    Commit your changes with a clear and concise message.
    ```bash
    git add .
    git commit -m "feat: Describe your new feature"
    # or for bug fixes:
    # git commit -m "fix: Describe the bug and the fix"
    ```

7.  **Push to Your Fork:**
    Push your feature branch to your forked repository.
    ```bash
    git push origin my-new-feature
    ```

8.  **Create a Pull Request (PR):**
    Go to the original Smart WebView repository and create a new Pull Request from your feature branch to the `master` branch.
    *   Provide a clear title and description for your PR.
    *   Reference any related issues (e.g., "Closes #123").

---

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating, you agree to abide by its terms.

---

Thank you for contributing!
```

## `license.md`

```markdown
---
title: 'License'
description: 'Smart WebView is open-source software licensed under the MIT License.'
icon: 'scroll'
---

## MIT License

Copyright (c) 2015 - Present

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

::: card
[View LICENSE File on GitHub](https://github.com/mgks/Android-SmartWebView/blob/master/LICENSE)
:::
::: card
[Read MIT License Definition](https://opensource.org/licenses/MIT)
:::
```