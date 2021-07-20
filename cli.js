#!/usr/bin/env node

const { result } = require("lodash");
const { mdLinks } = require("./mdLinks");
const funciones = require("./index.js");
const chalk = require("chalk");
const [, , ...args] = process.argv
const ruta = process.argv[2]
const opciones = process.argv[3]

if(opciones==='validate-stats'){
    console.log(chalk.greenBright('*******************VS*******************'))
    mdLinks(ruta,'validate-stats').then(result=>{
        let vs=funciones.vs(result);
        console.table(vs)
       
     })
}else if (opciones==='validate' ){
    console.log(chalk.greenBright('*******************Links y su estado*******************'))
    mdLinks(ruta,'validate').then(result => result.forEach(object=>console.table({
        File: object.file,
        href: object.href,
        text: object.text,
        Estado: object.Estado,
        Respuesta: object.Respuesta
    })  ))
} else if (opciones==='stats') {
    console.log(chalk.greenBright('*******************Estadistica*******************'))
    mdLinks(ruta,'stats').then(result=>{
        let estad=funciones.estadistica(result);
        console.table(estad)
    })
} else {
    console.log(chalk.greenBright('*******************Listado de Links*******************'))
    mdLinks(ruta).then((result)=>result.forEach(({href,text,file})=>console.log(
        `${chalk.red(href)}`,
        `${chalk.blue(text)}`,
        `${chalk.green(file)}`
        )))
}