let name = "Ashish";

function greet() {
  console.log("Namaste, I'm " + name);
}

greet(); // Output: Namaste, I'm Ashish
name = "Yeju";
greet(); // Output: Namaste, I'm Yeju

console.log("--------------------");

let evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(0, 3)); // Output: [ 2, 4, 6 ]
console.log(evenNums.splice(0, 3)); // Output: [ 8, 10 ]

console.log("--------------------");

let counter = 0;

function increment() {
  counter++;
  return counter;
}

console.log(increment()); // Output: 1

console.log("--------------------");
