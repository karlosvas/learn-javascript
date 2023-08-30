"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
  leerUrl(archivo.files);
});

const leerUrl = (ar) => {
  for (let element of ar) {
    const reader = new FileReader();
    reader.readAsDataURL(element);
    reader.addEventListener("load", (e) => {
      let newImg = `<img src="${e.currentTarget.result}">`;
      document.querySelector(".resultado").innerHTML += newImg;
    });
  }
};
