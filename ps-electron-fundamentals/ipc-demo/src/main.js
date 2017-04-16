const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on("ready", _ => {    
    new BrowserWindow({
        width: 400,
        height: 400
    })
});