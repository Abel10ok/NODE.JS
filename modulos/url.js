const miUrl = new URL(
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
); //nos llega esta url

console.log(miUrl.hostname); //www.ejemplo.org.
console.log(miUrl.pathname); //cursos/programacion.
console.log(miUrl.searchParams); //ordenar => vistas, nuvel =>1

console.log(miUrl.searchParams.get("ordenar"));
console.log(miUrl.searchParams.get("nivel"));
