/* ------------------------------------------------JavaScript Operators------------------------------------------------------------------- */

// Operators are symbols used to perform operations on operands (values/variables).

// let a = 10;
// let b = 10;
// let result = a + b;  // 20

// In the expression a + b = 20:
// Operands: a, b, 20
// Operators: +, =

// Types of Operators:
// 1. Arithmetic Operators : + (addition), - (subtraction), * (multiplication), / (division), % (modulus), ** (exponentiation)
// let sum = a + b;          // Addition
// 2. Assignment Operators : = (assigns value), += (adds and assigns), -= (subtracts and assigns), *= (multiplies and assigns), /= (divides and assigns), %= (modulus and assigns)
// let c = 5;
// 3. Comparison Operators : == (equal to), === (strict equal), != (not equal), !== (strict not equal), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)
// let isEqualTo = (a == b);  // true
// 4. Logical Operators : && (logical AND), || (logical OR), ! (logical NOT)
// let isEqual = (a === b);  // true
// 5. Bitwise Operators : & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), >>> (unsigned right shift)
// let bitwiseAnd = a & b;  // Bitwise AND
// 6. Ternary Operator : condition ? expr1 : expr2
// let isAdult = (age >= 18) ? "Adult" : "Minor";
// 7. Member Access Operator: . (dot operator) and [] (bracket operator) for accessing properties of objects or elements of arrays
// let person = { name: "John", age: 30 };
// let personName = person.name;  // Accessing property using dot operator


/* ------------------------------------------------Arithmetic Operations Using Two Variables---------------------------------------------------- */

let num1 = 15;
let num2 = 5;
console.log("Addition: " + (num1 + num2));        // 20
console.log("Subtraction: " + (num1 - num2));     // 10
console.log("Multiplication: " + (num1 * num2));  // 75
console.log("Division: " + (num1 / num2));        // 3
console.log("Modulus: " + (num1 % num2));         // 0
