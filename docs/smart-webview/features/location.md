---
title: 'GPS Location'
description: 'Accessing device GPS coordinates and sending them to your web app.'
icon: 'map-pin'
---

Smart WebView can access the device's location and make the coordinates available to your web application.

---

## Enabling Location Services

**Configuration:**

Set the `ASWP_LOCATION` variable to `true` in `SmartWebView.java`:
```java
// Enable GPS location tracking
public static boolean ASWP_LOCATION = true;
```
If set to `false`, the app will not request location permissions or access the GPS.

---

## Permissions

The app declares and requests `ACCESS_FINE_LOCATION` and `ACCESS_COARSE_LOCATION` permissions as needed. The user must grant this permission at runtime.

---

## How it Works

1.  If `ASWP_LOCATION` is `true` and permissions are granted, the `GPSTrack.java` service attempts to get the current latitude and longitude.
2.  This typically occurs when the app starts or resumes via the `fns.get_location()` call in `MainActivity`.
3.  If successful, the coordinates are sent to the webpage (at `ASWV_URL`) by setting cookies:
    *   `lat`: Latitude value.
    *   `long`: Longitude value.
4.  For the offline `offline.html` page, a special `getloc:` link can be used to manually trigger a location fetch and display it on the page.

**Accessing Coordinates in JavaScript (via Cookies):**

Your web application can read the cookies to get the location.

```javascript
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const latitude = getCookie('lat');
const longitude = getCookie('long');

if (latitude && longitude) {
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  // Use the coordinates in your web app
} else {
  console.log('Location cookies not found.');
}
```

---

## Considerations

*   **Battery Usage:** The current implementation primarily gets location on app start/resume to conserve battery.
*   **User Privacy:** Clearly inform users why you need their location.
*   **Accuracy:** Location accuracy depends on the device and signal availability.