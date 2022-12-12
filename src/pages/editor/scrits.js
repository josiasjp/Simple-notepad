const {ipcRenderer} = require('electron');
ipcRenderer.on(ser-file,function(events, data){
    console.log(data);
});
