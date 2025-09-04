// Defination :- A function in Javascript is a reusable block of code designed to perform a specific task which can be called multiple times.

// Ways to create a function / module

// 1) Using function keyword

function function_name(args[optional]) {
    //function body
    // return statement(optional)
}

// 2) ES6(Arrow / Fat Arrow Functions, Modules, Callbacks)

let function_name = (args[optional]) => {
    //function body
    // return statement(optional)
}

// Note : Arrow functions are top-order code and are not hoisted.
// Traditional function declarations are hoisted (can be used before defination).


// Calling a function

function_name(args[optional]);

// Types of functions 

// 1) No arguments, no return

function greet() {
    console.log("Hello!");
}

// 2) Arguments, but no return

let name = "Ayush";

function greet(name) {
    console.log("Hello " + name);
}

// 3) No arguments, return value

function getNumber() {
    return 10;
}

// 4) Arguments, Return value

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));


// Function Declaration :
//  A function declaration is simply the statement where you declare the function with its name, parameters, and body.
// In JavaScript, a declaration automatically acts as a definition, because it includes the body.
// Function declarations are hoisted → can be called before they are written. 

// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Calling before declaration (works because of hoisting)
console.log(greet("Saniya"));  // Output: Hello Saniya


// Function Defination 

// A function definition is the actual implementation (body) of the function.
// It specifies what the function does.
// In JavaScript, when we write a declaration with a body, it’s both declaration + definition at the same time.
// Functions can also be defined using function expressions or arrow functions.

// Function Definition (via expression)
const greet = function (name) {
    return "Hello " + name;
};

console.log(greet("Saniya")); // Output: Hello Saniya

// Key Points:-
// Function Declaration → Uses function keyword, is hoisted.
// Function Definition → The actual implementation (can be via declaration, expression, or arrow).
// In JavaScript, declaration already includes definition (unlike C/C++ where declaration ≠ definition).


// Declaration = Tells JS that a function exists (with body in JS).
// Definition = The code inside that function that executes.