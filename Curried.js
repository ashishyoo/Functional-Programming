function calculate(sign) {
  return function (amount) {
    return `${sign}${amount}`;
  };
}

let totalUS = calculate("$");
console.log(totalUS(100));
console.log(totalUS(400));
console.log(totalUS(1));

let totalNP = calculate("₹");
console.log(totalNP(10));
console.log(totalNP(20));
console.log(totalNP(50));
