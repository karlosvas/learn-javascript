"use strict";

// const circulo = document.querySelector(".circulo");
// const rectangulo = document.querySelector(".rectangulo");
// const cuadrado = document.querySelector(".cuadrado");

// circulo.addEventListener("dragstart", (e) => {
//   console.log("1"); // Al hacer click.
//   console.log(e.dataTransfer);
//   // Al utilizar setData lo transformamos a texto
//   e.dataTransfer.setData("clase", e.target); // => [object HTMLDivElement]
//   e.dataTransfer.setData("clase", e.target.className); // => circulo
//   console.log(e.dataTransfer.getData("clase"));
// });
// // circulo.addEventListener("drag", () => console.log("2")); // Manteniendo el click.
// // circulo.addEventListener("dragend", () => console.log("3")); // Soltando el click.

// rectangulo.addEventListener("dragenter", () => console.log("1")); // => Verifica que entre en el objeto.
// rectangulo.addEventListener("dragover", (e) => {
//   e.preventDefault(); // => Desbloqueea el objeto para hacer drop.
//   console.log("2"); // => Verifica si sige allí.
// });
// rectangulo.addEventListener(
//   "drop",
//   (e) => console.log(e.dataTransfer.getData("clase")) // Trasportamos informacion de un objeto a otro => circulo
// ); // Verifica cuando sale del objetoi
// rectangulo.addEventListener("dragleave", () => console.log("4")); // Verifica cuando se va del objeto.

// // DataTransfer es el objeto que transmite informacion entre las dos partes de los objetos.

const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas");

zona.addEventListener("dragover", (e) => {
  e.preventDefault();
});

zona.addEventListener("drop", (e) => {
  let n = e.dataTransfer.getData("textura");
  zona.style.background = `url(textura${n}.png)`;
});

for (let i = 1; i < texturas.childElementCount + 1; i++) {
  document
    .querySelector(`.textura${i}`)
    .addEventListener("dragstart", (e) => trasferTextura(i, e));
}

const trasferTextura = (n, e) => {
  e.dataTransfer.setData("textura", n);
};
