---
title: 'Inbound Object Sharing'
description: 'Receiving text, links, and images shared from other apps.'
icon: 'share'
---

Smart WebView can register as a target for the native sharing functionality, allowing users to share content (like URLs, text, images) directly *to* your application from other apps.

---

## Enabling Sharing

**Configuration:**

<Tabs>
 <Tab title="Android">
    Sharing is enabled via the `ShareActivity` declaration and its `<intent-filter>` elements in `AndroidManifest.xml`. These filters specify the MIME types the app can receive (`text/*`, `image/*`).
    ```xml
    <!-- Share Activity -->
    <activity android:name=".ShareActivity"
        android:exported="true">
        <!-- Handles sharing plain text and links -->
        <intent-filter android:label="Share">
            <action android:name="android.intent.action.SEND" />
            <category android:name="android.intent.category.DEFAULT" />
            <data android:mimeType="text/*" />
        </intent-filter>
        <!-- Handles sharing single/multiple images -->
        <intent-filter android:label="Share Image">
            <action android:name="android.intent.action.SEND" />
            <category android:name="android.intent.category.DEFAULT" />
            <data android:mimeType="image/*" />
        </intent-filter>
        <intent-filter android:label="Share Multiple Images">
            <action android:name="android.intent.action.SEND_MULTIPLE" />
            <category android:name="android.intent.category.DEFAULT" />
            <data android:mimeType="image/*" />
        </intent-filter>
    </activity>
    ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS sharing is enabled by declaring supported document types (UTIs) and/or URL schemes the app can handle in the `Info.plist` file (e.g., using `CFBundleDocumentTypes`, `UTExportedTypeDeclarations`, `UTImportedTypeDeclarations`). A Share Extension might also be used for more complex processing. Details here. -->
    ```
 </Tab>
</Tabs>

---

## Configuring the Target URL

Specify a URL endpoint within your web application where shared content should be processed.

<Tabs>
 <Tab title="Android">
    Configure `ASWV_SHARE_URL` in `SmartWebView.java`.
    ```java
        // URL where shared content is processed.
        // Defaults to ASWV_URL with "?share=" appended.
        static String ASWV_SHARE_URL = ASWV_URL + "?share=";
    ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS typically handles shared data within the `AppDelegate` (e.g., `application(_:open:options:)`) or a dedicated SceneDelegate. The app would then construct the appropriate URL to load in the WKWebView based on the received data. A configurable target URL might be stored elsewhere. Details here. -->
    ```
 </Tab>
</Tabs>

---

## How it Works

<Tabs>
 <Tab title="Android">
    1.  User shares content and selects your app.
    2.  Android launches `ShareActivity` based on the intent filter.
    3.  `ShareActivity` extracts data (`Intent.EXTRA_TEXT`, `Intent.EXTRA_STREAM`).
    4.  For text/links, it constructs a target URL using `ASWV_SHARE_URL` with `text` and `link` query parameters.
    5.  For images, the current implementation passes the URI as `s_img` (needs enhancement for practical use).
    6.  `ShareActivity` starts `MainActivity`, passing the target URL (`s_uri`) or image info (`s_img`).
    7.  `MainActivity` detects these extras in `onCreate` and loads the appropriate URL (or default URL for images currently).
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- 1. User shares content and selects your app.
         2. iOS launches the app and calls specific delegate methods (e.g., `application(_:open:options:)`) with the shared data (URL, file provider item).
         3. The delegate method processes the incoming data.
         4. It constructs a URL relevant to the shared content.
         5. It instructs the main view controller (containing the WKWebView) to load this URL.
         Details here. -->
    ```
 </Tab>
</Tabs>

**Processing on Your Website:**

Your web application backend (at the target URL endpoint) needs to handle the incoming query parameters (e.g., `text`, `link`) or process data passed via other means (like image uploads triggered after sharing) to display or save the shared content appropriately.

---

## Disabling Sharing

<Tabs>
 <Tab title="Android">
    Remove or comment out the entire `<activity android:name=".ShareActivity">...</activity>` block from `AndroidManifest.xml`.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Remove the relevant document type declarations (`CFBundleDocumentTypes`, etc.) from `Info.plist`. If using a Share Extension, remove that target. -->
    ```
 </Tab>
</Tabs>