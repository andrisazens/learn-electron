const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const countdown = require("./countdown");
const ipc = electron.ipcMain;

let mainWindow;

const windows = [];

app.on("ready", _ => {
    [1, 2, 3].forEach(_ => {
        let win = new BrowserWindow({
            width: 400,
            height: 400
        });

        win.loadURL(`file://${__dirname}/countdown.html`);

        win.on("closed", _ => {
            console.log("closed");
            mainWindow = null;
        });
        windows.push(win);
    });
});

ipc.on("countdown-start", _ => {
    //console.log("countdown started!");
    countdown(count => {
        windows.forEach(win => {
          win.webContents.send("countdown", count);  
        });
        //mainWindow.webContents.send("countdown", count);
    });
});

