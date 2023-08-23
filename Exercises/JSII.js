// Palindrome number
/*Dado un entero x, devuelve verdadero si x es un palíndromo  y falso en caso contrario.
Ejemplo:
Input: x = 121
Output: true
Explicación: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda.

Ejemplo 2:
input: x = -121
output: false
Explicación: De izquierda a derecha, se lee -121. De derecha a izquierda,
se convierte en 121-. Por lo tanto no es un palíndromo.
*/

function isPalindrome(x) {
    let y = x.toString().split("").reverse().join("");
    console.log(y)
    if (y == x) return true;
    return false;
}
console.log(isPalindrome(12));