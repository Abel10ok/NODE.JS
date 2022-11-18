const ordenarProducto = (producto) => {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando : ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("ordenando una taza");
      } else {
        reject("no disponible");
      }
    }, 2000);
  });
};

const procesarPedido = (respuesta) => {
  return new Promise((resolve) => {
    //no siempre es necesario el reject.
    console.log("Procesando respuesta");
    console.log(`La respuestas fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por la compra");
    }, 4000);
  });
};

// ENCADENAR PROMESAS
// ordernarProducto("taza")
//   .then((respuesta) => {
//     console.log(`respuesta recibida`);
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// UTILIZANDO ASYNC - AWAIT

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
