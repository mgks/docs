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

### 1. Download Project Files
You have two options:
*   **(Recommended)** Download the latest stable Source code asset (`.zip` or `.tar.gz`) from the [GitHub Releases](https://github.com/mgks/Android-SmartWebView/releases) page.
*   Clone the repository (might include untested changes):
    ```bash
    git clone https://github.com/mgks/Android-SmartWebView.git
    ```

### Step 2: Configure Your App
All major configuration is now done in a single file.

1.  Open the project in your file explorer or IDE.
2.  Navigate to `app/src/main/assets/` and open the `swv.properties` file.
3.  Edit the values like `app.url`, `analytics.gtag.id`, and `admob.app.id` to match your project's requirements.

::: callout tip
See the **[Configuration Guide](/smart-webview/configuration)** for a detailed explanation of all available options in `swv.properties`.
:::

### Step 3: Add Firebase Configuration (Important)
If you plan to use Firebase Cloud Messaging (Push Notifications), you still need your project's `google-services.json` file.

1.  Go to your [Firebase Console](https://console.firebase.google.com/) and follow the steps to add an Android app.
2.  Download the `google-services.json` file.
3.  Place this file directly into the `app/` directory of your Smart WebView project.
    ```bash
    Android-SmartWebView/
    ├── app/
    │   ├── google-services.json  <-- Place it here
    │   ├── src/
    │   └── ...
    └── ...
    ```
::: callout tip
This step is crucial for Firebase features to work. See the [Firebase Messaging](/smart-webview/features/firebase-messaging) guide for more details.
:::

### Step 4: Load and Build in Android Studio
1.  Open the project folder in Android Studio.
2.  Allow Gradle to sync and download all dependencies.
3.  Click the `Run 'app'` button to build and launch the app on an emulator or a connected device.

Your Smart WebView app should now build and launch! If you encounter issues, double-check the `google-services.json` file placement and ensure the build process completed without errors.