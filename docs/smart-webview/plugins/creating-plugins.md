---
title: 'Creating Plugins'
description: 'Guide to building your own custom plugins for Smart WebView.'
icon: 'plug'
---

The Smart WebView plugin architecture allows you to extend the application's native capabilities. Follow these steps to create your own custom plugin.

## 1. Create the Plugin Class

<Tabs>
 <Tab title="Android">
    1.  Create a new Java class file within the `app/src/main/java/mgks/os/swv/plugins/` directory (or your preferred package structure).
    2.  Make your class implement the `PluginInterface`.

    ```java plugins/MyCustomPlugin.java
    package mgks.os.swv.plugins;

    import android.app.Activity;
    import android.content.Intent;
    import android.util.Log;
    import android.webkit.WebView;
    import androidx.annotation.NonNull;

    import java.util.HashMap;
    import java.util.Map;

    import mgks.os.swv.Functions;
    import mgks.os.swv.PluginInterface;
    import mgks.os.swv.PluginManager;

    public class MyCustomPlugin implements PluginInterface {

        private static final String TAG = "MyCustomPlugin";
        private Activity activity;
        private WebView webView;
        private Functions functions;
        private Map<String, Object> config;

        // --- Plugin Implementation Starts Here ---

        @Override
        public String getPluginName() {
            return "MyCustomPlugin"; // Unique name for your plugin
        }

        @Override
        public void initialize(Activity activity, WebView webView, Functions functions, Map<String, Object> config) {
            this.activity = activity;
            this.webView = webView;
            this.functions = functions;
            this.config = config; // Store config received from Playground/Manager

            Log.d(TAG, getPluginName() + " initialized with config: " + config);

            // Perform any setup needed, e.g., initialize SDKs, register listeners
            // Access config values:
            // String apiKey = (String) config.getOrDefault("apiKey", "default_value");
        }

        // Implement other PluginInterface methods as needed...

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            // Example: Handle a custom URL scheme
            if (url.startsWith("myplugin://dosomething")) {
                Log.d(TAG, "Handling custom URL: " + url);
                // Extract parameters from URL if needed
                String param = url.substring("myplugin://dosomething?data=".length());
                performNativeAction(param);
                return true; // Indicate we've handled the URL
            }
            return false; // Let the default WebView handling or other plugins process it
        }

        @Override
        public void onPageFinished(String url) {
             // Example: Inject JavaScript when a specific page finishes loading
             if (url.contains("/myfeature")) {
                 evaluateJavascript("console.log('" + getPluginName() + " detected feature page.');");
             }
        }

        @Override
        public void onActivityResult(int requestCode, int resultCode, Intent data) {
            // Handle results from activities started by this plugin
            // if (requestCode == MY_REQUEST_CODE) { ... }
        }

        @Override
        public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
            // Handle results from permission requests initiated by this plugin
            // if (requestCode == MY_PERMISSION_CODE) { ... }
        }

        @Override
        public void onDestroy() {
            // Clean up resources, unregister listeners
            Log.d(TAG, getPluginName() + " destroyed.");
            this.activity = null;
            this.webView = null;
            this.functions = null;
        }

        @Override
        public void evaluateJavascript(String script) {
            // Helper to run JS, ensures activity/webView are valid
            if (activity != null && !activity.isFinishing() && webView != null) {
                 webView.evaluateJavascript(script, null);
            }
        }

        // --- Custom Plugin Methods ---

        public void performNativeAction(String data) {
            Log.d(TAG, "Performing native action with data: " + data);
            // Implement your native feature here
            // Example: Show a custom dialog, interact with hardware, etc.

            // Optionally send result back to JS
            evaluateJavascript("window.myPluginCallback('Native action completed: " + data + "');");
        }

        // Add other methods your plugin needs...

    }
    ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- 1. Create a new Swift class file.
         2. Make your class conform to the `PluginInterface` protocol (assuming one is defined).
         3. Implement the required protocol methods (`initialize`, `getPluginName`, etc.).
         4. Add custom methods for your plugin's functionality. -->
    <CodeBlock language="swift" title="MyCustomPlugin.swift">
    import Foundation
    import WebKit

    // Assume PluginInterface protocol exists
    class MyCustomPlugin: NSObject, PluginInterface {

        private weak var webView: WKWebView?
        private var config: [String: Any]?
        // Store other necessary references (e.g., delegate, view controller)

        static func registerPlugin() {
            // iOS registration might be explicit or use runtime discovery
            let defaultConfig: [String: Any] = ["apiKey": "ios_default"]
            PluginManager.shared.registerPlugin(MyCustomPlugin(), config: defaultConfig)
        }

        func getPluginName() -> String {
            return "MyCustomPlugin"
        }

        func initialize(webView: WKWebView, config: [String : Any]?) {
            self.webView = webView
            self.config = config
            print("\(getPluginName()) initialized with config: \(config ?? [:])")
            // Perform iOS-specific setup
        }

        // Implement other protocol methods...

        func shouldOverrideUrlLoading(url: URL) -> Bool {
            if url.scheme == "myplugin" && url.host == "dosomething" {
                print("Handling custom URL: \(url)")
                // Extract params from url.queryItems
                if let queryItems = URLComponents(url: url, resolvingAgainstBaseURL: false)?.queryItems,
                   let data = queryItems.first(where: { $0.name == "data" })?.value {
                    performNativeAction(data: data)
                }
                return true // Handled
            }
            return false // Not handled
        }

        func onPageFinished(url: URL?) {
            // Inject JS if needed
        }

        func evaluateJavascript(_ script: String) {
            webView?.evaluateJavaScript(script, completionHandler: nil)
        }

        func performNativeAction(data: String) {
            print("Performing native iOS action with data: \(data)")
            // Implement native feature
            evaluateJavascript("window.myPluginCallback('iOS action completed: \(data)');")
        }

        func destroy() {
             print("\(getPluginName()) destroyed.")
             self.webView = nil // Release references
        }

        // Implement other required PluginInterface methods...
    }
    </CodeBlock>
    ```
 </Tab>
