// La recursividad es cuando una funcion se llama a si misma.
"strict mode";

/////////////////////CONSOLE//////////////////////////////////////////
const consoleOutput = document.getElementById("console-output");
const originalLog = console.log;
console.log = function (message) {
  originalLog.apply(console, arguments);
  consoleOutput.innerHTML += `<p>${message}</p>`;
};
//////////////////////////////////////////////////////////////////////

const validarEdad = (msg) => {
  let edad;
  try {
    if (msg) edad = prompt(msg);
    else edad = prompt("Introduce tu edad");

    edad = parseInt(edad);

    if (isNaN(edad)) throw "Introduce un número válido para la edad";
    edad > 18
      ? console.log("Eres mayor de edad")
      : console.log("Eres menor de edad");
  } catch (e) {
    validarEdad(e);
  }
};

validarEdad();

// Las clausulas son funciones que retornan otras funciones.
const saludar = (nombre) => {
  return function () {
    console.log(nombre);
  };
};

let saludo = saludar("Pedro");
window.addEventListener("load", saludo);

const changeSize = (size) => {
  document.querySelector(".texto").style.fontSize = `${size}`;
};

document.querySelector(".t12").addEventListener("click", () => changeSize(12));
document.querySelector(".t14").addEventListener("click", () => changeSize(14));
document.querySelector(".t16").addEventListener("click", () => changeSize(16));

//Clausulas, Son partes individuales de código que realizan tareas específicas
// en un programa más grande y funcionan juntas para crear la funcionalidad. completa.
const changeSize2 = (size) => {
  return () => {
    document.querySelector(".texto").style.fontSize = `${size}`;
  };
};

px12 = changeSize2(12);
px14 = changeSize2(14);
px16 = changeSize2(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);
