---
title: 'Rating System'
description: 'Prompting users to rate your app on the Google Play store.'
icon: 'star'
---

Smart WebView includes a system to prompt users to rate your application after certain usage conditions are met. This feature is based on the [Android-Rate](https://github.com/hotchemi/Android-Rate) library.

---

## Enabling and Configuring

This feature is enabled and configured using variables in `SmartWebView.java`.

```java
// Enable the automatic app rating dialog prompt
public static boolean ASWP_RATINGS = true;

// Minimum days after install before showing.
static int ASWR_DAYS = 3;
// Minimum number of app launches before showing.
static int ASWR_TIMES = 10;
// Days to wait before reminding if user selects "Later".
static int ASWR_INTERVAL = 2;
```

---

## How it Works

1.  If `ASWP_RATINGS` is `true`, `MainActivity` schedules a check.
2.  The `AppRate` library monitors the install date and launch count based on the configured `ASWR_DAYS` and `ASWR_TIMES`.
3.  If the conditions are met and the user hasn't permanently opted out, a dialog is displayed.
4.  The user has three options:
    *   **Rate Now:** Opens the app's page on the Google Play Store.
    *   **Later:** Dismisses the dialog and waits for `ASWR_INTERVAL` days before potentially showing it again.
    *   **Don't Ask Again:** Permanently disables future rating prompts for the user.

::: callout tip
The rating dialog requires an internet connection to function correctly.
:::

---

## Customizing Dialog Text

You can change the text displayed in the rating dialog by editing the string resources in `app/src/main/res/values/strings.xml`:
*   `rate_dialog_title`
*   `rate_dialog_message`
*   `rate_dialog_ok` (for the "Rate Now" button)
*   `rate_dialog_cancel` (for the "Later" button)
*   `rate_dialog_no` (for the "Don't Ask Again" button)

---

## Disabling the Rating Prompt

To completely disable this feature, set `ASWP_RATINGS` to `false` in `SmartWebView.java`.