---
title: 'Playground'
description: 'Configuring and testing plugins using Playground.java.'
icon: 'flask'
---

The `Playground` class is a dedicated component within the Smart WebView Android project designed to facilitate plugin development and testing. It acts as a sandbox and configuration point, allowing developers to initialize, configure, and experiment with plugins without modifying the core Smart WebView code or the plugin source itself.

<Info>
The `Playground` class is part of the open-source Smart WebView foundation. Specific plugins you test or configure using it might have their own licensing terms.
</Info>

## Purpose

*   **Centralized Configuration:** Provides a single place (`initializePluginDefaults`) to define default configurations for various plugins your app might use.
*   **Development Testing:** Allows developers to easily trigger plugin actions, run diagnostic checks (`runPluginDiagnostics`), and inject test UIs (`setupPluginDemoUI`) during the development cycle.
*   **Initialization Hook:** Uses the `SmartWebView.onPluginsInitialized` callback to ensure plugin tests and interactions happen only *after* the core plugin system is ready.
*   **Example Interaction Point:** Demonstrates how native application code can obtain plugin instances and call their methods.

## Initialization & Setup

<Tabs>
 <Tab title="Android">
    Typically, you initialize `Playground` in your `MainActivity`'s `onCreate` method, after the `WebView` and `Functions` instances are available.

    ```java MainActivity.java (onCreate Excerpt)
    // ... inside onCreate ...
    SmartWebView.asw_view = findViewById(R.id.msw_view); // Ensure WebView is found
    // ... other setup ...

    // Initialize Playground, passing essential contexts
    Playground playground = new Playground(this, SmartWebView.asw_view, fns);

    // ... rest of onCreate ...
    ```

    The `Playground` constructor handles:
    1. Storing necessary contexts (`Activity`, `WebView`, `Functions`).
    2. Setting up default configurations via `initializePluginDefaults()`.
    3. Registering `initializePlugins()` to run *after* the `PluginManager` signals readiness.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- An equivalent iOS setup would involve initializing a similar 'Playground' class (Swift) within the AppDelegate or primary ViewController, passing necessary contexts like the WKWebView instance. -->
    ```
 </Tab>
</Tabs>

## Configuring Plugins via Playground

<Tabs>
 <Tab title="Android">
    The `initializePluginDefaults()` method is the primary place to set default configurations for any plugins your application uses. You provide a `Map<String, Object>` containing configuration key-value pairs for each plugin.

    ```java Playground.java - initializePluginDefaults() (Example)
    private void initializePluginDefaults() {
        // Example: Configuration for a hypothetical "AnalyticsPlugin"
        Map<String, Object> analyticsConfig = new HashMap<>();
        analyticsConfig.put("trackingId", "UA-XXXXX-Y");
        analyticsConfig.put("enableAutoPageViews", true);
        analyticsConfig.put("debugMode", false); // Default to production mode
        // The 'savePluginConfig' is an internal Playground method,
        // you might adapt it to store config persistently (e.g., SharedPreferences)
        savePluginConfig("AnalyticsPlugin", analyticsConfig);

        // Example: Configuration for "MyCustomPlugin"
        Map<String, Object> customConfig = new HashMap<>();
        customConfig.put("apiKey", "YOUR_DEFAULT_API_KEY");
        customConfig.put("featureFlagX", true);
        savePluginConfig("MyCustomPlugin", customConfig);

        // Add configurations for other plugins (like ToastPlugin) here...
        Map<String, Object> toastConfig = new HashMap<>();
        toastConfig.put("defaultDuration", Toast.LENGTH_SHORT);
        savePluginConfig("ToastPlugin", toastConfig);
    }

    // Placeholder for saving config (currently logs)
    private void savePluginConfig(String pluginName, Map<String, Object> config) {
        Log.d(TAG, "Default config set for " + pluginName + ": " + config);
        // In a real app, you might store this persistently
        // and have PluginManager pass it during initialization.
    }
    ```

    Plugins receive their configuration map during their `initialize` method. Developers can also add methods like `updatePluginConfig` or `configurePluginForProduction` within `Playground` to change settings dynamically or based on build types.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS plugin configuration could be managed similarly, perhaps loading defaults from a `Config.plist` file or setting them programmatically in the equivalent Playground class. -->
    ```
 </Tab>
</Tabs>

## Testing Plugins with Playground

<Tabs>
 <Tab title="Android">
    `Playground` provides hooks for testing:
    *   **Diagnostics (`runPluginDiagnostics`):** Called after initialization. You can add checks here to verify if expected plugins are loaded and perform simple actions.
        ```java
        // Inside runPluginDiagnostics()
        private void checkMyCustomPlugin() {
            try {
                Object plugin = SmartWebView.getPluginManager().getPluginInstance("MyCustomPlugin");
                if (plugin instanceof MyCustomPlugin customPlugin) {
                    // Perform a simple action to verify it's working
                    boolean status = customPlugin.checkStatus();
                    Log.d(TAG, "MyCustomPlugin available, status: " + status);
                } else {
                    Log.i(TAG, "MyCustomPlugin not available.");
                }
            } catch (Exception e) {
                Log.e(TAG, "Error checking MyCustomPlugin: " + e.getMessage());
            }
        }
        ```
    *   **Demo UI (`setupPluginDemoUI`):** Injects JavaScript into the WebView to create interactive elements (buttons, etc.) that trigger plugin functions via their JavaScript interfaces or URL schemes. This allows manual testing directly within the web view during development.
        ```javascript
        // Example JS injected by setupPluginDemoUI()
        function createDemoUI() {
          // ... create container div ...
          const button = document.createElement('button');
          button.innerText = 'Test My Feature';
          // Assumes MyCustomPlugin exposes a JS interface 'MyPluginInterface'
          button.onclick = function() { window.MyPluginInterface.doSomething('test data'); };
          container.appendChild(button);
          // ... append container to body ...
        }
        // ... ensure UI is created after page load ...
        ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Similar diagnostic checks and JavaScript injection for a demo UI can be implemented in the iOS equivalent of Playground. -->
    ```
 </Tab>
</Tabs>

By using `Playground` effectively, developers can streamline the process of integrating, configuring, and testing plugins within their Smart WebView application.