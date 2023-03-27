function telephoneCheck(str) {
  //  expressão regular para corresponder a um número de telefone válido nos EUA
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  // teste se a string de entrada corresponde ao regex
  return regex.test(str);
}
