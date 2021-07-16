#!/usr/bin/env node

const { result } = require("lodash");
const { mdLinks } = require("./mdLinks");
const funciones = require("./index.js");
const chalk = require("chalk");
const [, , ...args] = process.argv
const ruta = process.argv[2]
const opciones = process.argv[3]
// console.log(opciones)

if (opciones==='validate' ){
    console.log(chalk.greenBright('*******************Links y su estado*******************'))
    mdLinks(ruta,'validate').then(result => result.forEach(({href,text,file,Estado,Respuesta})=>console.log(
        `${chalk.yellowBright(href)}`,
        `${chalk.blue(text)}`,
        `${chalk.green(file)}`,
        `${chalk.red(Estado)}`,
        `${chalk.white(Respuesta)}`,
        )))
} else if (opciones==='stats') {
    console.log(chalk.greenBright('*******************Estadistica*******************'))
    mdLinks(ruta,'stats').then(result => console.log(funciones.estadistica(result)))
} else {
    console.log(chalk.greenBright('*******************Listado de Links*******************'))
    mdLinks(ruta).then((result)=>result.forEach(({href,text,file})=>console.log(
        `${chalk.red(href)}`,
        `${chalk.blue(text)}`,
        `${chalk.green(file)}`
        )))
}

// // si opciones = vs debe retornar Total unicos y rotos
// if (opciones==='vs') {
//     mdLinks(ruta,'stats').then(result => 
//     console.log(funciones.estadistica(result.forEach(({Total,LinksRotos,LinksUnicos}))
//         `${chalk.red(Total)}`,
//         `${chalk.blue(LinksRotos)}`,
//         `${chalk.green(LinksUnicos)}`,
//         ))) 
//  }// si opciones = validate debe retornar lista de links con su estado   
// else if (opciones==='validate' ){
//     console.log(chalk.greenBright('*******************Links y su estado*******************'))
//     mdLinks(ruta,'validate').then(result =>result.forEach(({href,text,file,Estado,Respuesta})=>
//     console.log(
//     `${chalk.red(href)}`,
//     `${chalk.blue(text)}`,
//     `${chalk.green(file)}`,
//     `${chalk.yellow(Estado)}`,
//     `${chalk.red(Respuesta)}`
//     )))
// }// si opciones = stats debe retornar Total y unicos 
// else if (opciones.art1==='stats') {
//     mdLinks(ruta,opciones).then(result => console.log(funciones.estadistica(result)))
// } else {
//     mdLinks(ruta).then((result)=>result.forEach(({href,text,file})=>console.log(
//         `${chalk.red(href)}`,
//         `${chalk.blue(text)}`,
//         `${chalk.green(file)}`
//         )))
// }





// if (opciones.art1==='vs'&& opciones.art2==='stats') {
//     mdLinks(ruta,'stats').then(result => console.log(funciones.estadistica(result)))
    
// }else if (opciones.art1==='validate' ){
//     mdLinks(ruta,'validate').then(result => console.log(result))
// } else if (opciones.art1==='stats') {
//     mdLinks(ruta,opciones).then(result => console.log(funciones.estadistica(result)))
// } else {
//     mdLinks(ruta).then((result)=>result.forEach(({href,text,file})=>console.log(
//         `${chalk.red(href)}`,
//         `${chalk.blue(text)}`,
//         `${chalk.green(file)}`
//         )))
// }