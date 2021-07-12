//funcion mdlinks q reciba ruta y opciones para el usuario listar-validar-estadistica
const funciones = require("./index.js")

function mdLinks(ruta, opciones) {
    const leyendo = funciones.leerRuta(ruta);
    const leerArchivos = funciones.extraerLinks(leyendo)
    if (opciones == false) {
        // return new Promise((resolve,reject)=>{
        // const leyendo=funciones.leerRuta(ruta);
        console.log(leerArchivos)
    } else {
        const status = funciones.validarStatus(leerArchivos)
        console.log(status)
            // .then(result => result.console.log(result))
            // .catch(e => {
            //     e.messange
            // })
        //console.log(status)
    }

}

mdLinks('LinksPrueba.md', true)
