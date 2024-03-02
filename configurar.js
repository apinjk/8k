const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "6281554093299";
global.nomedono = "APINSTORE.ID";
global.prefixo = ".";
global.packnome = "feito por:\ncriador:\ncanal:";
global.author = "APINSTORE.ID\n6281554093299\nhttps://www.instagram.com/coreinpin";
global.autoGravar = true;
global.autoDigitar = true;
global.autoreDigitarGravar = true;
global.autoVisualizarMsg = true;
global.autobio = true;
global.autovisualizar_status = true;
global.antilink_grupo = true;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})