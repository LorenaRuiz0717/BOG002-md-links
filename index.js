// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

function buscandoMd() {
files = fs.readdirSync(__dirname);
console.log("\Filenames with the .md extension:");
files.forEach(file => {
if (path.extname(file) == ".md")
	console.log(file);
})

}

fs.readFile('README.md', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  // console.log(data)
})



// const fs = require('fs');
// const path = require('path');

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

// // fs.readFile('README.md', 'utf8' , (err, data) => {
// //   if (err) {
// //     console.error(err)
// //     return
// //   }
// //   console.log(data)
// // })
buscandoMd();