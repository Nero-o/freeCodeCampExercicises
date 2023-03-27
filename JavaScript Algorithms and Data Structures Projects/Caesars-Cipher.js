function rot13(str) {
  // define uma string vazia para armazenar o resultado decodificado
  let result = "";
  // percorre cada caractere na string de entrada
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // se o caractere for uma letra (A-Z), decodifique-o deslocando 13 casas para trás
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    // acrescenta o caractere decodificado à string de resultado
    result += String.fromCharCode(charCode);
  }
  return result;
}
