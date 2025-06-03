let name = "Ashish";

function greet() {
  console.log("Namaste, I'm " + name);
}

greet(); // Output: Namaste, I'm Ashish
name = "Yeju";
greet(); // Output: Namaste, I'm Yeju

let evenNums = [2, 4, 6, 8, 10];
console.log(evenNums.splice(0, 3)); // Output: [ 2, 4, 6 ]
console.log(evenNums.splice(0, 3)); // Output: [ 8, 10 ]
