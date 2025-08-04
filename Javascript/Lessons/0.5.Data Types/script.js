/* -----------------------------------------Data Types In Javascript------------------------------------------------------------------------------------- */

// Defination: A data type is a classfication that specifies which type of value a variable can hold. In simpler terms, it tells the computer what kind of data is being stored and how to interpret it.

// Clasification Of Data Types in Javascript:

// 1. Primitive Data Types: These are the most basic data types in JavaScript. They include:
/*  1. Number
    2.BigInt
    3.String
    4.Boolean
    5.Undefined
    6.Null
    7.Symbol
 */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* 1.Number : Javascript has one number type for all numeric values -- no int, float, double, short, long like in C/C++ or java. Internally, all numbers are stored as 64-bit floating point.

Example :
let num1 = 42; // Integer
// Range: -(2^53 - 1) to 2^53 - 1 → -9007199254740991 to 9007199254740991

let num2 = 3.14; // Floating-point number (Range -2^53 to 2^53)
// Same range as Number: ~ ±1.7976931348623157e+308
// Precision: up to 17 decimal digits

let num3 = -7; // Negative number (Range -2^53 to 2^53)
// Range: Same as Integer → -9007199254740991 to 9007199254740991

let num4 = 0; // Zero
// A valid number. Also note: -0 exists in JS

let num5 = 1e6; // Scientific notation (1 million)
// Equivalent to: 1000000
// Range still within normal Number range

let num6 = 2.5e-3; // Scientific notation (0.0025)
// Equivalent to: 0.0025

let num7 = Number.MAX_VALUE; // Maximum value
 Maximum representable number
// ≈ 1.7976931348623157e+308

let num8 = Number.MIN_VALUE; // Minimum value  //  Smallest positive non-zero number
// ≈ 5e-324 (NOT the most negative number!)

let num9 = Number.NaN; // Not a Number
// Returned for invalid math operations like 0/0 or "abc"/2

let num10 = Number.POSITIVE_INFINITY; // Positive infinity
// Returned when result exceeds max range or by 1 / 0

*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* 2.BigInt : For integers larger than 2^53 - 1, JavaScript provides the BigInt type. It allows you to work with arbitrarily large integers without losing precision.
let bigInt1 = 12345678901234567890123456789012345678901234567890n; // BigInt literal (ends with 'n')
let bigInt2 = BigInt("12345678901234567890123456789012345678901234567890"); // BigInt from string
let bigInt3 = BigInt(12345678901234567890); // BigInt from number (will lose precision if number is too large)

Usage : 1) Introduced in ES2020, BigInt allows for safe arithmetic on large integers.
// 2) BigInt can be used in arithmetic operations, but mixing with regular numbers requires explicit conversion.
let bigSum = bigInt1 + bigInt2; // Addition
 */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* 3.String : A string is a sequence of characters used to represent text. Strings can be enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
let str1 = "Hello, World!"; // Double quotes
let str2 = 'JavaScript is fun!'; // Single quotes
let str3 = `Template literals allow for multi-line strings and interpolation: ${str1}`; // Backticks
let str4 = String(123); // Convert number to string

Notes : 1) 2 bytes per character (UTF-16)
        2) Strings are immutable
 */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* 4.Boolean : A boolean represents a logical entity and can have two values: true or false. It is often used in conditional statements.
let isTrue = true; // Boolean true
let isFalse = false; // Boolean false
let isEqual = (5 === 5); // Comparison returns a boolean
let isGreater = (10 > 5); // true
let isLess = (3 < 1); // false
let isNull = (null === null); // true
let isUndefined = (undefined === undefined); // true
let isString = (typeof "Hello" === "string"); // true
let isNumber = (typeof 42 === "number"); // true

Used in: 
1) Conditional statements (if, while, etc.)
2) Logical operations (AND, OR, NOT)
3) Boolean expressions (comparisons, checks)
 */

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5.Undefined : A variable that has been declared but not assigned a value is of type undefined. It indicates the absence of a value.
let unassignedVar; // Declared but not assigned
let assignedVar = undefined; // Explicitly assigned undefined
let nullVar = null; // Null is different from undefined

let x ;
console.log(x); // undefined

Notes: 
1) Default value for unintialized variables
2) Type of undefined is "undefined"
3) Used to check if a variable has been assigned a value
*/

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 6.Null : Null is a special value that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object.
let nullVar = null; // Explicitly assigned null
let emptyObject = {}; // An empty object, not null
let emptyArray = []; // An empty array, not null
let noValue = null; // No value assigned

