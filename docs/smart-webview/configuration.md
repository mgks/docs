---
title: 'Configuration'
description: 'Configuring your Smart WebView app using the swv.properties file.'
icon: 'sliders'
---

All core behaviors and feature toggles in Smart WebView are controlled from a single configuration file: `app/src/main/assets/swv.properties`. This allows you to customize your app without touching any Java or Gradle code.

---

## How to Configure

1.  Open your project in Android Studio.
2.  Navigate to the `app/src/main/assets/` directory.
3.  Open the `swv.properties` file and modify the values as needed.
4.  Rebuild your project (`Build > Rebuild Project`) for the changes to take effect.

---

## Key Configuration Properties

### App & URLs
Define the web addresses your application will load.
```bash
# The main URL your app will load.
app.url=https://mgks.github.io/Android-SmartWebView/

# The local HTML file to show when the app is offline.
offline.url=file:///android_asset/web/offline.html

# The base URL for the search feature (used in Drawer Layout).
search.url=https://www.google.com/search?q=
```

### Feature Toggles
Enable or disable specific native features with `true` or `false`.
```bash
# Enable file uploads from a web form (<input type="file">).
feature.uploads=true

# Enable the pull-to-refresh gesture.
feature.pull.refresh=true

# Show a confirmation dialog before exiting the app.
feature.exit.dialog=true

# Open external links in a Chrome Custom Tab or external browser.
feature.open.external.urls=true
```

### UI & Layout
Control screen orientation and the main navigation structure.
```bash
# Set the default device orientation. 0=Unspecified, 1=Portrait, 2=Landscape
ui.orientation=0

# Set the main app layout. 0=Fullscreen, 1=Drawer Layout
ui.layout=1

# Show/hide the toolbar when using the Drawer Layout.
ui.drawer.header=true

# Extend the splash screen until the first page is fully rendered.
ui.splash.extend=true
```

### Plugins
Control which plugins are active and enable the testing UI.
```bash
# Comma-separated list of plugins to enable. Case-sensitive.
plugins.enabled=AdMobPlugin,JSInterfacePlugin,ToastPlugin,QRScannerPlugin,BiometricPlugin,ImageCompressionPlugin

# Enable the Playground floating UI for testing plugins. Set to false for production.
plugins.playground.enabled=true
```

### Permissions
Define which groups of permissions to request when the app starts.
```bash
# Comma-separated list of permission groups to request on launch.
# Available groups: LOCATION, NOTIFICATIONS, STORAGE
permissions.on.launch=NOTIFICATIONS,LOCATION
```

### Analytics & Ads
Configure IDs for external services.
```bash
# Your Google Analytics Measurement ID (e.g., G-XXXXXXXXXX).
analytics.gtag.id=G-7XXC1C7CRQ

# Your AdMob Application ID. Also needs to be set in AndroidManifest.xml.
# This value in swv.properties is for reference and future use.
admob.app.id=ca-app-pub-3940256099942544~3347511713
```