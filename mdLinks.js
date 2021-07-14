//funcion mdlinks q reciba ruta y opciones para el usuario listar-validar-estadistica
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const funciones = require("./index.js")

function mdLinks(ruta, opciones) {
    const leyendo = funciones.leerRuta(ruta);
    const listaLinks = funciones.extraerLinks(leyendo)
    if (opciones == 'validate') {
        const status = funciones.validarStatus(listaLinks)
            .then(result => console.log(chalk.blue(result)))
            .catch(e => {
                e.messange
            })
    } else if (opciones == 'stats') {
        const status = funciones.validarStatus(listaLinks)
            .then(status => funciones.estadistica(status))
            .then(result => console.log(chalk.red(result)))
                .catch(e => {e.messange})
    } else {
        console.log(chalk.green(listaLinks))
    
    }
}



// clear();

// console.log(
//   chalk.greenBright(
//     figlet.textSync('Lore', { horizontalLayout: 'full' })
//   )
// )


module.exports = { mdLinks }



