// const mdLinks = require('../mdLinks.js');
const {leerRuta,extraerLinks,validarEstado,estadistica,} = require('../index.js');
const rutaRelativa = 'LinksPrueba.md';
const rutaAbsoluta = "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md";
const mocks = require('./mocks.js');
const axios = require("axios");

describe('leerRuta', () => {
  test('deberia ser una funcion', () => {
    expect(typeof leerRuta).toBe("function")
  });
   test("deberia resolver la ruta relativa a absoluta, leer los archivos, retornar un objeto con la lectura", () => {
   expect(leerRuta(rutaRelativa)).toEqual(mocks.archivo)
   })
  test("deberia retornar la ruta absoluta,leer los archivos, retornar un objeto con la lectur", () => {
    
    expect(leerRuta(rutaAbsoluta)).toEqual(mocks.archivo)
})
})


describe('extraerLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof extraerLinks).toBe('function')
  })
  test('extraer deberia retornar un array de links', () => {
    expect(extraerLinks(mocks.archivo)).toEqual(mocks.links)
  })

})

describe ('validarEstado',()=>{
  test('deberia ser una funcion', () => {
    expect(typeof validarEstado).toBe('function')
    
  })
})