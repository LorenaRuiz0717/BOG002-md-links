const chalk = require('chalk');
const { estadistica } = require('./index.js');
const funciones = require("./index.js")

function mdLinks(ruta, opciones) {
    const leyendo = funciones.leerRuta(ruta);
    const listaLinks = funciones.extraerLinks(leyendo)
    return new Promise((resolve)=>{
        const estadoLink = funciones.validarStatus(listaLinks)
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