const EventEmitter = require("events");

const emisorProductos = new EventEmitter(); //nuevo obj que nos permite emitir eventos.

//ejemplo cuando ocurra evento de compra llamamos una funcion, puede tener mas de un parametro o ninguno.
emisorProductos.on("compra", (total) => {
  console.log(`Se realizo una compra por ${total}`);
});

//emitir un evento llamado compra.
emisorProductos.emit("compra", 2000);
