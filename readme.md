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
