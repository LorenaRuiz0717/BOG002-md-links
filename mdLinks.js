//funcion mdlinks q reciba ruta y opciones para el usuario listar-validar-estadistica
const chalk = require('chalk');
const { estadistica } = require('./index.js');
// const clear = require('clear');
// const figlet = require('figlet');
const funciones = require("./index.js")

function mdLinks(ruta, opciones) {
    const leyendo = funciones.leerRuta(ruta);
    const listaLinks = funciones.extraerLinks(leyendo)
    return new Promise((resolve)=>{
        const estadoLink = funciones.validarStatus(listaLinks)
        if(opciones=='validate'){
        console.log(estadoLink)
            return  resolve(estadoLink)
        }else if(opciones=='stats') {
            return resolve(estadoLink)
        }else{
            return resolve(listaLinks)
        }
    })
}


// mdLinks('LinksPrueba.md','validate')

// clear();

// console.log(
//   chalk.greenBright(
//     figlet.textSync('Lore', { horizontalLayout: 'full' })
//   )
// )


module.exports = { mdLinks }



