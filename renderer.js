const { app, BrowserWindow } = require('electron');
const {} = require('./config');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 450,
        frame: false,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})