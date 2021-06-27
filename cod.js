

//Leyendo directorio, buscando archivos
// function buscandoMd() {
//   files = fs.readdirSync(__dirname);// leemos el directorio
//   console.log("\Filenames with the .md extension:");
//   files.forEach(file => {
//   if (path.extname(file) == ".md")
//   	console.log(file);
//   })
// }

  //  files = fs.readdirSync(__dirname);// leemos el directorio
  //   console.log("\Filenames with the .md extension:");
  //   files.forEach(file => {
  //   if (path.extname(file) == ".md")
  //     console.log(file);
  //   })


// //Leyendo ruta
// function leerRuta(){
// const rutaMd='./archivo.md'; //Almacenamos la ruta
// if (path.isAbsolute(rutaMd)!=true){// si la ruta no es absoluta utilizar el metodo resolve
//   const rutaAbsoluta =path.resolve(rutaMd);//resolve determina la ruta absoluta
//   console.log('La ruta ingresada es '+ rutaAbsoluta);
// }
// buscandoMd()
// }

// function buscandoMd() {
//   files = fs.readdirSync(__dirname);// leemos el directorio
//   console.log("\Filenames with the .md extension:");
//   files.forEach(file => {
//   if (path.extname(file) == ".md")
//   	console.log(file);
//   })
// }
function leerArchivo(){
    fs.readFile('README.md', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      // console.log(data)
    })
    }
    
    
    function buscandoMd() {
      const result=[]
      return leerRuta().then(ruta=>result.push(ruta))
    }
    buscandoMd()
    .then((result,ruta)=>{
      console.log('ruta '+ruta)
      console.log('resultado '+ result)
    
    })
    
    
    
    
    
    
    // const fs = require('fs');
    // const path = require('path');
    // const marcdowtHtml =require('markdown');
    
    // function resolverRutas(path){
    //   let archivo=path.resolve(path)
    //   console.log(archivo)
    //   // buscandoMd()
    //   }
    
    
    // })
    // }
    // resolverRutas();
    
    // function leyendoMd(){
    // fs.readFile('README.md', 'utf8' , (err, data) => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   console.log(data)
    // })
    // }
    
      // function buscandoMd() {
    // files = fs.readdirSync(__dirname);
    // const archivoMd= []
    // console.log("\Filenames with the .md extension:");
    // files.forEach(file => {
    // if (path.extname(file) == ".md")
    // 	console.log('archivoMd '+file);
    //   archivoMd.push(file)
    //   console.log('array'+archivoMd)
    // })
    
    // }
    
    