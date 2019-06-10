/**
 * Electron Main Process file
 */
const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const ipc = electron.ipc
const Menu = electron.Menu
const Tray = electron.Tray
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
require('jquery/dist/jquery.slim')

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        click() {
          app.quit()
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Toggle Always on top',
        type: 'checkbox',
        click() {
          mWin.isAlwaysOnTop() ? mWin.setAlwaysOnTop(false) : mWin.setAlwaysOnTop(true)
          if (auxWin.exists())
            auxWin.isAlwaysOnTop() ? auxWin.setAlwaysOnTop(false) : auxWin.setAlwaysOnTop(true)
        }
      },
      {type: 'separator'},
      {
        label: 'Timer',
        click() {createAuxWindow('Timer')}
      },
      {
        label: 'Waste And Profit Calc',
        click() {createAuxWindow('WasteAndProfit')}
      },
      {type: 'separator'},
      {role: 'reload'},
      {role: 'forcereload'},
      {
        label: 'Toggle Development Tools',
        accelerator: 'ctrl+shift+i',
        click() {
          mWin.openDevTools({
            mode: 'detach'
          })
        }
      },
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://github.com/MiCLeal/tibia-tools-app/blob/master/README.md') }
      }
    ]
  }
]

// let appIcon = null;
let mWin
let auxWin
let mainMenu = Menu.buildFromTemplate(template)
let tray = Tray


Menu.setApplicationMenu(mainMenu)

const WindowProperties = {
  height: 600,
  icon: `${path.join(__dirname, '../build/favicon.ico')}`,
  name: 'tibia-tools-app',
  resizable: true,
  title: 'Tibia Tools App',
  width: 800,
}

/*ipc.on("put-in-tray", function (evt) {
  const iconName = process.platform === "win32" ? "favicon.ico" : "favicon.png";
  const iconPath = isDev ? path.join(__dirname, iconName) : `file://${path.join(__dirname, "../build/" + iconName)}`
  appIcon = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([{
    label: "Show Window",
    click: function () {
      evt.sender.send("tray-removed")
    }
  }]);
});

ipc.on("remove-tray", function () {
  appIcon.destroy();
});*/

function createWindow() {
  //mWin = new BrowserWindow({width: winWidth, height: winHeight, minWindth: winWidth, maxWidth: winWidth, minHeight: winHeight, maxHeight: winHeight, icon: `${path.join(__dirname, "../build/favicon.ico")}`, center: true, resizable: false});
  mWin = new BrowserWindow({
    center: true,
    height: 600,
    icon: `${path.join(__dirname, '../build/favicon.ico')}`,
    minHeight: 600,
    minWidth: 700,
    width: 800
  })

  const startURL = isDev ? 'http://localhost:3000/?App' : `file://${path.join(__dirname, '../build/index.html?App')}`

  mWin.loadURL(startURL)

  mWin.on('closed', () => (mWin = null))

}

function createAuxWindow(name) {

  if (name === 'Timer') {
    WindowProperties.height = 300
    WindowProperties.name = WindowProperties.name + '-timer'
    WindowProperties.resizable = false
    WindowProperties.title = 'Tibia Tools App - Timer'
    WindowProperties.width = 400
  } else if (name === 'WasteAndProfit') {
    WindowProperties.height = 600
    WindowProperties.name = WindowProperties.name + '-wasteandprofit'
    WindowProperties.resizable = true
    WindowProperties.title = 'Tibia Tools App - Waste And Profit'
    WindowProperties.width = 800
  }

  auxWin = new BrowserWindow({
    icon: WindowProperties.icon,
    height: WindowProperties.height,
    minHeight: WindowProperties.height,
    minWidth: WindowProperties.width,
    name: WindowProperties.name,
    resizable: WindowProperties.resizable,
    title: WindowProperties.title,
    width: WindowProperties.width,
  })
  auxWin.loadURL(isDev ? `http://localhost:3000?${path.join(name)}` : `file://${path.join(__dirname, '../build/index.html?'+ name)}`)
  auxWin.on('closed', () => (auxWin = null))
}

// mWin.OpenDevTools({detach: true})

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mWin === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.