---
title: 'Configuration'
description: 'Configuring your Smart WebView app using the swv.properties file.'
icon: 'sliders'
---

All core behaviors and feature toggles in Smart WebView are controlled from a single configuration file: `app/src/main/assets/swv.properties`. Modify the values in this file to configure your app, then rebuild your project in Android Studio.

---

## Key Configuration Properties

### Debug Mode (`debug.mode`)
Enable verbose logging for development.
```bash
# Enable verbose logging and error toasts. MUST be false for production.
debug.mode=true
```

### URLs (`app.url`, etc.)
Define the web addresses your application will load.
```bash
# The main URL your app will load.
app.url=https://mgks.github.io/Android-SmartWebView/

# The local HTML file to show when the app is offline.
offline.url=file:///android_asset/web/offline.html

# The base URL for the search feature (used in Drawer Layout).
search.url=https://www.google.com/search?q=
```

### Feature Toggles (`feature.*`)
Enable or disable specific native features with `true` or `false`.
```bash
# Enable file uploads from a web form (<input type="file">).
feature.uploads=true

# Enable GPS location access.
feature.location=true

# Enable the pull-to-refresh gesture.
feature.pull.refresh=true

# Show a confirmation dialog before exiting the app.
feature.exit.dialog=true
```

### UI & Layout (`ui.*`)
Control screen orientation and the main navigation structure.
```bash
# Set the default device orientation. 0=Unspecified, 1=Portrait, 2=Landscape
ui.orientation=0

# Set the main app layout. 0=Fullscreen, 1=Drawer Layout
ui.layout=1
```

### AdMob (`admob.app.id`)
Set your AdMob Application ID. This is required if the AdMob plugin is enabled.
```bash
# Your AdMob Application ID from your AdMob account.
admob.app.id=ca-app-pub-1566476371455791~9278784170
```

### Plugins (`plugins.*`)
Control which plugins are active and enable the testing UI.
```bash
# Comma-separated list of plugins to enable.
plugins.enabled=AdMobPlugin,JSInterfacePlugin,ToastPlugin,QRScannerPlugin,BiometricPlugin,ImageCompressionPlugin

# Enable the Playground floating UI for testing plugins. Set to false for production.
plugins.playground.enabled=true
```

### Permissions (`permissions.on.launch`)
Define which groups of permissions to request when the app starts. The order is respected.
```bash
# Available groups: LOCATION, NOTIFICATIONS, STORAGE
permissions.on.launch=NOTIFICATIONS,LOCATION
```