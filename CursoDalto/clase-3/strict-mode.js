"use strict";

// Use strict nos obliga a declarar la variable
// nombre = "Carlos"; => nombre is not defined
let nombre = "Carlos";
console.log(nombre);

const obj = {};
Object.defineProperty(obj, "nonbre", { value: "pedro", writable: false });
// writeable es una propiedad que indica que no se puede rescibir.
// obj.nonbre = "lucas"; => error es solo de lectura, sin el use strict esto no funciona.
console.log(obj.nonbre);
Object.preventExtensions(obj);
// obj.apellido = "dalto"; / => Error porque no permite extensiones sin use strixt no daria nada.
// console.log(obj.apellido); // => Error, sin el use strict daria undefined.

// Strings
const obj2 = { nombre: "pedro" };
obj2.apellido = "dalto";
console.log(obj2.apellido); // => dalto
// No se puede aádir una propiedad a un string
const obj3 = "Ejemplo";
// obj3.apellido = "resultado"; // => Error no se puede crear la propiedad
// console.log(obj3.apellido); // => Error

// Functiion, con use stirng no deja llamar a una fucnmion si no hemos especificado sis parámetros.
// function hablar(texto, texto) { => Daria error devido a que el parametro esat duplicado esto sin use strict no ocurre.
//   console.log(texto);
// }
// hablar("Hola");
function hablar(texto) {
  console.log(texto);
}
hablar("Hola");

let variable = "nombre";
// delete variable; => Con use strict eliminaria la variable yy ya no podriamos acceder a ella sin use strict
// podriamos acceder a ella incluso despues de eliminarla. solo dejaria eliminar propiedades.
const leche = {
  marca: "Asturiana",
};
console.log(leche.marca); // => Asturiana
delete leche.marca;
console.log(leche.marca); // => Undefined

// Las palabras reservadas no pueden ser utilizadas como variable, por ejemplo podria utilizarse package,
// palabra reservada como una variable

// .this es un contructor podremos llamrlo con new function().
function villan(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    console.log(`Hola ${nombre}`);
  };
}
let Dark = new villan("dark");
console.log(Dark.nombre); //=> dark
Dark.saludar(); // => Hola dark

// Nuemros octales
// console.log(023); => Esto es base 8 se podria ejecutar sin use strict con el da error.
console.log(0o23); // => 19
// use strict tiene que utrilizarse al principio del programa.
