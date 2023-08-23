"use strict";
/////////////////////CONSOLE//////////////////////////////////////////
const consoleOutput = document.getElementById("console-output");
const originalLog = console.log;
console.log = function (message) {
  originalLog.apply(console, arguments);
  consoleOutput.innerHTML += `<p>${message}</p>`;
};
//////////////////////////////////////////////////////////////////////
const Objeto = {
  nombre: "Carlos",
  saludar: function () {
    console.log(`Hola ${this.nombre}`); // => Hola Carlos
  },
};

const Arrow = {
  nombre: "Carlos",
  saludar: () => {
    console.log(`Hola ${this.nombre}`); // => Hola undefined.
    // .this hace referencia al objeto window en este caso,
    // En las funciones flecha utiliando use strict, this no existe, no se recomienda usar comop método.
  },
};

Objeto.saludar();
Arrow.saludar();

function construirPersona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
const persona = new construirPersona("Carlos", "Vásqeuz");
console.log(persona.nombre);
console.log(persona.apellido);

/*
Esto mismo no puede ser utilizao como funcion felcha
const construirPersona2 = (nombre, apellido) => {
  // => Persona 2 is not a constructor. Las funciones flecha no pueden ser llamadas como constrtuctor.
  this.nombre = nombre;
  this.apellido = apellido;
};
const persona2 = new construirPersona2("Carlos", "Vásqeuz");
console.log(persona2.nombre);
console.log(persona2.apellido);
*/

/* this
saludar()  => En este caso no funcionará, daria error, al ejecutarlo con node, this es un objeto
en vez de ser window. En el caso de no utilizar use strict nos dará uindefined.

function saludar() {
  console.log(`Hola ${this.nombre}`);
}
Esta funcion es igual a saludar
*/
this.nombre = "Window";
const Usuario = {
  nombre: "Adrian",
  saludar: () => {
    console.log(`Soy ${this.nombre}`);
  }, // saludar == saludar: saludar
  // Si la propiedad es igual al valor no hace falta escribirla dos veces.
};
function otroContext() {
  nombre = "Raro"; // Si le definimos cambia, si no le ponemos let lo cambia al global
  // mietras que si utilizamos let o var dejaria de ser this, si lo cambiamos por this.nombre daria error.
  Usuario.saludar();
}
Usuario.saludar(); // => En este caso this si que funciona ya que deja de hacer referencia a window
// y hace referencia a la función desde la que se llama en este caso Usuario.nombre.
otroContext();

/////////////////////////////////////
function saludar() {
  console.log(`Funcion ${this.nombre}`);
}
class newContext {
  constructor() {
    this.nombre = "Raro";
    this.saludar = saludar;
  }
}
const objeto2 = new newContext();
objeto2.saludar();
// saludar(); => No puede ser utilizado como función pero si como método.
// Ante los metodos siempre devemos utilizar function y no las funciones flecha. Porque cuando usamos function
