// La desestructuración se utiliza para extraer valores de estructurasde datos como arreglos, objetos o tuplas, y asignar esos valores a variables individuales de una manera más concisa y legible. Para hacer que el código sea más limpio y eficiente.
const persona = { nombre: "Juan", edad: 30, ciudad: "Ejemploville" };

// Usando desestructuración para extraer valores de un objeto
const { nombre, edad } = persona;

console.log(nombre); // => Juan
console.log(edad); // => 30

////////////////////////////////////////////////////
const suma = (a = 0, b = 0) => {
  // b = typeof b !== "undefined" ? b : 0; => Es lo mismo que b = 0, nos da la opción de que si no introducimos un valor poder ejecutarlo con 0 por defecto.
  console.log(a + b);
};
suma(15);

// Parametro rest, se tiene que ponere siempre adelante.
const suma2 = (frase, ...num) => {
  // ... va  ser igual a transformar el texto en array
  let resultado = 0;
  for (number in num) {
    resultado += num[number];
  }
  // for (let i = 0; i < num.length; i++) {
  //   resultado += num[i];
  // }
  console.log(frase + " " + resultado);
};
suma2("texto", 25, 25, 25);
