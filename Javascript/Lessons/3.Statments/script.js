/* --------------------------------------------------Conditional Statements------------------------------------------------------------------------------------------------- */

// Conditional Statements allow us to execute different blocks of code based on certain conditions.

// For example, we can use conditional statements to check if a number is even or odd, or to determine the largest number among several inputs.


// 1) if statement
// The if statement executes a block of code if a specified condition is true.
// Syntax:
// if (condition) {
//     // code to be executed if condition is true  
// }

// Example:
let number = 10;
if( number > 5){
    console.log("The number is greater than 5");
}


// 2) if-else statement 
// The if-else statement executes one block of code if a condition is true, and another block if it is false.
// Syntax:
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

// Example:
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// 3) Nested if statement
// Nested if statements allow you to check multiple conditions by placing one if statement inside another.
// Syntax:
// if (condition1) {
//     if (condition2) {
//         // code to be executed if condition1 and condition2 are true
//     }
// }

// Example:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else {
    if (score >= 80) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C");
    }
}


// 4) if else if statement
// The if-else if statement allows you to check multiple conditions in sequence. If one condition
// is true, the corresponding block of code is executed.
// Syntax:
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else if (condition3) {
//     // code to be executed if condition3 is true
// } else {
//     // code to be executed if none of the conditions are true
// }
// Example:
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature > 20) {
    console.log("It's a warm day.");
} else if (temperature > 10) {
    console.log("It's a cool day.");
} else {
    console.log("It's a cold day.");
}


/* ---------------------Task----------------------------------- */

let a = window.prompt("Enter a Number: ");
let b = window.prompt("Enter another Number: ");
let c = window.prompt("Enter a third Number: ");
let d = window.prompt("Enter a fourth Number: ");
// let e = window.prompt("Enter a fifth Number: ");

a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);
// e = Number(e);

// if(a > b && a > c && a > d && a > e){
//     console.log("The largest number is: " + a);
// }else if ( b > c && b > d && b > e){
//     console.log("The larget number is: " + b);
// }else if(c > d && c > e){
//     console.log("The larget number is: " + c);
// }else if(d > e){
//     console.log("The largest number is: " + d);
// }else{
//     console.log("The largest number is: " + e);
// }


if (a > b) {
    if (a > b) {
        if (a > c) {
            if (a > d) {
                console.log("The larget number is: " + a);
            }
        }
    }
} else if (b > c) {
    if (b > d) {
        console.log("The larget number is: " + b);
    }
} else if (c > d) {
    console.log("The largest number is: " + c);
} else {
    console.log("The largest number is: " + d);
}