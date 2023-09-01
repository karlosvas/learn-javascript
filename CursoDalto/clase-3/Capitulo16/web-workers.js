"use strict";

// Dedicated worker La interfaz Worker de la API de Web Workers representa una tarea en segundo plano que se puede crear a través de un script, que puede enviar mensajes a su creador.
const worker = new Worker("../worker.js"); // => Constructor del worker
const button = document.querySelector(".button");

worker.addEventListener("message", (e) => {
  console.log(e.data);
  worker.terminate();
  // Una vez se a ejecutado, no dejará que sea ejecutado de nuevo por accidente, finaliza la ejecucion del Web worker.
});

const ejecutarBucle = () => {
  worker.postMessage("Hola que tal");
  // worker.postMessage() Envia mensajes a el worker desde el script prinmcipal.
};

button.addEventListener("click", () => ejecutarBucle());

const loadData = async (div) => {
  const req = await fetch("../big-informacion.txt");
  const res = await req.json();
  document.querySelector(div).innerHTML = res;
};

/*
Seervice worker
Definición: Un Service Worker es un tipo especial de trabajador en segundo plano en JavaScript que se ejecuta de forma independiente y se utiliza principalmente para habilitar funciones avanzadas en aplicaciones web, como la capacidad de trabajar sin conexión, notificaciones push y el almacenamiento en caché de recursos.

Same-Origin. No podremos llamar a otras paginas sin que sean del mismo origen.

Shared Woorker
Definición: Un Shared Worker es otro tipo de trabajador en segundo plano en JavaScript que se puede compartir entre varias instancias de una misma página web o incluso entre varias pestañas o ventanas de un mismo navegador. Estos trabajadores compartidos pueden comunicarse entre sí y con la página principal.
*/
