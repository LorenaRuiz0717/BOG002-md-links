const funciones = require("./index.js")

function mdLinks(ruta, opciones) {
    const leyendo = funciones.leerRuta(ruta);
    const listaLinks = funciones.extraerLinks(leyendo)
    return new Promise((resolve)=>{
        const estadoLink = funciones.validarEstado(listaLinks)
        if(opciones=='validate stats') {
            return resolve(estadoLink)
        }else if(opciones=='validate'){
            return  resolve(estadoLink)
        }else if(opciones=='stats') {
            return resolve(estadoLink)
        }else{
            return resolve(listaLinks)
        }
    })
}

module.exports = { mdLinks }