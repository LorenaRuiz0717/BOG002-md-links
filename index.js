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
leerRuta('LinksPrueba.md')


//Leer y resolver ruta
function leerRuta(ruta) {
  if (path.isAbsolute(ruta) === false) {// si la ruta no es absoluta utilizar el metodo resolve
    const rutaAbsoluta = path.resolve(ruta)//resolve determina la ruta absoluta
    buscandoMd(rutaAbsoluta)//con la ruta resuelta ejecutamos buscandoMd
    // console.log('La ruta ingresada es '+ rutaAbsoluta);
  } else {
    buscandoMd(ruta) // si la ruta es absoluta, ejecutamos buscandoMd
    // console.log('Ruta absoluta verficada' +ruta)  
  }
}

// Leer los archivos de la  ruta
function buscandoMd(rutaIngresada) {
  let archivosMd = [];
  if (fs.lstatSync(rutaIngresada).isFile()) {// si la ruta ingresada es un archivo,se utiliza para devolver de forma sincrónica información sobre el vínculo simbólico que se utiliza para hacer referencia a un archivo. 
    if (path.extname(rutaIngresada) == ".md") {// se compara su extension con "md"
      archivosMd.push({
        Archivo: fs.readFileSync(rutaIngresada, "utf8"),
        Ruta: rutaIngresada
      }) //se almacena nombre del archivo y su ruta 
      // console.log('Ruta Archivo md'+ rutaIngresada)
      extraerLinks(archivosMd)
    } else {
      console.log('Archivo md No encontrado en la ruta ' + rutaIngresada)
    }
    //console.log(archivosMd)
    return archivosMd
  } else {
    let array = [];
    let archivos = fs.readdirSync(rutaIngresada);//si la ruta no es un archivo, leemos el directorio
    // console.log('Archivos Directorio: '+archivos) 
    archivos.map(archivo => {
      const rutaDirectorio = path.join(rutaIngresada, archivo);
      if (path.extname(rutaDirectorio) == ".md") {// se compara su extension con "md"
        array.push({
          Archivo: fs.readFileSync(rutaDirectorio, "utf8"),
          Ruta: rutaIngresada,
        })
        console.log('Archivos Md del directorio' + rutaDirectorio)
        extraerLinks(array)
      } else {
        console.log('Archivo md No encontrado en la ruta ' + archivo)
      }

      return (array)

    })
  }
}
// buscar links
function extraerLinks(archivos) {
  const arrayLinks = []
  // console.log('Pasando rutas archivos md '+archivosArray[0].Ruta)
  // console.log('Archivos '+archivosArray[0].Archivo)
  archivos.forEach(archivo => {
    const links = markdownLinkExtractor(archivo.Archivo, true);
    // console.log(links) 
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
        // console.log('Este link  ' + link.href + ' No aplica')
      }

    })
    //  console.log(arrayLinks)
    // validarStatus(arrayLinks)
    return arrayLinks
  })
}
const linksPrueba = [
  {
    href: 'https://github.com/tcort/markdown-link-extractor',
    text: 'Markdown',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  },
  {
    href: 'https://www.google.com',
    text: 'Google',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  },
  {
    href: 'https://www.facebook.com',
    text: 'Probando wwww',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  },
  {
    href: 'https://github.com/LorenaRuiz0717/BOG002-md-links',
    text: 'MdLinks',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  },
  {
    href: 'https://github/LorenaRuiz0717/BOG002-md-links',
    text: 'FailMdLinks',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  },
  {
    href: 'https://http.cat/',
    text: 'Gatitos',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  }
]
//validar status links
const validarStatus = (links) => {
  return links.map((link) => axios.get(link.href)
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
}
//  Promise.all(validarStatus(linksPrueba)).then(result => console.log(result))
// console.log(validarStatus(linksPrueba))

const pruebaEstadistica = [
  {
    href: 'https://www.google.com',
    text: 'Google',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 200,
    Respuesta: 'OK'
  },
  {
    href: 'https://www.facebook.com',
    text: 'Probando wwww',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 200,
    Respuesta: 'OK'
  },
  {
    href: 'https://github.com/LorenaRuiz0717/BOG002-md-links',
    text: 'MdLinks',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 200,
    Respuesta: 'OK'
  },
  {
    href: 'https://github/LorenaRuiz0717/BOG002-md-links',
    text: 'FailMdLinks',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 404,
    Respuesta: 'Fail'
  },
  {
    href: 'https://http.cat/',
    text: 'Gatos',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 200,
    Respuesta: 'OK'
  },
  {
    href: 'https://http.cat/',
    text: 'Repetido',
    file: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md',
    Estado: 200,
    Respuesta: 'OK'
  }
]


function estadistica(links) {
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
estadistica(pruebaEstadistica)

//funcion mdlinks q reciba ruta y opciones para el usuario listar-validar-estadistica


