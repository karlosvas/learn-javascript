// Los objetos se crean a través de los prototipos en vez de instanciación en si
let objeto = {
  propiedad: "datos",
};

// Los objetos no tiene prototipo (number,string,objet)
let variable = function () {};
console.log(objeto); // => Object
console.log(objeto.__proto__); // => El prototipo padre de todos los elementos o datos son objetos.
console.log(variable.prototype); // => Creacion de prototipo.

// Con pototype se acccede a los pototipopos que nosotros creamos, mientras que con __prototype__ accedemos
// a los protoytipos que ya estan creados
let string = "String";
console.log(string.__proto__); // => Accedemos al prototypo en este caso "String" y el __proto__ object.
console.log(string.prototype); // => undefined. No esta creando el prototipo a diferecnia de crear una función.
console.log(variable.prototype); // => accedemos al prototipo creado de la función.
console.log(variable.prototype.__proto__); // => Accedemos al ptototipo object que contiene después de nosotros crear el prototipo de la funcion.

// Prtototipes chain es la cadena de prototipos con que contienen los pototipos.

/*
Todos los prototipos heredan el prototipo object.
Caracteristicas:
Es mutable, cuando creamos el prototipo son mutables, y pueden ser llamados.
Si yo crea un objeto ese objeto va  aeredar propiedades de su prototipo.
*/

// Propiedad proto (dunder proto)
let array = [];
console.log(array); // => Accedemos a el length y al nombre del prototiopo.
console.log(array.__proto__); // => Accedemos a todos los métodos de un array accediendo a su prototipo Array

class Objeto {
  constructor() {}
  hablar() {
    console.log("hola");
  }
}

const objeto2 = new Objeto();

objeto2.__proto__.hablar = () => {
  console.log("Modificado desde dentro del prototipo");
};

console.log(objeto2);

// Podremos mutar los prototipos de un array, para poder utilizarlo como objeto.
let arr = [];
arr.__proto__ = objeto2;

arr.hablar(); // => Hablando desde adentro.
arr.__proto__.__proto__.hablar(); // => Lo mismo que la de arriba

objeto2.hablar = () => {
  console.log("Hablando desde afuera");
};

arr.hablar(); // => Hablando desde afuera.
arr.__proto__.hablar(); // => Lo mismo que la de arriba
