// stringIncludes.js
function stringIncludes(substring, string) {
    // Verificamos si la subcadena está incluida en la cadena
    return string.includes(substring);
  }
  
  // Ejemplos de uso
  console.log(stringIncludes("he", "Hello")); // Imprime: false
  console.log(stringIncludes("he", "hello world")); // Imprime: true
  console.log(stringIncludes("World", "hello world")); // Imprime: true
  