</Tabs>

## 2. Implement Self-Registration

<Tabs>
 <Tab title="Android">
    Add a `static` initializer block to your plugin class. This block runs when the class is first loaded, registering an instance of your plugin with the `PluginManager`. Provide any default configuration values your plugin might need.

    ```java plugins/MyCustomPlugin.java (Add Static Block)
    public class MyCustomPlugin implements PluginInterface {

        // ... (Existing fields and methods) ...

        // Static initializer block for self-registration
        static {
            Map<String, Object> defaultConfig = new HashMap<>();
            defaultConfig.put("apiKey", "DEFAULT_KEY_IF_NOT_SET_IN_PLAYGROUND");
            defaultConfig.put("featureFlagX", false);
            // Register this plugin with its default config
            PluginManager.registerPlugin(new MyCustomPlugin(), defaultConfig);
        }

        // ... (Rest of the class) ...
    }
    ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS registration might be different. You might call a static `registerPlugin()` method explicitly from your `AppDelegate` or use Objective-C runtime features for automatic discovery, depending on the architecture chosen. -->
    ```
 </Tab>
</Tabs>

## 3. Implement Plugin Logic

*   **`initialize`:** This is where your plugin receives essential contexts (`Activity`, `WebView`, `Functions` on Android; `WKWebView`, etc. on iOS) and its configuration map. Store these references and perform any necessary setup (e.g., initializing third-party SDKs).
*   **`getPluginName`:** Return a unique string identifier for your plugin.
*   **Lifecycle Methods (`onActivityResult`, `onRequestPermissionsResult`, `onDestroy`):** Implement these if your plugin starts activities, requests permissions, or needs to clean up resources.
*   **WebView Interaction (`shouldOverrideUrlLoading`, `onPageStarted`, `onPageFinished`):** Implement these to react to navigation events or inject JavaScript at appropriate times.
*   **Custom Methods:** Add public methods for the specific native functionality your plugin provides (e.g., `performNativeAction`, `scanQRCode`, `authenticateUser`). These might be called from other native code (like `Playground`) or triggered via communication from JavaScript.

## 4. Communication with JavaScript

Choose a method for your web content to interact with your plugin:

*   **Custom URL Schemes:** (Simpler) Define a unique URL scheme (e.g., `myplugin://action?param=value`). Your plugin intercepts these URLs in `shouldOverrideUrlLoading`. Good for simple triggers, limited data transfer.
*   **JavaScript Interface:** (More Flexible)
    <Tabs>
     <Tab title="Android">
        Add a dedicated class with methods annotated `@JavascriptInterface`. Add an instance of this class to the WebView using `webView.addJavascriptInterface(new MyJSInterface(), "MyPluginInterface")` within your plugin's `initialize` method. JavaScript can then call `window.MyPluginInterface.nativeMethod(data)`.
     </Tab>
     <Tab title="iOS">
        ```md
        <!-- Use `WKScriptMessageHandler`. Add a message handler using `webView.configuration.userContentController.add(self, name: "myPluginHandler")`. JavaScript calls `window.webkit.messageHandlers.myPluginHandler.postMessage({action: 'doSomething', data: 'value'})`. Your plugin receives the message via the `userContentController(_:didReceive:)` delegate method. -->
        ```
     </Tab>
    </Tabs>
*   **Evaluating JavaScript:** Use the `evaluateJavascript` method provided by the interface (or directly on the `WebView`/`WKWebView` instance) to send data *back* to JavaScript or trigger functions in the web view.

## 5. Testing with Playground

<Tabs>
 <Tab title="Android">
    Use `Playground.java` to test your new plugin:
    1.  **Configure Defaults:** Add default settings for your plugin in `initializePluginDefaults`.
    2.  **Add Diagnostics:** Add a check for your plugin in `runPluginDiagnostics` to verify it loads and optionally perform a basic test.
    3.  **Add Demo UI:** Modify `setupPluginDemoUI` to inject JavaScript buttons or elements that trigger your plugin's functionality via its chosen communication method (URL scheme or JS Interface).
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Use the equivalent iOS 'Playground' class to configure, diagnose, and add demo UI elements for testing your Swift plugin. -->
    ```
 </Tab>
</Tabs>

<Card horizontal title="Playground" icon="flask" href="/smart-webview/plugins/playground">
</Card>

By following these steps, you can create custom native extensions for your Smart WebView application, keeping your codebase modular and maintainable.