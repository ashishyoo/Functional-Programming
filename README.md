# Functional Programming

## What is Functional Programming?

Functional programming is a style of writing code where programs are built by composing functions that:

- Take inputs and produce outputs without modifying external state (pure functions).
- Treat functions as first-class citizens, meaning they can be passed as arguments, returned from other functions, or assigned to variables (higher-order functions).
- Avoid side effects, such as mutating variables or external data, to ensure predictability (immutability).
- Focus on what to compute rather than how to compute it, making code more declarative.

## 1. Arity

Arity refers to the number of arguments a function takes. In functional programming, understanding a function's arity is crucial for function composition, currying, and creating reusable, modular code.

## 2. Curried Functions

Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument. This enables partial application and enhances function reuse.

## 3. Function Composition

Function composition is the process of combining two or more functions to produce a new function, where the output of one function becomes the input of the next.

## 4. Higher-Order Functions

A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

## 5. Immutability

Immutability means that data cannot be changed once created. In FP, immutability ensures that functions do not produce side effects by modifying external state.

## 6. Pure Functions

A pure function is a function that, given the same input, always produces the same output and has no side effects (e.g., no mutation of external state, no I/O operations).

## 7. Functors

Functors are data structure that holds a value and has a map method that let us apply a function to the values and returns a new instance of same structure with transformed values without changing the container itself.

## Why These Matter in Functional Programming

These concepts are foundational to functional programming because they promote:

- **Modularity**: Breaking down complex logic into small, reusable functions (arity, currying, composition).
- **Predictability**: Ensuring consistent outputs and no side effects (pure functions, immutability).
- **Abstraction**: Simplifying code through reusable patterns (higher-order functions, composition).
