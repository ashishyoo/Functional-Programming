// Array as a functor
const numbers = [1, 2, 3, 4];
const squared = numbers.map((x) => x * x);
console.log(squared); // Output: [1, 4, 9, 16]

// Promise as a functor
const fetchData = Promise.resolve(100);
const transformed = fetchData.then((value) => value / 2);
transformed.then((result) => console.log(result)); // Output: 50

// Object as a functor
function Box(value) {
  return {
    map: function (fn) {
      return Box(fn(value));
    },
    valueOf: function () {
      return value;
    },
  };
}

var box = Box("hello");
var upperCased = box.map(function (str) {
  return str.toUpperCase();
});

console.log(upperCased);
console.log(upperCased.valueOf()); // Output: HELLO
