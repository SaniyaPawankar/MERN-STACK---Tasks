/* --------------------------------------------------Conditional Statements------------------------------------------------------------------------------------------------- */

// Conditional Statements allow us to execute different blocks of code based on certain conditions.

// For example, we can use conditional statements to check if a number is even or odd, or to determine the largest number among several inputs.

/*------------------------------------------------------------Types of Conditional Statements-------------------------------------------------------------------------------------------------*/

// 1) if statement
// The if statement executes a block of code if a specified condition is true.
// Syntax:
// if (condition) {
//     // code to be executed if condition is true  
// }

// Example:
let number1 = 10;
if (number1 > 5) {
    console.log("The number is greater than 5");
}

/*------------------------------------------------------------if-else statement-------------------------------------------------------------------------------------------------*/

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

/*------------------------------------------------------------Nested if statements-------------------------------------------------------------------------------------------------*/

// 3) Nested if statement
// Nested if statements allow you to check multiple conditions by placing one if statement inside another.
// Syntax:
// if (condition1) {
//     if (condition2) {
//         // code to be executed if condition1 and condition2 are true
//     }
// }

// Example:
let score1 = 85;
if (score1 >= 90) {
    console.log("Grade: A");
} else {
    if (score1 >= 80) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C");
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
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

/*------------------------------------------------------------------------Switch Statement-----------------------------------------------------------------------------------------------------------------------------*/

// 5) Switch Statement
// The switch statement allows you to execute different blocks of code based on the value of a variable or expression.
// Syntax:
// switch (expression) {
//     case value1:
//         // code to be executed if expression equals value1
//         break;
//     case value2:
//         // code to be executed if expression equals value2
//         break;
//     // more cases...
//     default:
//         // code to be executed if none of the cases match
// }

// Example:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

/*-----------------------------------------------------------------------------Ternary Operator-------------------------------------------------------------------------------------------------*/

// 6) Ternary Operator
// The ternary operator is a shorthand way to write an if-else statement. It takes
// three operands: a condition, a value if true, and a value if false.
// Syntax:
// condition ? valueIfTrue : valueIfFalse;
// Example:
let isRaining = true;
let weatherMessage = isRaining ? "Take an umbrella." : "Enjoy the sunshine!";
console.log(weatherMessage);
// Example of using the ternary operator to find the largest number among three numbers
let num1 = 5, num2 = 10, num3 = 7;
let largest = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);
console.log("The largest number is: " + largest);
// Example of using the ternary operator to check if a number is even or odd
let numberToCheck = 4;
let isEven = (numberToCheck % 2 === 0) ? "Even" : "Odd";
console.log("The number is: " + isEven);
// Example of using the ternary operator to check if a person is eligible to vote
let voterAge = 20;
let eligibility = (voterAge >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voter status: " + eligibility);
// Example of using the ternary operator to determine the grade based on a score
let score = 85;
let grade = (score >= 90) ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : "D"));
console.log("Your grade is: " + grade);
// Example of using the ternary operator to check if a number is positive, negative, or zero
let number = -5;
let sign = (number > 0) ? "Positive" : (number < 0 ? "Negative" : "Zero");

