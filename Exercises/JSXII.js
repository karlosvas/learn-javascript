/************************************************DESAFIO***********************************************
Longest Palindromic Substring Nivel de dificultad - Medium
Dada una string s, retorna el string  palindrómico más largo  en s. 

Ejemplo 1:
Input: s = "babad"
Output: "bab"
Explicación: "aba" también es una respuesta válida.
Ejemplo 2:
Input: s = "cbbd"
Output: "bb" 

Restricciones:
🔴 1 <= s.length <= 1000
🔴 s consisten en solo dígitos y letras.


function longestPalindrome(s){
    textInvert= "";
    solucion = "";
    for(i = s.length -1; i >= 0 ;i--){
        var actual = s[i];
        textInvert += actual
    }
    for(i = 0; i < s.length; i++){
        if (s[i] == textInvert[i]){
        solucion += textInvert[i]}
    }
    return solucion;
}
console.log(longestPalindrome("babad"))
*/
//SOLUCION INTERNET ALTERNATIVA
function longestPalindrome(s) {
    var longest = "";
    
    for (var i = 0; i < s.length; i++) {
      for (var j = i + 1; j <= s.length; j++) {
        var substring = s.slice(i, j);
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }
    return longest;
  }
  
  function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  console.log(longestPalindrome("babad"));
  