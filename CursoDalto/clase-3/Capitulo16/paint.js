"use strict";

const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

let painting = false; // Debe inicializarse en false
let color, linewhidth, difX, difY; // Declarar difX y difY fuera del evento mousedown

canvas.addEventListener("mousedown", (e) => {
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  painting = true;
  color = document.getElementById("color").value;
  linewhidth = document.getElementById("lw").value;
});

canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    const newX = e.clientX - dif.left;
    const newY = e.clientY - dif.top;
    dibujar(difX, difY, newX, newY); // Utilizar las variables difX y difY declaradas anteriormente
    difX = newX; // Actualizar difX y difY para el próximo movimiento
    difY = newY;
  }
});

canvas.addEventListener("mouseup", () => {
  painting = false;
});

const dibujar = (x1, y1, x2, y2) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = linewhidth;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2); // Cambiar moveTo a lineTo para dibujar una línea continua
  ctx.stroke();
  ctx.closePath();
};
