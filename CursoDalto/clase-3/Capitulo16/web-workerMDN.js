"use strict";

const first = document.getElementById("number1");
const second = document.getElementById("number2");
const result = document.querySelector(".result");

// Se verifica si el navegador soporta Web Workers.
if (window.Worker) {
  // Si es compatible, se crea una instancia del Web Worker especificando su ubicación.
  const myWorker = new Worker("../workerMDN.js");

  // Se utiliza un bucle forEach para iterar sobre los elementos "first" y "second".
  [first, second].forEach((input) => {
    // Se establece un evento "onchange" para cada elemento de entrada (input).
    input.onchange = function () {
      // Cuando se detecta un cambio en el valor de un input, se envían los valores de ambos inputs al Web Worker.
      myWorker.postMessage([first.value, second.value]);
      console.log("Main: Mensaje enviado al worker");
    };
  });

  // Se establece un manejador de eventos "onmessage" para el Web Worker.
  myWorker.onmessage = function (e) {
    // Cuando el Web Worker envía un mensaje de vuelta, se actualiza el contenido del elemento "result" con el mensaje recibido.
    result.textContent = e.data;
    console.log("Main: Mensaje recibido del worker");
  };
} else {
  // Si el navegador no es compatible con Web Workers, se muestra un mensaje de advertencia en la consola.
  console.log("Tu navegador no soporta web workers.");
}
