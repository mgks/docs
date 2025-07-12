---
title: 'Dark Mode & Theming'
description: 'Implementing dynamic light, dark, and system theme switching.'
icon: 'moon'
---

Smart WebView includes a robust system for handling light and dark themes, allowing the app to respond to system settings and providing a JavaScript interface for user-controlled theme switching.

---

## How It Works

The theming system operates on multiple levels to ensure a seamless experience:

1.  **Native Android Theme:** The app uses different `colors.xml` files for light (`res/values/`) and dark (`res/values-night/`) modes. Android automatically applies the correct theme when the app starts, based on the device's system setting.
2.  **Initial State Detection:** When the app launches, it detects the current system theme and stores this state.
3.  **JavaScript Injection:** On page load, the native app injects the initial theme preference into the web page's JavaScript context.
4.  **CSS Styling:** The web page's `style.css` uses CSS variables and a `.dark-mode` class on the `<body>` tag to switch between light and dark styles.
5.  **Two-Way Communication:**
    -   **Web to Native:** When a user changes the theme using the web UI, the JavaScript calls back to the native app to keep the native components (like the drawer) in sync.
    -   **Native to Web:** When the theme is changed from the native drawer switch, it triggers an update that is sent to the web page's JavaScript, ensuring the web content's theme also changes.

---

## Configuration

### Native Theme Colors

You can customize the colors for both light and dark modes in their respective files:

-   **Light Mode:** `app/src/main/res/values/colors.xml`
-   **Dark Mode:** `app/src/main/res/values-night/colors.xml`

### Drawer Layout Switch

If you are using the Drawer Layout (`ui.layout=1` in `swv.properties`), a theme switch is included by default. Its appearance and behavior are defined in:

-   `res/layout/drawer_switch_item.xml`: The layout for the switch itself.
-   `res/menu/activity_main_drawer.xml`: Where the switch item is added to the menu.
-   `res/values/styles.xml`: The `DrawerSwitch` style.