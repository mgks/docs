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