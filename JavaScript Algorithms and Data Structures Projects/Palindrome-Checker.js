function palindrome(str) {
  // remove caracteres que não são alfanuméricos e converte para minúsculas
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  // verifica se a string é igual ao seu reverso
  return str === str.split("").reverse().join("");
}
