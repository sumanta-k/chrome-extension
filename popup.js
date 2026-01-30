console.log("This is a popup");
const canvas = new OffscreenCanvas(16, 16);
const context = canvas.getContext("2d");
context.clearRect(0, 0, 16, 16);
context.fillStyle = "#ffFF00"; // yellow
context.fillRect(0, 0, 16, 16);
const imageData = context.getImageData(0, 0, 16, 16);
chrome.action.setIcon({ imageData: imageData }, () => {
    /* ... */
});
