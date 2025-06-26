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
    ::: callout tip
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


Your Smart WebView app should now build and launch! If you encounter issues, double-check the `google-services.json` file placement and ensure the build process completed without errors.