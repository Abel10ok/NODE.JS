// SISTEMA DE ARCHIVOS
//CONTIENE FUNCIONALIDAD MUY UTIL PARA TRABAJAR CON EL SISTEMA DE ARCHIVOS.

//TODOS LOS METODOS SON ASINCRONOS POR DEFECTO.

const fs = require("fs");

//leer archivo, luego se llama a la funcion que va a contener el error, o el contenido.
fs.readFile("./modulos/index.html", "utf-8", (err, contenido) => {
  if (err) {
    throw err; // trowh nos permite detener el programa en el error y nos da mas info.
    console.log(err);
  }
  console.log(contenido);
});

//SYNC NO NECESITAMOS QUE MUESTRE ERROR YA SE QUE HACE DE FORMA SYNCRONICA, GUARDAMOS EL RESULTADO EN UNA VARIABLE.
const archivo = fs.readFileSync("./modulos/index.html", "utf-8");

// console.log(archivo);

//cambiar nombre de un archivo.
fs.rename("./modulos/index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Nombre cambiado exitosamente");
});

//agregar contenido al final de un archivo, si el archivo ya existe lo crea.
fs.appendFile("./modulos/index.html", "<p>hola</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("archivo actualizado");
});

//reemplazar todo el contenido del archivo, lo crea si no existia.
fs.writeFile("./modulos/index.html", "contenido nuevo", (err) => {
  if (err) {
    throw err;
  }
  console.log("contenido reemplazado");
});

//eliminar archivos.
fs.unlink("./modulos/main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("eliminado");
});
