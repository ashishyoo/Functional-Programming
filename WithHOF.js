let radius = [2, 4, 6, 8];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

// Function taking a function
const calculate = (logicFn, radius) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logicFn(radius[i]));
  }
  return output;
};

console.log(calculate(area, radius));
console.log(calculate(circumference, radius));
console.log(calculate(diameter, radius));

console.log("--------------------------");

// Function returning a function
const greet = (message) => {
  return function (user) {
    return `${message}, ${user}`;
  };
};

const sayHello = greet("Hello");
console.log(sayHello("Yeju"));

console.log("--------------------------");

function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("Server started"); // Output: [INFO] Server started
errorLogger("Something went wrong"); // Output: [ERROR] Something went wrong
