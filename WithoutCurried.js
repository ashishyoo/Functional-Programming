function calculateTotal(amount, sign) {
  return `${sign}${amount}`;
}

console.log(calculateTotal(100, "$"));
console.log(calculateTotal(400, "$"));
console.log(calculateTotal(1, "$"));

console.log(calculateTotal(10, "₹"));
console.log(calculateTotal(20, "₹"));
console.log(calculateTotal(50, "₹"));
