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

::: callout danger
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

Place files in `app/src/main/assets/web/` to bundle them with your app. Access them in the WebView using the path `file:///android_asset/web/YOUR_FILENAME`. The project includes:
- `error.html`
- `offline.html`
- `script.js`
- `style.css`

The root `assets` directory contains the main `swv.properties` configuration file.

---

## Text Strings

Centralize user-facing text for easy modification and localization in `app/src/main/res/values/strings.xml`. To add translations, create new resource folders like `values-es/strings.xml`.

---

## Android Manifest

The core application configuration file is `app/src/main/AndroidManifest.xml`.

::: callout warning
Modify this file with care. It is used for declaring permissions, registering activities/services, defining intent filters for deep linking, and specifying hardware features.
:::