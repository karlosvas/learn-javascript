"use strict";
let edad = 25;
edad > 18
  ? (console.log("Si"), console.log("Si x2"))
  : (console.log("No"), console.log("No x2"));

/// rest
let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";
let arr = [valor1, valor2, valor3];
console.log(valor1, valor2, valor3);
console.log(arr);
console.log(...arr);

let fruit1 = ["apple", "banana", "orange"];
let friut2 = [...fruit1, "kiwi", "manzana"]; // => Gracias a esto podemos concatenar arrays.
let friut3 = [fruit1, "kiwi", "manzana"]; // =>  Esto generara un array con una subarray mas los otros parámetros.
console.log(friut2);
console.log(friut3);
console.log(fruit1);
