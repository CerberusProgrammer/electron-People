const { app, BrowserWindow } = require('electron')
const path = require('path')

function createwindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 928,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.setMenuBarVisibility(false)
    mainWindow.setIcon("icon-people.jpg")
    mainWindow.loadFile('model.html')
}

app.whenReady().then(() => {
    createwindow()

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) {
            createwindow()
        }
    })
})

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})