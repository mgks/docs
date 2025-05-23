---
title: 'File Handling'
description: 'Managing file uploads, camera access, and downloads.'
icon: 'folder-open'
---

Smart WebView provides support for handling file uploads initiated from your web content, including direct access to the device camera, and manages file downloads.

---

## File Uploads & Camera Access

This functionality allows users to select local files or use the camera via `<input type="file">` elements in your web content.

**Configuration:**

<Tabs>
 <Tab title="Android">
    Controlled by variables in `SmartWebView.java`:
    *   `ASWP_FUPLOAD` (`true`/`false`): Enable/disable file input.
    *   `ASWP_CAMUPLOAD` (`true`/`false`): Allow camera capture option.
    *   `ASWP_MULFILE` (`true`/`false`): Allow multiple file selection.
    *   `ASWV_F_TYPE` (String): Default MIME type filter (e.g., `"image/*"`).
 </Tab>
 <Tab title="iOS">
    ```md
    <!-- iOS configuration for file uploads (likely involves WKUIDelegate methods and Info.plist permissions) will be added here. -->
    ```
 </Tab>
</Tabs>

**Permissions:**

<Tabs>
 <Tab title="Android">
    *   **Camera:** `android.permission.CAMERA` (declared in Manifest, requested runtime).
    *   **Storage (Android 10+):** Generally handled by Scoped Storage for picker access.
    *   **Storage (Android < 10):** `READ_EXTERNAL_STORAGE` potentially requested. `WRITE_EXTERNAL_STORAGE` declared with `maxSdkVersion` for compatibility.
    *   **Media Access (Android 13+):** `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, `READ_MEDIA_AUDIO` declared for specific media types.
 </Tab>
 <Tab title="iOS">
    *   **Camera:** `NSCameraUsageDescription` key in `Info.plist` (mandatory description).
    *   **Photo Library:** `NSPhotoLibraryUsageDescription` key in `Info.plist` (mandatory description).
    *   **Media Library:** `NSAppleMusicUsageDescription` potentially needed for audio.
    <Info>Permissions are requested at runtime via specific APIs.</Info>
 </Tab>
</Tabs>

**How it Works:**

<Tabs>
 <Tab title="Android">
    1.  User clicks `<input type="file">`.
    2.  `onShowFileChooser` in `FileProcessing.java` is triggered.
    3.  Intents for camera (if `ASWP_CAMUPLOAD`) and file selection are created.
    4.  A system chooser dialog appears.
    5.  HTML `accept` attribute filters file types.
    6.  HTML `multiple` attribute enables multi-select (if `ASWP_MULFILE`).
    7.  Results (URIs) are passed back to the WebView via `ValueCallback`.
 </Tab>
 <Tab title="iOS">
    iOS implementation typically involves implementing WKUIDelegate methods like `webView(_:runOpenPanelWith:initiatedByFrame:completionHandler:)`. This presents a `UIDocumentPickerViewController` or `UIImagePickerController`. The results are passed back via the completion handler. Details will be added here.
 </Tab>
</Tabs>

**HTML Examples for `accept` Attribute (Platform Agnostic):**

These examples control the *types* of files the user can select from within your web page.

```html
<!-- Allow any image type -->
<input type="file" accept="image/*">

<!-- Allow any video type -->
<input type="file" accept="video/*">

<!-- Allow images and videos -->
<input type="file" accept="image/*,video/*">

<!-- Allow only PDF files -->
<input type="file" accept=".pdf,application/pdf">

<!-- Allow specific image formats -->
<input type="file" accept=".jpg,.jpeg,.png">

<!-- Allow multiple files of any type -->
<input type="file" accept="*/*" multiple>
```

---

## Downloads

Handling files downloaded *from* the WebView.

**How it Works:**

<Tabs>
 <Tab title="Android">
    1.  WebView's `DownloadListener` detects a download request.
    2.  Checks storage permissions (mainly legacy).
    3.  Uses Android `DownloadManager` service.
    4.  System notification shows progress.
    5.  Files saved to public "Downloads" directory.
    6.  Toast message confirms start.
 </Tab>
 <Tab title="iOS">
    iOS download handling typically involves implementing WKNavigationDelegate methods like `webView(_:decidePolicyFor:decisionHandler:)` to intercept the download request, then using `URLSession` (specifically `URLSessionDownloadTask`) to perform the download in the background. The app needs to manage saving the file and potentially presenting it to the user. Details will be added here.
 </Tab>
</Tabs>

**Permissions:**

<Tabs>
 <Tab title="Android">
    *   `android.permission.INTERNET`.
    *   `android.permission.WRITE_EXTERNAL_STORAGE` (declared with `maxSdkVersion`, less critical now).
 </Tab>
 <Tab title="iOS">
    *   iOS generally doesn't require specific permissions just to download files to the app's sandboxed container. Internet access is implicit.
 </Tab>
</Tabs>