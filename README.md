# Functional Programming

## Table of Contents

1. [What is Functional Programming?](#what-is-functional-programming)
2. [Core Concepts](#core-concepts)
   - [Arity](#1-arity)
   - [Curried Functions](#2-curried-functions)
   - [Function Composition](#3-function-composition)
   - [Higher-Order Functions](#4-higher-order-functions)
   - [Immutability](#5-immutability)
   - [Pure Functions](#6-pure-functions)
   - [Functors](#7-functors)
3. [Quick Reference](#quick-reference)

## What is Functional Programming?

Functional programming is a style of writing code where programs are built by composing functions that:

- Take inputs and produce outputs without modifying external state (pure functions).
- Treat functions as first-class citizens, meaning they can be passed as arguments, returned from other functions, or assigned to variables (higher-order functions).
- Avoid side effects, such as mutating variables or external data, to ensure predictability (immutability).
- Focus on what to compute rather than how to compute it, making code more declarative.

## 1. Arity

**Arity** refers to the number of arguments a function accepts. Understanding arity is crucial for function composition and currying.

### Example (`Arity.js`)

```javascript
function unary(x) {
  return "Value: " + x; // Arity of 1 (unary)
}

function binary(x, y) {
  return x + y; // Arity of 2 (binary)
}

console.log(unary(5)); // Output: Value: 5
console.log(binary(2, 3)); // Output: 5
```

- **Why it matters**: Functions with clear arity (e.g., unary or binary) are easier to compose or curry. Unary functions are particularly useful in FP for mapping over data structures.

## 2. Curried Functions

**Currying** transforms a function with multiple arguments into a sequence of single-argument functions. This enables partial application, where we can fix some arguments and reuse the function with others.

### Example (`Curried.js`)

```javascript
function calculate(sign) {
  return function (amount) {
    return sign + amount;
  };
}

var totalUS = calculate("$");
console.log(totalUS(100)); // Output: $100
console.log(totalUS(400)); // Output: $400

var totalNP = calculate("₹");
console.log(totalNP(50)); // Output: ₹50
```

- **Contrast with non-curried (`WithoutCurried.js`)**:
  ```javascript
  function calculateTotal(amount, sign) {
    return sign + amount;
  }
  console.log(calculateTotal(100, "$")); // Output: $100
  ```
- **Why it matters**: Currying allows us to create specialized functions (e.g., `totalUS`) from a general one, improving reusability and reducing repetitive code.

## 3. Function Composition

**Function composition** combines two or more functions so that the output of one becomes the input of the next, creating a new function.

### Example (`WithComposition.js`)

```javascript
function trimName(name) {
  return name.trim();
}

function toLowerCaseName(name) {
  return name.toLowerCase();
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

var cleanName = compose(toLowerCaseName, trimName);
console.log(cleanName("  Ashish  ")); // Output: ashish
```

- **Contrast with non-composed (`WithoutComposition.js`)**:
  ```javascript
  var trimmed = trimName("  Ashish  ");
  var cleanName = toLowerCaseName(trimmed);
  console.log(cleanName); // Output: ashish
  ```
- **Why it matters**: Composition creates concise, reusable pipelines, reducing intermediate variables and improving readability.

## 4. Higher-Order Functions

**Higher-Order Functions (HOFs)** are functions that take other functions as arguments or return functions as results.

### Example (`WithHOF.js`)

```javascript
function area(radius) {
  return Math.PI * radius * radius;
}

function calculate(logicFn, radius) {
  var output = [];
  for (var i = 0; i < radius.length; i++) {
    output.push(logicFn(radius[i]));
  }
  return output;
}

var radius = [2, 4, 6];
console.log(calculate(area, radius)); // Output: [12.566..., 50.265..., 113.097...]

function greet(message) {
  return function (user) {
    return message + ", " + user;
  };
}

var sayHello = greet("Hello");
console.log(sayHello("Yeju")); // Output: Hello, Yeju
```

- **Contrast with non-HOF (`WithoutHOF.js`)**:
  ```javascript
  function calculateArea(radius) {
    var output = [];
    for (var i = 0; i < radius.length; i++) {
      output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
  }
  console.log(calculateArea(radius));
  ```
- **Why it matters**: HOFs reduce code duplication by abstracting common patterns (e.g., looping) and enable dynamic behavior (e.g., returning specialized functions).

## 5. Immutability

**Immutability** ensures data isn’t modified after creation, preventing side effects and making code predictable.

### Example (`Immutability.js`)

```javascript
function previewNameChangeImmutable(user, newName) {
  return { ...user, name: newName }; // Creates new object
}

var userProfile = { name: "Ashish", bio: "Developer" };
var preview = previewNameChangeImmutable(userProfile, "Bob");
console.log(preview.name); // Output: Bob
console.log(userProfile.name); // Output: Ashish (unchanged)
```

- **Contrast with mutable (`Mutability.js`)**:
  ```javascript
  function previewNameChange(user, newName) {
    user.name = newName; // Modifies original
    return user;
  }
  var userProfile = { name: "Ashish", bio: "Developer" };
  var preview = previewNameChange(userProfile, "Bob");
  console.log(preview.name); // Output: Bob
  console.log(userProfile.name); // Output: Bob (modified)
  ```
- **Why it matters**: Immutability prevents unintended changes, making code safer and easier to reason about, especially in complex applications.

## 6. Pure Functions

**Pure functions** always produce the same output for the same input and have no side effects (e.g., no mutation, no randomness).

### Example (`PureFunction.js`)

```javascript
function greet(name) {
  return "Namaste, I'm " + name;
}

console.log(greet("Ashish")); // Output: Namaste, I'm Ashish
console.log(greet("Ashish")); // Output: Namaste, I'm Ashish (same input, same output)

function sliceArray(arr) {
  return arr.slice(0, 3); // Doesn’t modify original
}

var evenNums = [2, 4, 6, 8, 10];
console.log(sliceArray(evenNums)); // Output: [2, 4, 6]
console.log(evenNums); // Output: [2, 4, 6, 8, 10] (unchanged)
```

- **Contrast with impure (`ImpureFunction.js`)**:

  ```javascript
  var name = "Ashish";
  function greet() {
    console.log("Namaste, I'm " + name); // Depends on external state
  }
  greet(); // Output: Namaste, I'm Ashish
  name = "Yeju";
  greet(); // Output: Namaste, I'm Yeju (different output)

  var evenNums = [2, 4, 6, 8, 10];
  console.log(evenNums.splice(0, 3)); // Output: [2, 4, 6]
  console.log(evenNums); // Output: [8, 10] (modified)
  ```

- **Why it matters**: Pure functions are predictable, testable, and safe, reducing bugs caused by unexpected changes.

## 7. Functors

A **functor** is a data structure that holds a value and provides a `map` method to transform the value while preserving the structure of container.

### Example (`Functors.js`)

```javascript
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
console.log(upperCased.valueOf()); // Output: HELLO
```

- **Other functors**:
  - **Array**: `var nums = [1, 2, 3]; console.log(nums.map(function(x) { return x * 2; })); // [2, 4, 6]`
  - **Promise**: `Promise.resolve(100).then(function(x) { return x / 2; }).then(function(x) { console.log(x); }); // 50`
- **Why it matters**: Functors enable predictable transformations (e.g., mapping over arrays or promises) without altering the container’s structure, promoting reusable code.

## Quick Reference

| Concept                    | Purpose                                                | Key Benefit                         |
| -------------------------- | ------------------------------------------------------ | ----------------------------------- |
| **Arity**                  | Number of function arguments                           | Enables composition and currying    |
| **Currying**               | Transform multi-arg function into single-arg functions | Partial application and reusability |
| **Composition**            | Combine functions into pipelines                       | Code reuse and clarity              |
| **Higher-Order Functions** | Functions that work with other functions               | Abstraction and flexibility         |
| **Immutability**           | Data that doesn't change                               | Predictability and safety           |
| **Pure Functions**         | No side effects, deterministic                         | Testability and reliability         |
| **Functors**               | Containers with map method                             | Safe transformations                |
