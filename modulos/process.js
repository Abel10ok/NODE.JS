console.log(process);
console.log(process.env); // anviente de ejecucion del programa.
console.log(process.argv); // devuelve arreglo con ubicacion y otros valores.
console.log(process.argv[1]);

for (let i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

console.log(process.memoryUsage()); // uso de memoria.
