const { app, BrowserWindow } = require('electron');
const {} = require('./config');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 450,
        autoHideMenuBar: true,
        webPreferences: {
            backgroundThrottling: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
});
