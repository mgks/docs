---
title: 'Plugin Architecture'
description: 'Understanding the Smart WebView plugin system (v7.0+).'
icon: 'puzzle'
---

Starting with version 7.0, Smart WebView introduces a powerful plugin architecture, transforming it into a more extensible foundation for building hybrid applications. This allows developers to add or modify native functionalities without altering the core project code.

## Core Concepts

*   **Self-Contained:** Plugins are designed as independent modules.
*   **Self-Registration:** Plugins typically register themselves with the `PluginManager` (or equivalent) when their class is loaded.
*   **Standardized Interface:** Plugins implement a common interface (e.g., `PluginInterface` on Android) defining essential lifecycle methods and interaction points.
*   **Central Management:** A manager class (e.g., `PluginManager`) handles plugin registration, initialization, lifecycle event routing (like `onActivityResult`, `onRequestPermissionsResult`, `onDestroy`), and provides controlled access to shared application contexts (`Activity`, `WebView`, `Functions`).
*   **Configuration:** Plugin behavior can often be configured externally, for instance, through the [Playground](/smart-webview/plugins/playground) class, without needing to modify the plugin's source code.
*   **Event Handling:** Plugins can react to WebView events (`shouldOverrideUrlLoading`, `onPageStarted`, `onPageFinished`) and native lifecycle events passed through the `PluginManager`.
*   **Communication:** Plugins can interact with web content via JavaScript Interfaces or by handling custom URL schemes.

## Benefits

*   **Modularity:** Keeps custom features separate, improving maintainability.
*   **Extensibility:** Easily add new native capabilities.
*   **Reusability:** Potential for sharing plugins across projects.
*   **Simplified Updates:** Easier core project updates when custom code is isolated.

## Key Components

<Tabs>
 <Tab title="Android">
    *   **`PluginInterface.java`:** The Java interface defining the contract for all Android plugins. Key methods include `initialize`, `getPluginName`, `onActivityResult`, `onRequestPermissionsResult`, `shouldOverrideUrlLoading`, `onPageStarted`, `onPageFinished`, `onDestroy`, `evaluateJavascript`.
    *   **`PluginManager.java`:** The central Android class for managing plugins. It's responsible for registration, initialization (passing context and configuration), and dispatching events. Accessed via `SmartWebView.getPluginManager()`.
    *   **`Playground.java`:** A helper class for configuring plugin defaults and facilitating testing during development. See the [Playground](/smart-webview/plugins/playground) documentation.
    *   **`plugins/` directory:** The conventional location for Android plugin source files (e.g., `ToastPlugin.java`).
    *   **Static Initializer Block:** The common pattern for self-registration within an Android plugin class.
        ```java
        // Inside YourPlugin.java
        static {
            Map<String, Object> defaultConfig = new HashMap<>();
            // Add any default config values the plugin requires
            PluginManager.registerPlugin(new YourPlugin(), defaultConfig);
        }
        ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Details on the iOS plugin architecture will be added here. Key components might include:
    *   A Swift `PluginInterface` protocol.
    *   A `PluginManager` class (Swift).
    *   An equivalent 'Playground' class for configuration/testing.
    *   A convention for organizing plugin files.
    *   A registration mechanism. -->
    ```
 </Tab>
</Tabs>

Ready to build your own? Check out the [Creating Plugins](/smart-webview/plugins/creating-plugins) guide. Explore the individual plugin pages for details on specific functionalities.