* Notes:
1) Represents intentional absence of value
2) Type of null is "object" (this is a historical bug in JavaScript)
3) Used to indicate that a variable should not point to any object
*/

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 7.Symbol : A symbol is a unique and immutable primitive value that can be used as an identifier for object properties. Symbols are often used to create private or hidden properties in objects.
let sym1 = Symbol("description"); // Create a new symbol with an optional description
let sym2 = Symbol("description"); // Another symbol with the same description
let sym3 = Symbol.for("sharedSymbol"); // Create or retrieve a shared symbol

notes:
1) Unique and immutable primitive value
2) Used as object property keys
3) Symbols are not equal to each other, even if they have the same description
4) Useful for creating private properties in objects
*/



/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2. Non-Primitive Data Types: These are more complex data types that can hold collections of values or more complex entities. They include:
/* 1. Object : An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects or functions.
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["Air Conditioning", "Navigation", "Bluetooth"],
    start: function() {
        console.log("Car started");
    }
};

notes: 
1) Objects are mutable and can be modified after creation.
2) They can contain properties (key-value pairs) and methods (functions).
3) Objects can be nested, meaning an object can contain other objects or arrays.
4) Objects are used to represent real-world entities and their attributes.
5) Objects can be created using object literals, constructors, or classes.
*/

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 2. Array : An array is a special type of object that holds an ordered collection of values. Arrays can contain elements of any data type, including other arrays or objects.
let fruits = ["Apple", "Banana", "Cherry"]; // Array of strings
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let mixedArray = [42, "Hello", true, null, { key: "value" }, [1, 2, 3]]; // Mixed data types
let emptyArray = []; // An empty array

notes: 
1) Arrays are zero-indexed, meaning the first element is at index 0.
2) They can hold elements of different data types.
3) Arrays are mutable, allowing you to add, remove, or modify elements.
4) Common methods include push(), pop(), shift(), unshift(), and splice() for manipulating arrays.
5) Arrays can be created using array literals ([]) or the Array constructor.
*/

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 3. Function : A function is a block of code that can be called to perform a specific task. Functions can take parameters and return values.
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
function greet(name) {
    console.log(`Hello, ${name}!`); // Prints a greeting message
}

notes: 
1) Functions are first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
2) Functions can be defined using function declarations, function expressions, or arrow functions.
3) Functions can have default parameters and rest parameters for handling variable numbers of arguments.
4) Functions can be invoked with or without the 'new' keyword, depending on whether they are constructor functions.
5) Functions can be nested, meaning you can define functions inside other functions.
*/

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* 4. Date : The Date object is used to work with dates and times in JavaScript. It provides methods for getting and setting date and time values.
let currentDate = new Date(); // Current date and time  
let specificDate = new Date("2023-10-01T12:00:00Z"); // Specific date and time
let timestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
let dateFromTimestamp = new Date(timestamp); // Create a Date object from a timestamp
let year = currentDate.getFullYear(); // Get the current year
let month = currentDate.getMonth(); // Get the current month (0-11)
let day = currentDate.getDate(); // Get the current day of the month
let hours = currentDate.getHours(); // Get the current hour (0-23)
let minutes = currentDate.getMinutes(); // Get the current minutes (0-59)
let seconds = currentDate.getSeconds(); // Get the current seconds (0-59)
let formattedDate = currentDate.toISOString(); // Format date as ISO string

notes: 
1) The Date object can be created using the Date constructor or by parsing date strings.
2) Dates are represented as milliseconds since January 1, 1970 (Unix epoch).
3) The Date object provides methods for getting and setting various components of a date (year, month, day, etc.).
4) Date methods can be used to perform date arithmetic, such as adding or subtracting days.
5) The Date object can be formatted to various string representations using methods like toISOString(), to
*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* 5. RegExp : A regular expression (RegExp) is a pattern used to match character combinations in strings. It is often used for searching, replacing, or validating text.
let regex1 = /abc/; // Regular expression literal
let regex2 = new RegExp("abc"); // Regular expression constructor
let regex3 = /\d+/; // Matches one or more digits
let regex4 = /^[A-Z]/; // Matches a string starting with an uppercase letter
let regex5 = /hello/i; // Case-insensitive match for "hello"

notes:
1) Regular expressions can be created using literal notation (//) or the RegExp constructor.
2) They can include special characters like \d (digit), \w (word character),
    \s (whitespace), and more.
3) Regular expressions can be used with methods like test() to check for matches or exec() to extract matched substrings.
4) Flags can be added to regular expressions, such as 'g' for global search, 'i' for case-insensitive search, and 'm' for multiline search.
5) Regular expressions are powerful tools for pattern matching and text manipulation in strings.

*/