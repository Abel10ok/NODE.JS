// TEMPORIZADOR O CRONOMETRO.

//CONTIENE FUNCIONES QUE EJECUTAN CODIGO LUEGO DE UN CIERTO PERIODO DE TIEMPO.

//-----------
//setTimeout(funcion, retraso, argumento1, argumento2, ++) para ejecutar codigo luego de un numero especifico de milisegundos.

const mostrarTema = (tema) => {
  console.log(`Estoy aprendiendo ${tema}`);
};

const sumar = (a, b) => {
  console.log(a + b);
};

//pasamos funcion como argumento.

// setTimeout(mostrarTema, 1000, "node.js");
//setTimeout(sumar, 2000, 5, 6);

//--------------
//setImmediate() para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible de forma asincrona), se va a ejecutar despues del codigo sincrono.

// console.log("antes de setimmediate");
// setImmediate(mostrarTema, "node.js");
// console.log("despues de setimmediate");

//--------------
//setInterval(funcion, intervalo, arg1, arg2, ++) para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos.

setInterval(mostrarTema, 2000, "node.js");
setInterval(sumar, 2500, 5, 5);
