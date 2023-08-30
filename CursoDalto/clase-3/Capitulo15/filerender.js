"use strict";

// Detecta cuando un input cambaid de valor.
const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
  leerArchivos(archivo.files);
  leerArchivo(archivo.files);
  leerUrl(archivo.files);
});

const leerArchivo = (ar) => {
  const reader = new FileReader();
  reader.readAsText(ar);
  reader.addEventListener("load", (e) => {
    // console.log(e);
    // console.log(e.currentTarget.result);
    console.log(JSON.parse(e.currentTarget.result));
    // Gracias a esto podremos leer un JSON que envio el usuario.
  });
};

const leerArchivo2 = (ar) => {
  for (let elemento of ar) {
    console.log(elemento);
  }
};

// leer Archivos multiples
const leerArchivos = (ar) => {
  for (let element of ar) {
    const reader = new FileReader();
    reader.readAsText(element);
    reader.addEventListener("load", (e) => {
      console.log(JSON.parse(e.currentTarget.result));
    });
  }
};

// Añadir imagenes, ReadAsDataUrl()
const leerUrl = (ar) => {
  for (let element of ar) {
    const reader = new FileReader();
    reader.readAsText(element);
    reader.addEventListener("load", (e) => {
      let newImg = `<img src="${e.currentTarget.result}">`;
      document.querySelectorAll(".resultado").innerHTML += newImg;
    });
  }
};
