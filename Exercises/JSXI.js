/*BONUS JSXI nivel de dificultad - Easy
encontrarNumerosPrimos

Crea una función en JavaScript que reciba como parámetro un número entero y devuelva un array
con todos los números primos menores o iguales a ese número.*/

function encontrarNumerosPrimos(num) {
  let array = [num];
  let cadena = "";
  let esPrimo= 0;
  for(i = 1; i <= array; i++){
    resto = num % [i];
    cadena += resto
    if(resto == 0){esPrimo += 1}
  }
  if (esPrimo == 2){
    console.log(`El numero ${array} es primo`)
    return true
  }else{
    console.log(`El numero ${array} no es primo`)
    return false}
}
console.log(encontrarNumerosPrimos(4))
console.log(encontrarNumerosPrimos(17))