const { read } = require("fs");
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.end("hola mundo");
});

servidor.listen(3000, () => {
  console.log("escuchando puerto 3000");
});
