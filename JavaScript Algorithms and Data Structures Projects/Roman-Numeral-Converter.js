function convertToRoman(num) {
  // define um array de símbolos numerais romanos e seus valores correspondentes
  const romanSymbols = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
  ];

  let result = "";
  for (let i = 0; i < romanSymbols.length; i++) {
    // percorre os símbolos de numeração romana, do maior para o menor
    while (num >= romanSymbols[i].value) {
      // adiciona o símbolo do numeral romano ao resultado enquanto subtrai seu valor de num
      result += romanSymbols[i].symbol;
      num -= romanSymbols[i].value;
    }
  }
  return result;
}
