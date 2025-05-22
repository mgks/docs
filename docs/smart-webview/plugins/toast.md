---
title: 'Toast Test'
description: 'Displaying native Toast messages from native code or JavaScript.'
icon: 'bread-slice'
---

This plugin provides a simple way to display native platform "Toast" messages (short, non-blocking pop-up messages common on Android) or similar feedback mechanisms.

## Features

*   Display toasts from native code.
*   Display toasts triggered from JavaScript running in the WebView.
*   Configurable default duration (Short/Long).

## Setup & Initialization

<Tabs>
 <Tab title="Android">
    The `ToastPlugin.java` class uses a static initializer block to automatically register itself with the `PluginManager` when the class is loaded. No manual registration is typically required.

    Its default configuration (`defaultDuration`) can be overridden in `Playground.java`:
    <CodeBlock language="java" title="Playground.java (initializePluginDefaults)">
    Map<String, Object> toastConfig = new HashMap<>();
    // Override default: Toast.LENGTH_LONG or Toast.LENGTH_SHORT
    toastConfig.put("defaultDuration", Toast.LENGTH_LONG);
    savePluginConfig("ToastPlugin", toastConfig);
    </CodeBlock>

    During initialization (`initialize` method), the plugin:
    1. Stores the `Activity` context.
    2. Reads the `defaultDuration` from the provided configuration.
    3. Adds a JavaScript interface named `ToastInterface` to the WebView, allowing web content to call native toast methods.
    4. In `onPageFinished`, it injects helper JavaScript (`window.Toast.show`, `window.Toast.showLong`) that uses the `ToastInterface`.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS doesn't have native Toasts. An iOS version of this plugin would need to implement a similar feedback mechanism (e.g., a temporary banner view, a HUD). Setup would involve registering the plugin and potentially configuring the appearance/duration of the feedback UI. -->
    ```
 </Tab>
</Tabs>

## Usage

### From Native Code

<Tabs>
 <Tab title="Android">
    1.  Get the plugin instance from the `PluginManager`.
    2.  Call the `showToast` methods.

    <CodeBlock language="java" title="Example (e.g., in Playground or another class)">
    Object plugin = SmartWebView.getPluginManager().getPluginInstance("ToastPlugin");
    if (plugin instanceof mgks.os.swv.plugins.ToastPlugin toastPlugin) {
        // Show toast with default duration (set via config)
        toastPlugin.showToast("Hello from Native!");

        // Show toast with specific duration
        toastPlugin.showToast("This is a long toast", Toast.LENGTH_LONG);
    }
    </CodeBlock>
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Get the plugin instance and call the equivalent Swift methods defined in the iOS plugin (e.g., `toastPlugin.showFeedback("Message")`). -->
    ```
 </Tab>
</Tabs>

### From JavaScript

<Tabs>
 <Tab title="Android">
    After the page finishes loading (`onPageFinished`), the plugin injects a `window.Toast` object. You can call its methods directly from your web page's JavaScript.

    <CodeBlock language="javascript" title="Web Page JavaScript">
    // Ensure the interface is ready (optional check)
    if (window.Toast) {
      // Show toast with default duration
      window.Toast.show("Hello from JavaScript!");

      // Show toast with long duration
      window.Toast.showLong("This JavaScript toast stays longer.");
    } else {
      console.log("Toast interface not available yet.");
    }

    // Alternatively, call the raw interface directly (if needed)
    if (window.ToastInterface) {
        window.ToastInterface.showToast("Direct interface call");
    }
    </CodeBlock>
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- If the iOS plugin uses a JavaScript interface (e.g., via WKScriptMessageHandler named 'toastHandler'), the JS call might look like:
    window.webkit.messageHandlers.toastHandler.postMessage({ text: "Hello from JS (iOS)", duration: "long" });
    The injected helper JS (`window.Toast`) would abstract this. -->
    ```
 </Tab>
</Tabs>

This plugin provides a basic but useful way to give quick feedback to the user, bridging native UI elements with web content interactions.