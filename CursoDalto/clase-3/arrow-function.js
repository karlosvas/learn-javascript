let saludar = () => {
  console.log("Hola");
  console.log("Como estas");
};
// Las fuinciioones flechas no pueden almacenar el resultado de retornar algo.
res = saludar();
console.log(res); // => undefined

// Si utilizamos unicamente una linea de codigo no hace falta utilizar  {}
saludar = () => console.log("saludar2");
saludar(); // => saludar2

saludar = () => (nombre = "saludar3");
let solution = saludar();
console.log(solution); // => saludar3

saludar = () => {
  nombre = "saludar4";
};
solution = saludar();
console.log(solution); // => Undefined, las arrow function no devuelben el valor
// si van entre {} a no ser que hagamos un return.

saludar = function (res) {
  return (nombre = res);
};
saludar = (res) => (nombre = res);
resultado = saludar("Este es el res");
console.log(resultado); // => undefined
