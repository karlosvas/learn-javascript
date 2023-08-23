/* Plus One JSVII - Nível de dificultad - Easy
Te dan un entero grande representado como una matriz entera digits, donde cada digits[i] es el dígito del entero. 
Los dígitos se ordenan de mayor significativo a menos significativo en orden de izquierda a derecha. 
El entero grande no contiene ningún entero principal. i**th*0

Aumenta el entero grande por uno y devuelve la matriz resultante de dígitos.

Ejemplo 1:

Input: dígitos = [ 1,2,3 ]
Output: [ 1,2,4 ]
Explicación: La matriz representa el número entero 123.
El aumento de uno da 123 + 1 = 124.
Por lo tanto, el resultado debe ser [ 1,2,4 ].

Ejemplo 2:

Input: dígitos = [ 4,3,2,1 ]
Output: [ 4,3,2,2 ]
Explicación: La matriz representa el número entero 4321.
El aumento de uno da 4321 + 1 = 4322.
Por lo tanto, el resultado debe ser [ 4,3,2,2 ].

Ejemplo 3:

Input: dígitos = [ 9 ]
Output: [ 1,0 ]
Explicación: La matriz representa el número entero 9.
El aumento de uno da 9 + 1 = 10.
Por lo tanto, el resultado debe ser [ 1,0 ].
 

Restricciones:

🔴 1 <= digits.length <= 100
🔴 0 <= digits[i] <= 9
🔴 digits no contiene ningún encabezado 0.
*/

function plusOne(digits){
    array = []
    for(digito in digits){
        resultado = digits[digito]
        array.push(resultado);
    }
    resultado ++;
    array.pop(); array.push(resultado);
    return array;
}
console.log(plusOne([ 1,2,3 ]))