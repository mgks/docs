---
title: 'Google Play Submission Guide'
description: 'Steps and best practices for publishing your app to the Google Play Store.'
icon: 'google-play'
---

Publishing your Smart WebView application to the Google Play Store involves several key steps. This guide provides a checklist to help ensure a smooth submission process.

---

### Step 1: Final Configuration

Before building your app for release, finalize its configuration in `app/src/main/java/mgks/os/swv/SmartWebView.java`.

*   **Disable Debug Mode:** This is the most important step.
    ```java
    public static boolean SWV_DEBUGMODE = false; // Set to false for production!
    ```
*   **Set Production URL:** Ensure `ASWV_APP_URL` points to your live website.
*   **Review Feature Toggles:** Double-check all `ASWP_*` flags to make sure only the features you need are enabled. Disabling unused features reduces the number of permissions your app requests.

---

### Step 2: App Identity and Versioning

Your app's identity is defined in `app/build.gradle`.

*   **Application ID:** Set a unique `applicationId`. This is your app's permanent ID on the Play Store.
    ```groovy
    // app/build.gradle
    defaultConfig {
        applicationId 'com.yourcompany.yourapp' // <-- Change this
        // ...
    }
    ```
*   **Versioning:**
    *   `versionCode`: An integer that must be incremented with every new release you upload.
    *   `versionName`: A public-facing string for your users (e.g., "1.0.1").
    ```groovy
    // app/build.gradle
    defaultConfig {
        // ...
        versionCode 1       // Increment to 2 for the next update
        versionName '1.0' // Change to "1.1", etc. as needed
    }
    ```

---

### Step 3: Build a Release App Bundle

Google Play requires you to upload your app as an **Android App Bundle (AAB)**.

1.  **Generate a Signing Key:** You must sign your app with a cryptographic key. If you don't have one, go to `Build > Generate Signed Bundle / APK...` in Android Studio, select "Android App Bundle", and follow the prompts to create a new "key store".
    ::: callout danger
    **Safeguard your key!** You will lose the ability to publish updates for your app if you lose your signing key. Back it up securely.
    :::
2.  **Build the AAB:** Use the `Build > Generate Signed Bundle / APK...` menu to build the signed AAB file. Android Studio will place it in `app/release/`.

---

### Step 4: Prepare Your Store Listing

In the [Google Play Console](https://play.google.com/console):

*   **Create Your App:** Fill in the initial details like app name and language.
*   **Set Up Store Listing:** Provide a compelling title, short description, and full description.
*   **Upload Graphics:** You will need a high-resolution app icon (512x512) and at least two feature graphic screenshots.

---

### Step 5: Content and Policy Declarations

This is a critical section for WebView-based apps.

*   **Privacy Policy:** You **must** provide a link to a publicly accessible privacy policy. This is non-negotiable, especially if your app uses `ASWP_LOCATION`, `ASWP_CAMUPLOAD`, or `ASWV_GTAG`.
*   **Permissions Declaration:** If your app requests sensitive permissions (like Location), you must explain why your app needs them in the Play Console's "App content" section.
*   **Content Rating:** Complete the content rating questionnaire. Answer honestly to avoid rejection.
*   **Ads:** Declare whether your app contains ads. If you use the AdMob plugin, you must select "Yes".
*   **Webviews and Spam Policy:** In your app's description, highlight the features that Smart WebView adds (e.g., push notifications, native sharing, QR scanning). This shows that your app provides more value than simply wrapping a website, which helps comply with Google's [Minimum Functionality Policy](https://support.google.com/googleplay/android-developer/answer/9898820).

---

### Step 6: Upload and Release

1.  **Upload Your AAB:** In the Play Console, create a new release (e.g., on the "Internal testing" or "Production" track) and upload your signed AAB file.
2.  **Review Pre-launch Reports:** After uploading, Google automatically tests your app on various real devices. Check the "Pre-launch report" for any crashes or layout issues.
3.  **Roll Out:** Once you've filled in all required sections and reviewed the reports, you can submit your app for review.

The first review typically takes longer (a few days), while subsequent updates are often faster.