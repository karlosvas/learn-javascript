"use strict";
// Worker no tiene window

const ejecutarBucle = () => {
  let i = 0;
  while (true) {
    console.log(i);
    i++;
    if (i == 50000) break;
  }
};

addEventListener("message", (e) => {
  if (e.data.length > 4) {
    console.log(e.data);
    postMessage("Todo bien"); // worker.postMessage() Envia mensajes a el worker desde el script prinmcipal.
    // onmessage() recive mensajes entre el web worker y el script principal
    ejecutarBucle();
  }
});
