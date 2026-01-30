> > getting started with `chrome extension` build.

---

To get started to create extension you will need a `manifest.json` file.
This json file describes - extension's **capabilites and configuration**.

For Example:
most manifest files contain an `"action"` key which declares the image Chrome should use as the extesion's **_action's icon_**.
And the HTML page to show in a **popup** when the extension's action icon is clicked.

---

The extension will now displays a popup - when the `extension's icon` is clicked(which is in the toolbar section)

Now you have to load this extension locally to chrome. So then you can see your extension's work properly.

### Instructions to load into browser:

- go to `chrome://extensions` page first
- enable `developer mode`
- lastly click `load unpacked` and select the directory.
  <img width="1919" height="915" alt="extensionUnload" src="https://github.com/user-attachments/assets/c78da411-5ce4-4ff7-90a7-4af65321089b" />


> > First Half has completed.
<img width="495" height="478" alt="firstExtensionPoppedUp" src="https://github.com/user-attachments/assets/9e7cb5c6-3e2f-4e70-976c-b4c21a9b4036" />

Have to reload the extension, depends on what you have changed.
For ex: you've changed it's name and file's content , then you've to reload it.

---
<img width="596" height="412" alt="errorTab" src="https://github.com/user-attachments/assets/5504cd61-2058-4507-8690-c23973e3070a" />

### chrome API
- `chrome.action.setIcon`: it helps to set icon/logo of extension.


