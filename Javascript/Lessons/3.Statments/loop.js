/*--------------------------------------------------Looping Statements--------------------------------------------------------------*/

// Looping statements are used to execute a block of code repeatedly until a specified condition is met.

// The most common looping statements in JavaScript are for, while, and do...while.

// 1. While Loop : 

// The while loop executes a block of code as long as a specified condition is true.

//While Syntax:
/* mwhile(condition){
   code to be executed
   update condition
}
*/

// Example: 
let i = 0;
while (i < 5) {
    console.log("While Loop: " + i);
    i++;
}

// 1 to 100 using while loop

let num = 1;
while (num <= 100) {
    console.log(num);
    num++;
}

// Even numbers from 1 to 100 using while loop
let evenNum = 1;
while (evenNum <= 100) {
    if (evenNum % 2 == 0) {
        console.log("Even Number: " + evenNum)
    }
    evenNum++;
}

// Odd numbers from 1 to 100 using while loop
let oddNum = 1;
while (oddNum <= 100) {
    if (oddNum % 2 != 0) {
        console.log("Odd Number: " + oddNum);
    }
}

// factorials

/* Note : - [if a variable is involve in multiplication/division then initilize with 1
if add/sub then 0 */

// let fact = 1;
// let number = 5;
// while (number > 0) {
//     fact = fact * number;
//     number--;
// }
// console.log("Factorial: " + fact);


// let num1 = 1;
// while (num1 <= 100) {
//     let fact = 1;
//     let i = 1;

//     while (i <= num1) {
//         fact *= i;
//         i++;
//     }

//     console.log("Factorial of " + num1 + " is: " + fact);
//     num++;
// }


// Sum Of digits of a number using while loop
let number = 12345;
let sum = 0;
let digit = 0;

while(number > 0){
    digit = number % 10; //get the last digit
    sum  = sum + digit; //add the digit to sum
    number = parseInt(number / 10); // remove the last digit
}
console.log("Sum of digits: " + sum);


// Armstrong Number using while loop
let start = 1;
let end = 1000;
while(start <= end){
    let num = start;
    let sum = 0;
    let digit = 0;
    while(num > 0){
        digit = num % 10;
        sum = sum + (digit * digit * digit); // for 3 digit armstrong number
        num = parseInt(num / 10);
    }
    if(sum === start){
        console.log(start + " is an Armstrong number");
    }
    start++;
}