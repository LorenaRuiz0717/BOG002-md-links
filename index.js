// module.exports = () => {
//   // ...
// };

// Metodos Propios de Node
const fs = require('fs');
const path = require('path');
// Librerias instaladas
const marked= require ('marked');


//Leer y resolver ruta
function leerRuta(ruta){
   if (path.isAbsolute(ruta)===false){// si la ruta no es absoluta utilizar el metodo resolve
      const rutaAbsoluta =path.resolve(ruta)//resolve determina la ruta absoluta
      buscandoMd(rutaAbsoluta)//con la ruta resuelta ejecutamos buscandoMd
      console.log('La ruta ingresada es '+ rutaAbsoluta);
   }else{
     buscandoMd(ruta) // si la ruta es absoluta, ejecutamos buscandoMd
      console.log('Ruta absoluta verficada' +ruta)  
   }
  }
  

// Leer los archivos de la  ruta
function buscandoMd(rutaIngresada) {//aqui hacer promesa, ¿resolviendo archivosMd?
const archivosMd=[];
if(fs.lstatSync(rutaIngresada).isFile()){// si la ruta ingresada es un archivo
  if(path.extname(rutaIngresada) == ".md"){// se compara su extension con "md"
    archivosMd.push( //se almacena nombre del archivo y su ruta 
      {archivo:fs.readFileSync(rutaIngresada),
        ruta: (rutaIngresada)});
        console.log('Archivo md encontrado en la ruta '+rutaIngresada)
        console.log('Archivos md '+archivosMd)
        leermd(archivosMd)
  }else{
    console.log('Archivo md no encontrado en la ruta '+ rutaIngresada)
    console.log('Archivos md '+Object.values(archivosMd))
    
  }
}else{
 let  archivos= fs.readdirSync(rutaIngresada);//si la ruta no es un archivo, leemos el directorio
 archivos.map(archivo=>{
   const rutaDirectorio=path.join(rutaIngresada,archivo);
   const todosArchivos= buscandoMd(rutaDirectorio);
   console.log('Archivos md '+Object.values(archivosMd))
   leermd(archivosMd)
  //  archivosMd=archivosMd.concat(todosArchivos);
 });
};

// console.log('Archivos md '+Object.values(archivosMd))
// console.log('Archivos md '+archivosMd.length)
return archivosMd;

}

//     
// files.forEach(file => {
// if (path.extname(file) == ".md"){
// archivosMd.push(file)

// // console.log(rutaMd)
// console.log(archivosMd)
  
//   // leermd()
//   })

//leer md
function leermd(){
  // console.log('traje'+archivosMd)
  fs.readFile('README.md', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    }



    leerRuta('archivosMd')
    leerRuta('README.md')




