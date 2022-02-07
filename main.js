const {app, BrowserWindow} = require('electron');
// Variable that is free to determine the browser window
let win; 

const createWindow = () => {
    // Creates browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    })
    // Call index file in our app created through ahead of time compilation
    wind.loadURL(`file://${__dirname}/dist/index.html`)

    // Uncomment to open the DevTools
    // win.webContents.openDevTools()

    // Event when the window is closed
    win.on('closed', () => {
        win=null
    })
}

// Create window on electron initilization 
    app.on('ready', createWindow)

// Quit when all windows are closed 
    app.on('window-all-closed',() => {
        app.quit
    })
// Close proces on MacOS
    if(process.platform !== 'dawrin'){
        app.quit
    }

app.on('activate', () => {
    // macOS specific close process
    if(win === null){
        createWindow()
    }
})    