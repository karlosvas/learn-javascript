"use strict";

// Se utiliza para observar si es visible en el doom
const cajas = document.querySelectorAll(".caja");
const verifyVisibility = (entries) => {
  //   const entry = entries[0];
  //   console.log(entry.isIntersecting); // => Nos devuielbe true si la estamos viendo y false si no la venmos.
  for (const entry of entries) {
    if (entry.isIntersecting)
      console.log("Se esta viendo la caja", entry.target.textContent);
  }
};

const options = {
  // root: toma como referencia el viwport.
  rootMargin: "30px", // Nos da el margen de error, positivo se enceuntra entes de tiempo y negativo mas tarde,
  // de modo que utilizando -30px esperara a que la caja sea viata 30px.
  threshord: 0.5, // A que altura de la caja quieres trabajar con el elemento, 0 al principio, 1 al final.
};
const observer = new IntersectionObserver(verifyVisibility, options);
// observer.observe(caja3);

for (const caja of cajas) {
  console.log(caja);
  observer.observe(caja);
}
