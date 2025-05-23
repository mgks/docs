---
title: 'Customization'
description: 'Tailoring the appearance and resources of your Smart WebView app.'
icon: 'palette'
---

Smart WebView is designed to be easily customizable. You can modify various aspects of the app, from visual styles to text strings and assets built upon the core **project**.

---

## App Name and Bundle ID

<Tabs>
 <Tab title="Android">
    *   **App Name:** Change the `app_name` string value in `app/src/main/res/values/strings.xml`.
    *   **Package ID:** Right-click on `mgks.os.swv` in the `java` directory (Project view), select `Refactor > Rename`, choose "Rename package", enter your ID (e.g., `com.yourcompany.yourapp`), and let Android Studio refactor. Also update `applicationId` in `app/build.gradle` if necessary.
        <Warning>Changing the Package ID after release complicates app updates on Google Play.</Warning>
 </Tab>
 <Tab title="iOS">
    *   **App Name (Display Name):** Modify the `Bundle display name` (`CFBundleDisplayName`) key in your `Info.plist` file.
    *   **Bundle ID:** Modify the `Bundle identifier` (`CFBundleIdentifier`) key in `Info.plist` and also update it in your Xcode project's target settings (General > Identity).
        <Warning>Changing the Bundle ID after release complicates app updates on the App Store.</Warning>
 </Tab>
</Tabs>

---

## Launcher Icons

<Tabs>
 <Tab title="Android">
    Replace icons in `app/src/main/res/mipmap-*` directories. Use Android Studio's "Image Asset Studio" (Right-click `res` > `New` > `Image Asset`) for adaptive icons.
 </Tab>
 <Tab title="iOS">
    Manage app icons within your Xcode project's `Assets.xcassets` file. Add an "AppIcon" set and provide the necessary sizes.
 </Tab>
</Tabs>

---

## UI Appearance

<Tabs>
 <Tab title="Android">
    *   **Colors:** Define your palette in `app/src/main/res/values/colors.xml`.
    *   **Themes:** Modify app themes in `app/src/main/res/values/styles.xml` and `app/src/main/res/values/themes.xml`.
    *   **Splash Screen Background:** Customize in `app/src/main/res/drawable/background_splash.xml` and the `SplashTheme` in `themes.xml`.
 </Tab>
 <Tab title="iOS">
    *   **Colors:** Define colors in `Assets.xcassets` or programmatically.
    *   **Appearance:** Customize UI element appearance using Storyboards, XIBs, SwiftUI modifiers, or Appearance Proxies (`UINavigationBar.appearance()`, etc.).
    *   **Launch Screen:** Use a Launch Screen storyboard (`LaunchScreen.storyboard`) or configure it in `Info.plist`.
 </Tab>
</Tabs>

---

## Layouts / Views

<Tabs>
 <Tab title="Android">
    Modify XML layout files in `app/src/main/res/layout/` (e.g., `activity_main.xml`, `drawer_main.xml`).
 </Tab>
 <Tab title="iOS">
    Modify views using Storyboards, XIB files, or construct the UI programmatically using UIKit or SwiftUI code.
 </Tab>
</Tabs>

---

## Navigation Drawer (Android Specific Feature)

The drawer layout (`ASWV_LAYOUT = 1`) is an Android-specific implementation using `DrawerLayout`.

<Tabs>
 <Tab title="Android">
    *   **Menu Items:** Define items in `app/src/main/res/menu/activity_main_drawer.xml`.
    *   **Header:** Customize in `app/src/main/res/layout/drawer_main_header.xml`.
    *   **Item Click Handling:** Modify `onNavigationItemSelected` in `Functions.java`.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS does not use DrawerLayout. Equivalent navigation patterns (e.g., side menus, tab bars, split views) would be implemented using different frameworks/techniques. Details will be added here if an iOS version is developed. -->
    ```
 </Tab>
</Tabs>

---

## Local Assets

Bundled files accessible by the WebView.

<Tabs>
 <Tab title="Android">
    Place files in `app/src/main/assets/`. Access them in the WebView using the path `file:///android_asset/YOUR_FILENAME`.
    - error.html
    - front_splash.png
    - offline.html
    - script.js
    - sponsor.png
    - style.css

 </Tab>
 <Tab title="iOS">
    Place files within the Xcode project structure (ensure they are added to the target's "Copy Bundle Resources" build phase). Access them using `WKWebView`'s `loadFileURL(_:allowingReadAccessTo:)` method, referencing the file's URL within the app bundle. The base URL structure differs from Android.
 </Tab>
</Tabs>

---

## Text Strings

Centralize user-facing text for easy modification and localization.

<Tabs>
 <Tab title="Android">
    Use `app/src/main/res/values/strings.xml`. Add translations in `values-es/strings.xml`, etc.
 </Tab>
 <Tab title="iOS">
    Use `Localizable.strings` files. Create separate files for different languages (e.g., `en.lproj/Localizable.strings`, `es.lproj/Localizable.strings`). Access strings using `NSLocalizedString("key", comment: "")`.
 </Tab>
</Tabs>

---

## Manifest / Info.plist

Core application configuration file.

<Tabs>
 <Tab title="Android">
    Located at `app/src/main/AndroidManifest.xml`.
    <Warning>Modify this file with care.</Warning>
    Used for: Permissions declaration, Activities/Services registration, Intent Filters (Deep Linking), Hardware features, etc.
 </Tab>
 <Tab title="iOS">
    Typically named `Info.plist`.
    <Warning>Modify this file with care.</Warning>
    Used for: Permissions usage descriptions (required!), Bundle ID, Display Name, Supported Orientations, URL Schemes (Deep Linking), Background Modes, etc.
 </Tab>
</Tabs>

---

By leveraging these customization points, you can tailor the Smart WebView **foundation** for your target platforms.