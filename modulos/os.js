// SISTEMA OPERATIVO (N0 ES UN MODULO GLOBAL).
//INFORMACION DEL SISTEMA OPERATIVO DONDE SE EJECUTA NODE.JS

const os = require("os");

console.log(os.type()); //acceso al tipo de sistema operativo donde se ejecuta nuestra app de nose.

console.log(os.homedir()); //directorio principal del sistema operativo.
console.log(os.uptime()); //tiempo en el que se a estado ejecutando el sistema operativo en segundos.
console.log(os.userInfo()); //informacion del usuario.
