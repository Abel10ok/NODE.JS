const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("promesa cumplida");
    } else {
      reject("promesa rechazada");
    }
  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//ejemplo de pedido de pizzas
const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido exitoso");
    } else {
      reject("error");
    }
  }, 3000);
});

const manejarPedido = (mensajeConfirmacion) => {
  console.log(mensajeConfirmacion);
};

const rechazoPedido = (mensajeError) => {
  console.log(mensajeError);
};

// miPedidoPizza.then(manejarPedido, rechazoPedido);

miPedidoPizza
  .then((mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
  })
  //   .then(null, (mensajeError) => {
  //     console.log(mensajeError);
  //   });
  .catch((mensajeError) => {
    console.log(mensajeError);
  });

//   const manejarPedido = (mensajeConfirmacion) => {
//     console.log(mensajeConfirmacion);
//   };

//   const rechazoPedido = (mensajeError) => {
//     console.log(mensajeError);
//   };

miPedidoPizza.then(manejarPedido).catch(rechazoPedido);
