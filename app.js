//IMPORTAR .
//DAR ACCESO A FUNCIONES Y ELEMENTOS DEFINIDOS EN OTRO MODULO.

// const saludo = require("./saludo.js");

const { saludar, saludarHolaMundo } = require("./saludos.js");

console.log(saludar("abel"));
saludarHolaMundo();
