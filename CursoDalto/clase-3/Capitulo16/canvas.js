"use strict";

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.lineWidth = "4";
// ctx.strokeStyle = "#48e";
// ctx.fillStyle = "#48e";
// ctx.strokeRect(30, 50, 400, 200);
// ctx.fillRect(20, 40, 400, 200);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "4";
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#48e";
ctx.strokeRect(30, 50, 400, 200);
ctx.fillRect(20, 40, 400, 200);
ctx.lineTo(100, 300);
ctx.lineTo(120, 350);
ctx.lineTo(100, 400);
ctx.lineTo(120, 450);
ctx.stroke();

ctx.closePath();
ctx.beginPath();
ctx.lineTo(80, 300); // Desde el punto "cordenadas"
ctx.lineTo(80, 600); // Al punto "cordenadas"
ctx.stroke(); // Dibujarlo.
ctx.closePath(); // Cerrar trazado.
ctx.beginPath(); // Empezar nuevo trazado.

ctx.arc(320, 350, 100, 20, 40);
ctx.stroke();
