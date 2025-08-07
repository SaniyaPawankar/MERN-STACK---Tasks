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
while(num<=100){
    console.log(num);
    num++;
}

// Even numbers from 1 to 100 using while loop
let evenNum = 1;
while(evenNum <= 100){
    if(evenNum % 2 == 0){
        console.log("Even Number: "+evenNum)
    }
    evenNum++;
}

// Odd numbers from 1 to 100 using while loop
let oddNum = 1;
while(oddNum <= 100){
    if(oddNum % 2 !=0){
        console.log("Odd Number: " + oddNum);
    }
}

// factorials

/* Note : - [if a variable is involve in multiplication/division then initilize with 1
if add/sub then 0 */

let fact = 1;
let number = 5;
while(number > 0){
    fact = fact * number;
    number--;
}
console.log("Factorial: "+fact);