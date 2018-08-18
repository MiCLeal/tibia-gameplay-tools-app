/**
 * Electron Main Process file
 */
const { app, BrowserWindow, Menu, ipc, Tray } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let appIcon = null;
let mWin;
let winWidth = 350;
let winHeight = 600;

function createWindow() {
    mWin = new BrowserWindow({ width: winWidth, height: winHeight, maxWidth: winWidth, maxHeight: winHeight, minWidth: winWidth, minHeight: winHeight });

    const startURL = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(isDEv ? 'http://localhost:3000' : __dirname, '/../build/index.html'),
        icon: path.join(__dirname, '/../build/favicon.ico'),
        protocol: 'file:',
        slashes: true
    });

    mWin.loadURL(startURL);

    mWin.on('closed', function () {
        mainWindow = null;
    });

}

// mWin.OpenDevTools({detach: true})

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.