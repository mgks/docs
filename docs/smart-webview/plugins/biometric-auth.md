---
title: 'Biometric Auth Plugin (Premium)'
description: 'Securing the app with fingerprint or face unlock.'
icon: 'fingerprint'
---

This premium plugin allows you to add an extra layer of security by requiring biometric authentication (fingerprint, face recognition) before granting access to your app or specific features.

::: callout tip
This is a premium plugin and is not included in the open-source project. Its source code is only available to **[Project Sponsors](https://github.com/sponsors/mgks/sponsorships?sponsor=mgks&tier_id=468838)**.
:::

---

## Setup and Configuration

1.  **Obtain the Plugin:** Acquire the plugin files through a GitHub sponsorship.
2.  **Add to Project:** Place the `BiometricPlugin.java` file in the `app/src/main/java/mgks/os/swv/plugins/` directory.
3.  **Enable Plugin:** Ensure the plugin is enabled in `SmartWebView.java`:
    ```java
    put("BiometricPlugin", true);
    ```
4.  **Configure Prompt:** You can optionally modify the text shown in the biometric prompt by editing the `BiometricPrompt.PromptInfo.Builder` settings inside the plugin's `initialize` method.

---
## Usage

The plugin is primarily controlled via a JavaScript interface.

### Triggering Authentication from JavaScript

The plugin injects a `window.Biometric` object into your web page.

```javascript
// Request biometric authentication
window.Biometric.authenticate();
```

### Callbacks in JavaScript

Define callback functions in your JavaScript to handle the result of the authentication attempt.

```javascript
// Called on successful authentication
window.Biometric.onAuthSuccess = function() {
  console.log("Authentication successful!");
  // Unlock feature or proceed with login
};

// Called if there's an error (e.g., no hardware, lock screen not set up)
window.Biometric.onAuthError = function(errorMessage) {
  console.error("Authentication error:", errorMessage);
  // Show an error message to the user
};

// Called when the fingerprint/face is not recognized
window.Biometric.onAuthFailed = function() {
  console.warn("Authentication failed. Please try again.");
  // Optional: Update UI to prompt user to try again
};
```