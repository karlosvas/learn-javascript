onmessage = function (e) {
  console.log("Worker: Mensaje recivido del main script");
  const result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage("Porfavor escribe un numero");
  } else {
    const workerResult = "Result: " + result;
    console.log("Worker: Enviando mensaje de vuelta a main script");
    postMessage(workerResult);
  }
};
