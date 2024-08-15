// palindrome.js

function palindrome(str) {
    // Convertimos la cadena a minúsculas para evitar problemas de mayúsculas
    str = str.toLowerCase();
    // Eliminamos espacios en blanco y caracteres especiales
    str = str.replace(/[^a-zA-Z0-9]/g, '');
  
    // Convertimos la cadena en un array de caracteres
    const arr = str.split('');
    // Invertimos el array
    const reversedArr = arr.reverse();
    // Unimos los elementos del array invertido en una nueva cadena
    const reversedStr = reversedArr.join('');
  
    // Comparamos la cadena original con la invertida
    return str === reversedStr;
  }
  
  // Ejemplos de uso
  console.log(palindrome("hello")); // Imprime: false
  console.log(palindrome("hannah")); // Imprime: true
  console.log(palindrome("A man, a plan, a canal: Panama")); // Imprime: true
  