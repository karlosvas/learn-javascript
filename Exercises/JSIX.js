/* add Binary JSIX - Nível de dificultad - Easy
Dadas dos strings binarias a y b, regreso su suma como una string binaria. 

Ejemplo 1:

Input: a = "11", b = "1"
Output: "100"

Ejemplo 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Restricciones:

🔴 1 <= a.length, b.length <= 104
🔴 a y b consiste solo en caracteres '0' o '1'.
🔴 Cada cadena no contiene ceros a la izquierda, excepto el cero en sí.
*/
function addBinary(a,b){
    let resultado=" ";
    var binario1= parseInt(a,2);
    var binario2= parseInt(b,2);
    suma = binario1 + binario2;
    resultado += suma.toString(2);
    return resultado
}
console.log(addBinary("111", "111"))