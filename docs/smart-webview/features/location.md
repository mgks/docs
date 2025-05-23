---
title: 'GPS Location'
description: 'Accessing device GPS coordinates and sending them to your web app.'
icon: 'map-pin'
---

Smart WebView can optionally access the device's location services and make the coordinates available to your web application.

---

## Enabling Location Services

**Configuration:**

<Tabs>
 <Tab title="Android">
    Set the `ASWP_LOCATION` variable to `true` in `SmartWebView.java`:
    <CodeBlock language="java">
    // Enable GPS location tracking
    static boolean ASWP_LOCATION = true;
    </CodeBlock>
    If set to `false`, the app will not attempt to access location services.
 </Tab>
 <Tab title="iOS">
    iOS location configuration typically involves setting up CLLocationManager and requesting authorization. Relevant Info.plist keys are essential. Details here.
 </Tab>
</Tabs>

---

## Permissions

Appropriate location permissions must be declared and granted by the user at runtime.

<Tabs>
 <Tab title="Android">
    **Manifest Declaration (`AndroidManifest.xml`):**
    ```jsx
      <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
      <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
      <!-- Optional: Indicate GPS hardware usage -->
      <uses-feature android:name="android.hardware.location.gps" android:required="false" />
    ```
    **Runtime Request:** The app requests these permissions when location access is first needed if `ASWP_LOCATION` is enabled.
 </Tab>
 <Tab title="iOS">
    **Configuration (`Info.plist`):**
    *   `NSLocationWhenInUseUsageDescription` (String - Reason for foreground access) - Mandatory
    *   `NSLocationAlwaysAndWhenInUseUsageDescription` (String - Reason for background access) - If background access needed
    *   `NSLocationUsageDescription` (String - Legacy key)
    **Runtime Request:** Use `CLLocationManager`'s `requestWhenInUseAuthorization()` or `requestAlwaysAuthorization()` methods.
 </Tab>
</Tabs>

---

## How it Works

<Tabs>
  <Tab title="Android">
    1.  If `ASWP_LOCATION` is `true` and permissions are granted, the `GPSTrack.java` service attempts to get the current latitude and longitude using `LocationManager`.
    2.  This occurs on app start/resume via `Functions.get_location`.
    3.  If successful, coordinates are sent to the webpage (originating from `ASWV_URL`) by setting cookies:
        *   `lat`: Latitude value.
        *   `long`: Longitude value.
        *   `LATLANG`: Combined "latitude`x`longitude" string.
  </Tab>
  <Tab title="iOS">
    1. Creating and configuring a `CLLocationManager` instance.
    2. Setting a delegate (`CLLocationManagerDelegate`).
    3. Requesting authorization.
    4. Starting location updates (`startUpdatingLocation()`).
    5. Receiving coordinates in the delegate method `locationManager(_:didUpdateLocations:)`.
    6. Sending coordinates to the WKWebView, typically via `evaluateJavaScript(_:completionHandler:)`. Cookie setting is also possible but less common for this purpose on iOS.
  </Tab>
</Tabs>

**Accessing Coordinates in JavaScript (Example using Cookies):**

This JavaScript code works if the native side sets cookies (as the Android implementation does).

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
  // Use the coordinates
} else {
  console.log('Location cookies not found or access denied.');
}
```

---

## Considerations

*   **Battery Usage:** Continuous location polling consumes significant battery. The current Android implementation primarily gets location on app start/resume.
*   **Accuracy:** Location accuracy depends on device hardware, signal strength (GPS, Wi-Fi, Cellular), and environment.
*   **User Privacy:** Clearly inform users why you need location access and how the data will be used. Ensure compliance with platform guidelines and privacy regulations (especially regarding background location).
*   **Offline Mode:** Location features are typically disabled if the app runs in offline mode or without network access (depending on implementation).