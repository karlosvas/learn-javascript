"use strict";

console.log(history);
/*
.back() => Ir hacia atras en la página.
.forwrad() => Ir hacia adelante en la página.
.lenght() => Tamaño del historial.
.go() => Recarga la página. (1) Donde estamos, (-1) un elementio atrás, (1) un elemento hacia adelante.
*/

// Se crean entradas en el historial.
history.pushState({ nombre: "estado" }, "", "?segundapagina");
console.log(location.href);

addEventListener("popstate", (e) => {
  console.log(e.state);
});

// Hace lo mismo que pushState pero en vez de añadir uno nuevo lo remplaza, no queda registro.
// history.replaceState();
