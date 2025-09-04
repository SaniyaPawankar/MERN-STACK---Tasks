/* ----------------------------------------------------Type Casting in Javascript-------------------------------------------------------------- */

// Javascript is a dynamically typed language , meaning variables can hold values of any type without decalaring the type.
// Type casting refers to converting one data type to another, and it happens in two main ways:


/* 1) Implicit Type Conversion(Type Coercion):
Javascript automatically converts data types behind the scenes when needed.

Examples:

console.log("5" + 10); // "510" - Number is converted to string
console.log("5" - 2); // 3 - String is converted to number
console.log(true + 1); // 2 - Boolean is converted to number
console.log(null + 5); // 5 - Null is converted to number
console.log(undefined + 5); // NaN - Undefined cannot be converted to a number
console.log("5" * "2"); // 10 - Both strings are converted to numbers

Rules :

1) + opeartor with a string results in string concatenation.
2) - , * , / operators convert strings to numbers if possible.
3) Boolean values are converted to numbers: true becomes 1, false becomes 0.
4) null is converted to 0, while undefined results in NaN when used in arithmetic
operations.
*/

/* 2) Explicit Type Conversion(Type Casting):
   You can manually convert values using built-in functions or constructors.

   1) Number -> String 

   let num = 42;
   console.log(String(num)); // "42"
   console.log(num.toString()); // "42"

   2) Number -> Boolean

    let num = 0;
    let num1 = 1;
    console.log(Boolean(num)); // false
    console.log(Boolean(num1)); // true


    3) String -> Number

    let str1 = "123";
    let str2 = "abc";
    console.log(Number(str1));     // 123
    console.log(Number(str2));     // NaN

    4) String -> Boolean

    let str3 = "hello";
    let str4 = "";
    console.log(Boolean(str3)); // true
    console.log(Boolean(str4)); // false

    5) Boolean -> Number

    let bool1 = true;
    let bool2 = false;
    console.log(Number(bool1)); // 1
    console.log(Number(bool2)); // 0

    6) Boolean -> String

    let bool3 = true;
    let bool4 = false;
    console.log(String(bool3)); // "true"
    console.log(String(bool4)); // "false"
 */


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Common Use Cases

/* 1.Form Input Handling
Form inputs in html are always received as strings, even if users enter numbers.

Example: 

HTML:
// <input type="text" id="age" value="25">

Js:

let age = document.getElementById("age").value;  // "25" (string)
let numericAge = Number(age);                    // 25 (number)

To perform numeric operations or comparisions.

2.Boolean Logic/Conditional Checks

let username = "";

if (Boolean(username)) {
  console.log("User is logged in");
} else {
  console.log("Please enter a username");
}

To treat empty strings, 0, null, undefined as false in conditionals.


3.Comparision

Ensuring correct type comparison using === (strict equality):

let a = "5";
let b = 5;

console.log(Number(a) === b); // true

Avoid unexpected results due to implicit coercion in ==.

4.Calculations in UI

When doing mathematical operations with values from input fields:

let width = "10";
let height = "5";

let area = Number(width) * Number(height); // 50

Prevent string concatenation like "10" * "5".

5.String Display or Logging 

Converting a number, boolean,or object to string for user output or logging.

let score = 95;
alert("Your score is: " + String(score));

// Ensures the score is displayed as a string, not concatenated with other strings.

*/