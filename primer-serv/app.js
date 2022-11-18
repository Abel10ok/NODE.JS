const http = require("http");

// guardar servidor, variable que contiene modulo http, metodo para crear servidor, parametros solicitud http y respuesta http, dentro de la funcion flecha realizar proceso que necesitemos, metodo end enviamos respuesta al cliente.

const servidor = http.createServer((req, res) => {
  console.log("===> req (solicitud)");
  //console.log(req); //req es un objeto
  console.log(req.url); // url
  console.log(req.method); //propocitu de la solicitud
  console.log(req.headers);

  console.log("===> res (respuesta)");
  console.log(res); // res es un ojeto
  console.log(res.statusCode); // codigo de estado (200 ok).
  res.statusCode = 404; //cambiar codigo de estado a not found.
  console.log(res.statusCode);
  res.setHeader("content-type", "application/json"); //modificar la cabezera
  console.log(res.getHeaders());

  //res.end("hola mundo"); // finalizar proceso
});

const PUERTO = 3000;

//escuchar, le decimos que puerto escuchar
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando http://localhost:${PUERTO}`);
});

//ejecutar servidor
// node app.js (nombre archivo)
