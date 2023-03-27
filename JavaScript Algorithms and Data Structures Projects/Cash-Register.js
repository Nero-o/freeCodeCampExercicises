function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let change = cash - price;
  let totalCID = cid.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
  let output = { status: null, change: [] };

  if (totalCID < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  if (totalCID === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  cid = cid.reverse();

  let result = cid.reduce((acc, curr) => {
    if (change >= currencyValues[curr[0]]) {
      let currentValue = 0;
      while (
        change >= currencyValues[curr[0]] &&
        curr[1] >= currencyValues[curr[0]]
      ) {
        currentValue += currencyValues[curr[0]];
        curr[1] -= currencyValues[curr[0]];
        change -= currencyValues[curr[0]];
        change = Math.round(change * 100) / 100;
      }
      acc.push([curr[0], currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);

  if (result.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = result;
  return output;
}
