
// module.exports = () => {
//   // ...
// };

// Metodos Propios de Node
const fs = require('fs');
const path = require('path');
// import { lstatSync, readFileSync, readdirSync } from 'fs';
// import { isAbsolute, resolve, extname, join } from 'path';

// Librerias instaladas
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require('axios');
// const { resolve } = require('path');
// const { rejects } = require('assert');
//const marked = require ('marked');

//leerRuta('archivosMd')


//Leer y resolver ruta
const leerRuta = ruta => path.isAbsolute(ruta) ? leerArchivos(ruta) : leerArchivos(path.resolve(ruta))


// Leer los archivos de la  ruta
const leerArchivos = rutaIngresada => {
  let archivosMd = [];
  fs.lstatSync(rutaIngresada).isFile() && path.extname(rutaIngresada) == ".md" ?
    archivosMd.push({
      Archivo: fs.readFileSync(rutaIngresada, "utf8"),
      Ruta: rutaIngresada
    })
    : fs.readdirSync(rutaIngresada).map(archivo => {
      const rutaDirectorio = path.join(rutaIngresada, archivo)
      path.extname(archivo) == ".md" ?
        archivosMd.push({
          Archivo: fs.readFileSync(rutaDirectorio, "utf8"),
          Ruta: rutaIngresada,
        })
        : console.log('Este archivo no es Md: ' + archivo)
      // extraerMd(archivos)

    })

  // extraerLinks(archivosMd)
  // console.log(archivosMd)
  return (archivosMd)
}

// buscar links
function extraerLinks(archivos) {
  const arrayLinks = []
  // console.log('Pasando rutas archivos md '+archivosArray[0].Ruta)
  // console.log('Archivos '+archivosArray[0].Archivo)
  archivos.forEach(archivo => {
    const links = markdownLinkExtractor(archivo.Archivo, true);
    // console.log('estos son links'+links) 
    links.forEach(link => {
      if (link.href.startsWith('http'))//startsWith Determina si el principio de esta instancia de cadena coincide con la cadena especificada.
        arrayLinks.push({
          href: link.href,
          text: link.text,
          file: archivo.Ruta,
        })
      else if (link.href.startsWith('www.')) {
        arrayLinks.push({
          href: 'https://' + link.href,
          text: link.text,
          file: archivo.Ruta
        })
      } else {
        // console.log('No aplica ' + link.href )
      }

    })
    //  console.log(arrayLinks)
  
  })
  return arrayLinks
}

const validarStatus = (links) => {
   const arrayLinks=links.map((link) => axios.get(link.href)
    .then(respuesta => ({
      ...link,//Spread, permite expandir el arreglo
      Estado: respuesta.status,
      Respuesta: respuesta.statusText
    }))
    .catch(e => ({
      ...link,
      Estado: 404,
      Respuesta: 'Fail'
    }))
  )
  //return arrayLinks
   return Promise.all(arrayLinks)
   //.then(result => console.log(result))
  // return Promise.all(validarStatus(links))
}


const estadistica=(links) => {
  let linksUnicos = [...new Set(links.map((link) => link.href))];
  let linksOk = 0
  let linksFail = 0
  links.map(link => {
    if (link.Respuesta == 'OK') {
      linksOk = linksOk + 1
    } else {
      linksFail = linksFail + 1
    }
  })
  return ({
    Total: links.length,
    LinksUnicos: linksUnicos,
    LinKsRotos: linksFail
  })
}
// leerRuta('archivosMd')
const funciones = {
  leerRuta,
  leerArchivos,
  extraerLinks,
  validarStatus,
  estadistica
};
module.exports=funciones