const archivo = [
  {
    Archivo: '* [Pokémon](src/data/pokemon/pokemon.json):1\r\n' +
      '* [Markdown](https://github.com/tcort/markdown-link-extractor) 2\r\n' +
      '  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto\r\n' +
      '  y Johto, junto con sus respectivas estadísticas usadas en el juego\r\n' +
      '  [Google](www.google.com).3\r\n' +
      '  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)4\r\n' +
      '  -  [Probando wwww](www.facebook.com) .5\r\n' +
      '  [MdLinks](https://github.com/LorenaRuiz0717/BOG002-md-links) 6\r\n' +
      '  [FailMdLinks](https://github/LorenaRuiz0717/BOG002-md-links) 7\r\n' +
      '  [Gatitos](https://http.cat/) 8\r\n' +
      '  [Gatitos](https://http.cat/) 8\r\n' +
      '  [Gatitos](https://http.cat/) 8',
    Ruta: 'C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md'
  }
]

const links = [{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github.com/tcort/markdown-link-extractor",
  "text": "Markdown"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://www.google.com",
  "text": "Google"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://www.facebook.com",
  "text": "Probando wwww"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github.com/LorenaRuiz0717/BOG002-md-links",
  "text": "MdLinks"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github/LorenaRuiz0717/BOG002-md-links",
  "text": "FailMdLinks"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
},
{
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
}]

const linksValidados = [{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github.com/tcort/markdown-link-extractor",
  "text": "Markdown"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://www.google.com",
  "text": "Google"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://www.facebook.com",
  "text": "Probando wwww"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github.com/LorenaRuiz0717/BOG002-md-links",
  "text": "MdLinks"
},
{
  "Estado": 404, "Respuesta": "Fail", "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://github/LorenaRuiz0717/BOG002-md-links",
  "text": "FailMdLinks"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
},
{
  "Estado": 200,
  "Respuesta": "OK",
  "file": "C:\\Users\\Laboratoria\\OneDrive\\Desktop\\BOG002-md-links\\LinksPrueba.md",
  "href": "https://http.cat/",
  "text": "Gatitos"
}]

const mocks = {
  archivo,
  links,
  linksValidados
}
module.exports = mocks