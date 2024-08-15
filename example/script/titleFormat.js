function titleFormat(title) {
    // Convertimos la primera letra a mayúscula
    const firstLetter = title.charAt(0).toUpperCase();
    // Convertimos el resto del título a minúsculas
    const restOfTitle = title.slice(1).toLowerCase();
    // Concatenamos ambas partes
    const formattedTitle = firstLetter + restOfTitle;
  
    // Retornamos el título formateado
    return formattedTitle;
  }
  
  // Ejemplos de uso
  console.log(titleFormat("hello world"));
  console.log(titleFormat("HELLO world"));
  console.log(titleFormat("HellO WOrLd"));