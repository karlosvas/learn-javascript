/* happy Number JSX - Nível de dificultad - Easy
Escriba un algoritmo para determinar si el número n es feliz.

Un número feliz es un número definido por el siguiente proceso:

Comenzando con cualquier entero positivo, reemplace el número por la suma de los cuadrados de sus dígitos.
Repita el proceso hasta que el número sea igual a 1 ( donde permanecerá ), o bucles sin cesar en un ciclo que no incluye 1.
Esos números para los cuales este proceso termina en 1 son felices.
retorna true si n es un número feliz, y false si no.
 

Ejemplo 1:

Input: n = 19
Output: true

Explicación:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Ejemplo 2:

Input: n = 2
Output: false
 

Restricciones:

🔴 1 <= n <= 231 - 1
*/

function isHappy(n){
  intento = n.toString();
  let resultado = 0;
  let continuar = true;
  let numeroIntentos = 0;

  function intentar(){
    for(i in intento){
    num = intento[i];
    resultado += num * num;
    if(i == intento.length -1){
    intento = resultado.toString();
    numeroIntentos++;
    resultado = 0}
    }
  }
  
  while(continuar){
    intentar();
    if(intento == 1){return true
    }else if(numeroIntentos == 50){return false}
    else{resultado = 0;continuar = true}
  }
}
console.log(isHappy(19))
console.log(isHappy(3))