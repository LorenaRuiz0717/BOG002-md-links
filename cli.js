#!/usr/bin/env node

const { mdLinks } = require("./mdLinks");
const [, , ...args] = process.argv
const ruta= process.argv[2]
const opciones= process.argv[3]

mdLinks(ruta, opciones)


