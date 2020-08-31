"use strict";
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
function createWindow() {
    // Create a browser window
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
}
// Called when Electron has finished initialization
// and is ready to create browser windows
app.whenReady().then(createWindow);
// Close app when all windows are closed except on macOS
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
