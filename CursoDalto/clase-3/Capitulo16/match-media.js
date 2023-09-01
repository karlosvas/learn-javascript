"use strict";

const mql = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");
/*console.log(mql.matches); => Dice si es verdadero o falso el parámetro, en este caso pregunta si es
mallor que esa resolución.
*/
console.log(mql);
mql.addEventListener("change", () => {
  if (mql.matches) caja.classList.replace("caja", "resposive-caja");
  else if (caja.className == "resposive-caja")
    caja.classList.replace("resposive-caja", "caja");
});
// Las mediaquerry deven utilizarse en CSS no para dear estilos desde JS.

addEventListener("visibilitychange", (e) => {
  console.log(
    "Se cambio de pestaña ahora su estado es",
    e.target.visibilityState
  );
});
