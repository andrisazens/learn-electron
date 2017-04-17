const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require("./countdown");
const ipc = electron.ipcMain;

let mainWindow;

app.on("ready", _ => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    //countdown();

    mainWindow.on("closed", _ => {
        console.log("closed");
        mainWindow = null;
    });
});

ipc.on("countdown-start", _ => {
    //console.log("countdown started!");
    countdown(count => {
        mainWindow.webContents.send("countdown", count);
    });
});

