---
title: 'Rating System'
description: 'Prompting users to rate your app on the app store.'
icon: 'star'
---

Smart WebView includes mechanisms to prompt users to rate your application on the relevant app store after certain usage conditions are met.

---

## Enabling and Configuring

**Configuration:**

<Tabs>
 <Tab title="Android">
    The prompt is enabled/disabled and configured using variables in `SmartWebView.java`. It uses the [Android-Rate](https://github.com/hotchemi/Android-Rate) library.
    
    ```java
    // Enable the automatic app rating dialog prompt
    static boolean ASWP_RATINGS = true;

    // Minimum days after install before showing.
    static int ASWR_DAYS = 3;
    // Minimum number of app launches before showing.
    static int ASWR_TIMES = 10;
    // Days to wait before reminding if user selects "Later".
    static int ASWR_INTERVAL = 2;
    ```
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS uses Apple's official `SKStoreReviewController` API. There's less direct configuration over *when* it appears, as Apple controls the timing to limit prompts. You simply request a review at an appropriate point in your app's flow. Enabling/disabling would involve adding/removing the request code. -->
    <!-- Details on best practices for calling `requestReview` will be added here. -->
    ```
 </Tab>
</Tabs>

---

## How it Works

<Tabs>
 <Tab title="Android">
    1.  If `ASWP_RATINGS` is `true`, `MainActivity` schedules a check using `Functions.get_rating`.
    2.  `AppRate` library monitors install date and launch counts based on `ASWR_DAYS` and `ASWR_TIMES`.
    3.  `AppRate.showRateDialogIfMeetsConditions()` displays a dialog if conditions are met and the user hasn't permanently opted out.
    4.  Options: "Rate Now" (opens Play Store), "Remind Me Later" (waits `ASWR_INTERVAL` days), "No, Thanks" (disables future prompts).
    <Tip>The dialog requires an internet connection.</Tip>
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- 1. At an appropriate, non-intrusive moment in the user experience (e.g., after completing a significant task), your app calls `SKStoreReviewController.requestReview(in:)`.
         2. The system decides whether to show the standard rating prompt based on internal logic (e.g., user hasn't seen it too recently). You cannot force it to appear.
         3. If shown, the user can rate the app (1-5 stars) or dismiss the prompt.
         4. The system handles the interaction; your app doesn't get direct feedback on whether the prompt was shown or what the user did. -->
    ```
 </Tab>
</Tabs>

---

## Customizing Dialog Text (Android)

<Tabs>
 <Tab title="Android">
    Change the text displayed in the rating dialog via string resources in `app/src/main/res/values/strings.xml`:
    *   `rate_dialog_title`, `rate_dialog_message`
    *   `rate_dialog_ok` ("Rate Now"), `rate_dialog_cancel` ("Later"), `rate_dialog_no` ("No Thanks")
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- The standard iOS review prompt's text and appearance are controlled by the system and cannot be customized. -->
    ```
 </Tab>
</Tabs>

---

## Disabling the Rating Prompt

<Tabs>
 <Tab title="Android">
    Set `ASWP_RATINGS` to `false` in `SmartWebView.java`.
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- Remove the call to `SKStoreReviewController.requestReview(in:)` from your code. -->
    ```
 </Tab>
</Tabs>