"use strict";
// navigator.serviceWorker;
// console.log(navigator.serviceWorker);

navigator.serviceWorker.register("../serworkers.js");

// setTimeout(() => {
//   navigator.serviceWorker.postMessage("Mensaje para serworkers");
// }, 2000);

// navigator.serviceWorker.ready.then((res) => console.log(res)); => Service workesrs registrartion
navigator.serviceWorker.ready.then(
  (res) => res.active.postMessage("Mensaje para el servidor") // Mensaje para el Service Workers
);

// De esta manera nos aseguraremos con ready de que los serviceworks estan cargados como para poder enviar mensajes.
navigator.serviceWorker.addEventListener("message", (e) => {
  console.log("Mensaje recivido del Service Workers: ", e.data);
});
