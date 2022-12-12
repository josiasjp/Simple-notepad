const { app, BrowserWindow, Menu } = require('electron');
//importação das funções

let mainWindow = null;

//criação da janela
async function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600
    });
    //instancia da janela
    await mainWindow.loadFile('src/pages/editor/index.html');
    console.log('create');
}

//configurações de menu
const templateMenu = [{
    label:'Arquivo',
    submenu: [
        {
            label:'Novo',
            onclick:''
        },
        {label:'Abrir'},
        {label:'salvar'},
        {label:'salvar Como'},
        {label:'Sair', role:'quit'},
    ],
}];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);


//cria um objeto da janela
app.whenReady().then(createWindow);