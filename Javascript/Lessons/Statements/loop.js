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
// let i = 0;
// while (i < 5) {
//     console.log("While Loop: " + i);
//     i++;
// }

// // 1 to 100 using while loop

// let num = 1;
// while (num <= 100) {
//     console.log(num);
//     num++;
// }

// Even numbers from 1 to 100 using while loop
// let evenNum = 1;
// while (evenNum <= 100) {
//     if (evenNum % 2 == 0) {
//         console.log("Even Number: " + evenNum)
//     }
//     evenNum++;
// }

// // Odd numbers from 1 to 100 using while loop
// let oddNum = 1;
// while (oddNum <= 100) {
//     if (oddNum % 2 != 0) {
//         console.log("Odd Number: " + oddNum);
//     }
// }

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
// let number = 12345;
// let sum = 0;
// let digit = 0;

// while (number > 0) {
//     digit = number % 10; //get the last digit
//     sum = sum + digit; //add the digit to sum
//     number = parseInt(number / 10); // remove the last digit
// }
// console.log("Sum of digits: " + sum);


// Armstrong Number using while loop
// let start = 1;
// let end = 1000;
// while(start <= end){
//     let num = start;
//     let sum = 0;
//     let digit = 0;
//     while(num > 0){
//         digit = num % 10;
//         sum = sum + (digit * digit * digit); // for 3 digit armstrong number
//         num = parseInt(num / 10);
//     }
//     if(sum === start){
//         console.log(start + " is an Armstrong number");
//     }
//     start++;
// }

// Prime Number using while loop

// let start = 1;
// let end = 1000;

// while (start <= end) {
//     let num = start;
//     let isPrime = true;
//     if (num <= 1){
//         isPrime = false;
//     } else {
//         let i = 2;
//         while (i < num) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//             i++;
//         }
//     }
//     if (isPrime) {
//         console.log(num + " is Prime");
//     }
//     start++;
// }

//Prime number from 1 to 1000
// let start = 1;
// let end = 1000;

// while (start <= end) {
//     let num = start;
//     let prime = true;
//     if (num == 1) {
//         prime = false;
//     } else {
//         let i = 2;
//         while ((i * i) <= num) {
//             if (num % i === 0) {
//                 prime = false;
//                 break;
//             }
//             i++;
//         }
//     }
//     if (prime) {
//         console.log(num + " is Prime.");
//     }
//     start++;
// }

/*----------------------------------------------------------------------Do-while loop-----------------------------------------------------------------------*/

// Definition:-
// The do...while loop executes a block of code at least once and then repeatedly executes it as long as the condition is true.
// It is different from the while loop because the condition is checked after execution.

//Syntax:-
// do {
//     // code to be executed
// } while (condition);

// Key Points :-
// Always runs at least once — because the condition is checked after the loop body.
// Post-test loop — condition is evaluated after the code block runs.
// Ends when the condition becomes false.
// Useful when you must run the code at least one time regardless of the condition.

// Use:
// When you need to ensure the loop runs at least once (e.g., user input validation, menu-driven programs).

// let count = 1;

// do {
//     console.log("Count is: " + count);
//     count++;
// } while (count <= 5);

// let choice= false

// do {

//     let userNumber = Number(window.prompt("Enter number to check!"))
//     let originalValue = userNumber
//     let reversedValue = 0
//     let currentDigit = null

//     while (userNumber != 0) {
//         currentDigit = userNumber % 10
//         reversedValue = reversedValue * 10 + currentDigit
//         userNumber = parseInt(userNumber / 10)
//     }

//     if (originalValue == reversedValue) {
//         console.log(originalValue + " is a palindrome!")
//     } else {
//         console.log(originalValue + " is not a palindrome!")
//     }

//     keepRunning = window.confirm("Do you wish to continue?")

// } while (choice)

// console.log("Program completed!")


/*------------------------------------------------------------For Loop----------------------------------------------------------------------------------------------------------------- */
// Defination : The for loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true.
// A for loop repeats until a specified condition evaluates to false. It is similar to the java and c for loop.

// For loop syntax:

/* for( initialization; condition; updation ){
      //statements
      //code to execute in each iteration
}*/

/* Initialization :- Executes once before the loop starts(usually used to set a counter).
   Condition :- Checked before each iteration ; loop runs if true.
   Increment/Decrement :- Updates the loop variable after each iteration
 */

// Example :

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//Key points
// 1) Commonly used for counting or iterating over arrays.
// 2) Loop stops when the condition becomes false.
// 3) The initialization, condition, and increment can omitted(but semicolons must remain).
// 4) Can be nested(loop inside another loop).

// Infinite loop 
// for (; ;) {
//    console.log("Runs Forever.");
//    //break;
// }

// only stops with break

// reverse loop
// for (let i = 10; i > 0; i++) {
//    console.log(i);
// }

// Examples:

// 1. Even numbers from 1 to 100

// for (let i = 0; i <= 100; i = i + 2) {
//    console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }

// for (let i = 100; i <= 0; i--) {
//    if (i % 2 != 0) {
//       console.log(i);
//    }
// }


// Prime numbers from 1 to 1000

// for (let i = 2; i <= 1000; i++){
//    let isPrime = true;
//    for (let j = 2; (j * j) <= i; j++) {
//       if(i % j == 0){
//          isPrime = false;
//          break;
//       }
//    }
//    if(isPrime){
//       console.log(i+" is Prime.");
//    }
// }



// Reverse Of a Number
// let digit = 0;
// let rev = 0;
// for (let number = 12345; num > 0; num = (num / 10)) {
//    digit = num % 10;
//    rev = rev * 10 + rev;
// }
// console.log("Reverse of number is"+rev);



//sum of digits

// let sum = 0;
// let digit = 0;
// for (let num = 12345; num > 0; num = parseInt(num/10)){
//    digit = num % 10;
//    sum = sum + digit;
// }
// console.log("Sum of 12345" is "+sum);



//Armstrong number 

// let count=0;
// for (let i = 1; i <= 1000; i++) {
//    let digit = 0;
//    let sum = 0;
   
//    for (let num = i; num > 0; num = parseInt(num / 10)) {
//       digit = num % 10;
//       sum = sum + (digit*digit*digit);
//    }
//    if(sum === i){
//       console.log(sum+" is Armstrong number.");
//       count++;
//    }
// }
// console.log(count)



//Palindrome number or not

// let count = 0;

// for (let i = 1; i <= 1000; i++) {
//     let digit = 0;
//     let reverse = 0;

//     for (let num = i; num > 0; num = parseInt(num / 10)) {
//         digit = num % 10;
//         reverse = reverse * 10 + digit;
//     }

//     if (reverse === i) {
//         console.log(i + " is a Palindrome number.");
//         count++;
//     }
// }

// console.log("Total Palindrome numbers: " + count);
