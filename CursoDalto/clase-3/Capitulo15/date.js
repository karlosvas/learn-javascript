/* Una API es la interfaz de programación de aplicaciones. (window, alert, promp)
Una API Rest son las que en realidad no son internas de los lenguajes, si no que se envian a otros
sitios webs a cambio de infromación.*/
"use strict";
const fecha = Date(); // => Date es un contructor, pero tiene el prototipo es un string.
const fechaC = new Date(); // => Ahora en vez de un string obtenemos un objeto constructor.
console.log(fecha); // => String
console.log(fechaC); // => {constructor}
console.log(fecha.__proto__);
console.log(fechaC.__proto__);

// getDate() nos devuelbe el dia
// console.log(fecha.getDate()); => Error Los strings no pueden acceder a este metodo
console.log(fechaC.getDate());

/*
fechaC.getDay() => posicion del dia de la semana lunes = 1.
fechaC.getMoth() => posicion del mes enero = 0.
fechaC.getYear() => posicion del año actual - 1900.
fechaC.getMinutes() => Los minutos actuales.
fechaC.getSecods() => Los segundos actuales.
new Dalte(10000000000) UnixTime = El tiempo que transcurre desde el 1 de enero de 1970 en milisegundos.
Date.now() => tiempo que paso desde el 1 de enero de 1970 hasta la fecha actual en milisegundos.
*/
