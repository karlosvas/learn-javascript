/* Valid Parentheses Level - Easy

Dada una cadena que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determine si la cadena de Input es válida. Una cadena de Input es válida si:

Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
Los corchetes abiertos deben cerrarse en el orden correcto.
Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo.
 

Ejemplo 1:

Input: s = "()"
Output: true

Ejemplo 2:

Input: s = "()[]{}"
Output: true

Ejemplo 3:

Input: s = "(]"
Output: false
 

Restricciones:

🔴 1 <= s.length <= 104
🔴 s consta de paréntesis solo '()[]{}'. */

function isValid(str) {
  let pila = [];
  let mapping = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (iterar in str) {
    // Forma menos utilizada let letra = str.charAt(iterar);
    letra = str[iterar];
    if (letra === '(' || letra === '[' || letra === '{') {
      pila.push(letra);
    } else if (pila.length === 0 || pila[pila.length - 1] !== mapping[letra]) {
      return false;
    } else {
      pila.pop();
    }
  }
  return pila.length === 0;
}

console.log(isValid("[]"));