const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on("ready", _ => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    mainWindow.on("closed", _ => {
        console.log("closed");
        mainWindow = null;
    });
});

