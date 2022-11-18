const http = require("http");

const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
  const { method } = req; //extraer metodo de solicitud.

  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end("metodo usado no puede ser manejado por el servidor");
  }
});

const manejarSolicitudGET = (req, res) => {
  const path = req.url;

  if (path === "/") {
    res.writeHead(200, {
      "conten-type": "application/json",
    }); //modificar cabezera
    res.statusCode = 200; //procesar adecuadamente se asignn por defecto lo pongo por modo ejemplo
    res.end("primer servidor");
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCurso.programacion));
  }

  res.statusCode = 404; //recurso no encontrado.
  return res.end("recurso solicitado no existe");
};

const manejarSolicitudPOST = (req, res) => {
  const path = req.url;
  if (path === "/cursos/programacion") {
    let cuerpo = "";
    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
    });
    req.on("end", () => {
      console.log(cuerpo);

      //convertir a objeto js
      cuerpo = JSON.parse(cuerpo);
      console.log(cuerpo);
      console.log(cuerpo.titulo);
    });
    res.statusCode = 200;
    return res.end("el servidor recibio solicitud POST");
  }
};

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en el puerto ${PUERTO}`);
});
