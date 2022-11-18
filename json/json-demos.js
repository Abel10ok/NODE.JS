const curso = require("./curso.json");

//lo transformo a objeto js.
console.log(curso);
console.log(curso.titulo);

//convertir un objeto js a formato json.

let infoCurso = {
  titulo: "node.js",
  numVistas: 3500,
  numLikes: 2123,
  temas: ["js", "node.js"],
  publico: true,
};

//objet -> cadena caracteres
//cadena de caracteres en formato json
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);

//cadena de caracteres -> objet

let infoCursoObjet = JSON.parse(infoCursoJson);

console.log(infoCursoObjet);
console.log(typeof infoCursoObjet);

console.log(infoCursoObjet.titulo);
