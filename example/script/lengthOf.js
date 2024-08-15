function lengthOf(str) {
    if (str === "") {
      return "Invalid input";
    } else {
      return str.length;
    }
  }
  
  // Ejemplos de uso y salida en la consola
  console.log(lengthOf("hello")); // Imprime: 5
  console.log(lengthOf(""));     // Imprime: Invalid input
  console.log(lengthOf("Hola, mundo!")); // Imprime: 12