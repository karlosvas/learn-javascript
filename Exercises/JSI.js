/* Longest Common Prefix

Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.
Si no hay un prefijo común, devuelve un string  vacío "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explicación: No hay un prefijo común entre la entrada strings.

Restricciones:
🔴 1 <= strs.length <= 200
🔴 0 <= strs[i].length <= 200
🔴 strs[i] consta solo de letras minúsculas en inglés. */

function longestCommonPrefix(strs){
    for(elemento in strs){
        let resultado = "";
        let elementos =  strs[elemento];
        for (i = 0; i < elementos.length; i++){
            let letras = elementos[i]
            for(elemento2 in strs){
                let elementos2 = strs[elemento2];
                if (elementos == elementos2){continue};
                for (x = 0; x < elementos2.length; x++){
                    let letras2 = elementos2[x];
                    if (letras2 == letras){resultado += letras; break;}
                }
            }
        }
        if (resultado){console.log(`El elemento ${elementos} y otro elemento coincide con el prefijo ${resultado}.`)
        }else {console.log(`El elemento ${elementos} no tiene coincidenca alguna.`)}
    }
}
longestCommonPrefix(["meet", "fish", "meeo"]);