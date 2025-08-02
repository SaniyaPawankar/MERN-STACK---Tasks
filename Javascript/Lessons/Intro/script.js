// Javascript 

/* Defination : JavaScript is a high level programming language used to create dynamic content for websites. It is lightweight, cross-platform programming language.
It's an interpreted language that executes code line by line, providing more flexibility*/

// Use Of JavaScript: JavaScript is a versatile, dynamically typed programming language that brings life to web pages by making them interactive. It is used for building interactive web applications, supports both client-side and server-side development, and integrates seamlessly with html, css and a rich standard library.

/* Client Side and Server Side Javascript */

// Client Side: Runs in the user's browser, used for interactivity and dynamic content.
console.log("Hello, World!"); // Example of client-side JavaScript
// Server Side: Runs on the server, used for backend operations and database interactions.
// Example of server-side JavaScript (Node.js)

// const http = require('http');

// 1) Javascript is a single-threaded language that executes one task at a time.
// 2) It is an interpreted language which means it executes the code line by line.
// 3) The data type of the variable is decided at run time in JS, which is why it is called dynamically types.


/*--------------------------------------------------------- console: log() static method----------------------------------------------------------------------- */

// The console.log() method is used to print messages to the console, which is useful for debugging and logging information.
console.log("This is a message to the console.");
console.log("The value of x is:", 42);

/* The log() method writes (logs) a message to the console.
The log() method is useful for testing purposes. */

console.log("Hello, " + "World!");
console.log("The sum of 5 and 10 is:", 5 + 10);
console.log(true); // Logs a boolean value


/* -------------------------------------------------------------syntax to create a variable-------------------------------------------------------------*/

// All javascript variables must be identified with a unique name.

// Rules for naming variables:
// 1) Can only start with a letter or a underscore (_)
// 2) Can contain letters, numbers, underscores.
// 3) Cannot contain spaces or special characters (except for underscores)
// 4) Cannot use reserved keywords (like 'var', 'let', 'const', 'function', etc.)

//valid 
let name1 = "Saniya";
let _count = 10;
let $price = 99;

//invalid
// let let = 5;
// let if = 10;


/*-------------------------------------------------------------------Writing JavaScript-------------------------------------------------------------*/
/* External JavaScript:
JavaScript can be written in an external file and linked with HTML using the <script src="file.js"></script> tag.*/


// <!-- index.html -->
/* <script src="script.js"></script> */

// script.js
console.log("This is written using an external JS file!");


// Inline JavaScript
/* JavaScript can also be written directly within HTML using the <script> tag. This is called inline JavaScript. */
// <!-- index.html -->
/* <script>
  console.log("This is inline JavaScript!");   
</script> */

//  Accessing HTML Elements (DOM)
// Use document.querySelector() to select elements from the DOM.


//  Access the first <h1> element
console.log(document.querySelector("h1"));

/* -------------------------------------------------------------------------Data Types in Javascript------------------------------------------------------------------------------------------ */


// JavaScript has several built-in data types, including:

// 1) String: Represents a sequence of characters, enclosed in single or double quotes.
let greeting = "Hello, World!";
// 2) Number: Represents numeric values, both integers and floating-point numbers.
let age_1 = 25;
// 3) Boolean: Represents a logical value, either true or false.
let isStudent = true;
// 4) Undefined: Represents a variable that has been declared but not assigned a value.
let notAssigned;
// 5) Null: Represents an intentional absence of any value.
let emptyValue = null;

// Non-primitive data types
// 1) Object: Represents a collection of key-value pairs.
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
// 2) Array: Represents an ordered list of values.
let fruits = ["apple", "banana", "cherry"];
// 3) Function: Represents a reusable block of code that can be called with arguments.
function greet(name) {
    return "Hello, " + name + "!";
    }
// 4) Symbol: Represents a unique and immutable value, often used as object property keys.
let uniqueSymbol = Symbol("description");


/* -------------------------------------------------------------Statments Vs Expressions--------------------------------------------------------------------------------- */

//Statement: A complete action.

let name2 = "Saniya"; // Statement

// Expression: A unit that resolves to a value.

let result = 5 + 3; // Expression

/* -------------------------------------------------------------Output Methods-------------------------------------------------------------------------------------------------- */

// JavaScript provides several methods to output data, including:
// 1) console.log(): Outputs data to the console, useful for debugging.
console.log("This is a message to the console.");

// 2) alert(): Displays an alert dialog with a message, useful for user notifications.
alert("This is an alert message!");

// 3) document.write(): Writes directly to the HTML document, but not recommended for modern web development.
document.write("This will write directly to the document.");

// 4) window.alert(): Similar to alert(), but can be used in the global scope.
window.alert("This is a window alert message!");

/* -------------------------------------------------------------String Concatenation----------------------------------------------------------------------------------- */

// String concatenation is the process of joining two or more strings together to form a single string.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Using the + operator
console.log(fullName); // Outputs: John Doe

/* -------------------------------------------------------------Taking User Input----------------------------------------------------------------------------------- */

// JavaScript can take user input through various methods, such as prompt dialogs or form inputs.
// 1) prompt(): Displays a dialog box that prompts the user for input.
let userInput = prompt("Please enter your name:");
console.log("User input:", userInput);


let name = prompt("What is your name?");
let age = prompt("How old are you?");
let favColor = prompt("What is your favorite color?");

// Displaying output
alert("Hello " + name + "! You are " + age + " years old and love the color " + favColor + ".");
console.log("User Info: " + name + ", " + age + ", " + favColor);