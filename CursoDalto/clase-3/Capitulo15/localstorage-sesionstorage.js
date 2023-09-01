"use strict";

// Local storage, cuando cargamnos la página esa información se pierde, mientras que, Sessión storage aunque cerramos la página
// esa información sigue estadno, se almacena en la sesión.

localStorage.setItem("nombre", "pedro"); // => Storage, el length es la cantidad qde keys que tiene.
// para acceder a los items del storage devemos utiliazr .getStorage()
console.log(localStorage);
console.log(localStorage.getItem("nombre"));

/*
localStorage.setItem() => Añade un item.
localStorage.getItem() => Obtiene el item.
localStorage.removeItem() =>  Remueve ese item.
localStorage.clear() => Nos remueve todos los items del local storage.
*/
const leng = document.querySelector(".div-leng");
const btnEn = document.querySelector(".en");
const btnEs = document.querySelector(".es");

const definirIdioma = () => {
  btnEn.addEventListener("click", () => {
    localStorage.setItem("idioma", "en");
    cerrarLeng();
  });
  btnEs.addEventListener("click", () => {
    localStorage.setItem("idioma", "es");
    cerrarLeng();
  });
};

const cerrarLeng = () => {
  leng.style.animation = "desaparecer 1sec forwards";
  setTimeout(() => (leng.style.display = "none"), 1000);
};

const idioma = localStorage.getItem("idioma");
if (idioma === null) definirIdioma();
else {
  console.log(`El idioma es ${idioma}`);
  leng.style.display = "none";
}
