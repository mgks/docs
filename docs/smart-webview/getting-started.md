---
title: 'Getting Started'
description: 'Setting up the Smart WebView project.'
icon: 'rocket'
---

Follow these steps to get your Smart WebView project up and running, currently focused on the Android platform.

## Prerequisites

<Tabs>
    <Tab title="Android">
        *   **Android Studio:** The official IDE for Android development. Download from the [Android Developers site](https://developer.android.com/studio).
        *   **Android SDK:** Minimum API Level 23 (Android 6.0 Marshmallow) or higher installed via the Android Studio SDK Manager.
    </Tab>
    <Tab title="iOS">
        *  iOS prerequisites (e.g., Xcode, CocoaPods) will be added here.
    </Tab>
</Tabs>

## Setup

<Steps>

<Step title="Download Project Files">

    This step is platform-agnostic. You have two options:
    *   **(Recommended)** Download the latest stable Source code asset (`.zip` or `.tar.gz`) from the [GitHub Releases](https://github.com/mgks/Android-SmartWebView/releases) page.
    *   Clone the repository (might include untested changes):
    ```bash
        git clone https://github.com/mgks/Android-SmartWebView.git
    ```

</Step>

<Step title="Add Firebase Configuration (Important)">

    If you plan to use Firebase Cloud Messaging (Push Notifications), you need to add your Firebase project's platform-specific configuration file.

    <Tabs>
        <Tab title="Android">
            1.  Go to your [Firebase Console](https://console.firebase.google.com/).
            2.  Create a new project or select an existing one.
            3.  Add an **Android app** to your project, following the on-screen instructions. Use `mgks.os.swv` as the package name during setup *unless* you plan to change it later.
            4.  Download the `google-services.json` file provided during the setup.
            5.  Place this downloaded `google-services.json` file directly into the `app/` directory of your Smart WebView project structure.
                ```bash
                Android-SmartWebView/
                ├── app/
                │   ├── google-services.json  <-- Place it here
                │   ├── src/
                │   └── ...
                └── ...
                ```
                <Info>
                This step is crucial for Firebase features to work on Android. See the [Firebase Messaging](/smart-webview/features/firebase-messaging) guide for more details.
                </Info>
        </Tab>
        <Tab title="iOS">
            1. In the Firebase Console, add an **iOS app** to your project.
            2. Download the `GoogleService-Info.plist` file.
            3. Place this file in the appropriate location within your Xcode project structure.
            4. More detailed iOS instructions will be added here.
        </Tab>
    </Tabs>

</Step>

<Step title="Load Project in IDE">

    <Tabs>
    <Tab title="Android">
        1.  Open Android Studio.
        2.  Select `File > Open...`.
        3.  Navigate to the directory where you downloaded or cloned the Smart WebView project and select the root folder.
        4.  Click `Open`.
    </Tab>
    <Tab title="iOS">
        1.  Instructions for opening the project in Xcode will be added here.
    </Tab>
    </Tabs>

</Step>

<Step title="Sync and Build Project">

    <Tabs>
    <Tab title="Android">
        1.  Allow Android Studio to index the files and download all necessary Gradle dependencies and libraries. This might take a few minutes.
        2.  Once the initial sync is complete, it's good practice to clean and rebuild the project:
            *   Go to `Build > Clean Project`.
            *   Then go to `Build > Rebuild Project`.
    </Tab>
    <Tab title="iOS">
        1.  Instructions for syncing dependencies (e.g., CocoaPods) and building in Xcode will be added here.
    </Tab>
    </Tabs>

</Step>

<Step title="Run the App">

    <Tabs>
    <Tab title="Android">
        1.  Connect an Android device or start an emulator.
        2.  Select your device/emulator from the target dropdown menu in Android Studio.
        3.  Click the `Run 'app'` button (green play icon) or use the shortcut `Shift + F10`.
    </Tab>
    <Tab title="iOS">
        1.  Instructions for running the app on an iOS device or simulator via Xcode will be added here.
    </Tab>
    </Tabs>

</Step>

</Steps>

Your Smart WebView app should now build and launch on the target platform! If you encounter issues, double-check the configuration file placement (`google-services.json` for Android) and ensure the build/sync process completed without errors.