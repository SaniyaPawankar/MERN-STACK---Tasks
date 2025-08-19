

// wap to add two numbers

// function addNumbers(n1,n2,n3){
//     let sum = n1 + n2 + n3;
//     return sum;
// }
// console.log(addNumbers(20,24,50));


/*-----------------------------------------------------------------------------------------------------------------*/
// wap to find square of a number

// function squareOfNumber(num){
//     return num*num;
// }
// console.log(`Square of number is ${squareOfNumber(6)}`);


/*----------------------------------------------------------------------------------------------------*/
//wap to find factorial of a number

// let factorial = (num1) => {
//     let fact = 1;
//     for (let i = 1; i <= num1; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log("Factorial of given number is " + factorial(5));

/*----------------------------------------------------------------------------------------------------------------*/

// wap to reverse a string

// let reverseString = (str) => {
//     let str2 = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2 = str2 + str.charAt(i);
//     }
//     return str2;
// }

// console.log(`String after reversal = ${reverseString("Hello World!")}`);

/*----------------------------------------------------------------------------------------------------------------------------*/

// wap to check if a number is prime or not

// function isPrimeNumber(number) {
//     let isPrime = true;
//     if (number == 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; (i * i) <= number; i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     if (isPrime) {
//         console.log(number + " is a Prime Number.");
//     }else{
//          console.log(number + " is Not a  Prime Number.");
//     }
// }

// isPrimeNumber(3);

/*-----------------------------------------------------------------------------------------------------------------------------*/

// Write a function to find the sum of digits of a number.

// function sumOfDigits(num) {
//     let sum = 0;
//     let digit = 0;
//     for (let i = num; i > 0; i = parseInt(i / 10)) {
//         digit = i % 10;
//         sum = sum + digit;
//     }
//     return sum;
// }

// console.log("Sum of digits = "+sumOfDigits(23456));


/*----------------------------------------------------------------------------------------------------------------------------------------*/

// wap to check wether a string is pallindrome or not

// function isPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str.charAt(i);
//     }
//     if (str === reversed) {
//         console.log(str + " is a Palindrome.");
//     } else {
//         console.log(str + " is not a Palindrome.");
//     }
// }


// isPalindrome("madam");
// isPalindrome("racecar");
// isPalindrome("hello");   

/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/

// write a function to reverse a number

// let reverseOfNumber = (num) => {
//     let digit = 0;
//     let rev = 0;
//     for (let i = num; i > 0; i = parseInt(i / 10)) {
//         digit = i % 10;
//         rev = rev * 10 + digit;
//     }
//     return rev;
// }

// console.log("Reverse of given number: "+ reverseOfNumber(23567));


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// write a function to check wether a number is armstrong number or not

// let isArmstrong = (num) => {
//     let digit = 0;
//     let sum = 0;
//     for (let i = num; i > 0; i = parseInt(i / 10)) {
//         digit = i % 10;
//         sum = sum + (digit * digit * digit);
//     }

//     if (sum === num) {
//         console.log(`${num} is Armstrong number`);
//     } else {
//         console.log(`${num} is not a Armstrong number`);
//     }
// }

// isArmstrong(300);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// wap to count a specific character in a string

// let str = "Alisha"
// let count = 0;
// str = str.toLowerCase();
// function countOfChar(char){
//     for(let i =0;i<str.length;i++){
//         if(char == str.charAt(i)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOfChar('a'));

/*-------------------------------------------------------------------------------------------------------------------------------------*/

//wap in js to find out unique character within a string

// let str = "Hi, everyone!";
// function uniqueChar() {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
//             console.log(str.charAt(i));
//         }
//     }
// }
// uniqueChar(str);

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

//wap in js to find out unique character within a string

// let uniqueChar = (str) => {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         let present = false;
//         for (let j = 0; j < newStr.length; j++) {
//             if (str.charAt(i) == newStr.charAt(j)) {
//                 present = true;
//                 break;
//             }
//         }
//         if (!present) {
//             newStr = newStr + str.charAt(i);
//             let char = str.charAt(i);
//             let charCount = 0;
//             for (let i = 0; i < str.length; i++) {
//                 if (char === str.charAt(i)) {
//                     charCount++;
//                 }
//             }
//             console.log(`${char} appears ${charCount} times`);
//         }
//     }
//     console.log(newStr);
// }

// uniqueChar("Hello World!");

/*------------------------------------------------------------------------------------------------------------------------------------------------*/

// write a function to find the maximum of two numbers

// let greaterNumber = (num1, num2) => {
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }

// console.log(greaterNumber(3,4));

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// write a function to find the maximum of five numbers

// let greaterNumber = (num1, num2, num3, num4, num5) => {
//     if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//         return num1;
//     }
//     else if (num2 > num3 && num2 > num4 && num2 > num5) {
//         return num2;
//     }
//     else if (num3 > num4 && num3 > num5) {
//         return num3;
//     }
//     else if (num4 > num5) {
//         return num4;
//     }
//     else {
//         return num5;
//     }
// }

// console.log(greaterNumber(1,2,3,4,5));

/*-----------------------------------------------------------------------------------------------*/

//write a function to count the nu,ber of vowels in a string

// let str = "Hello world";
// let countVowels = () => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let ch = str.charAt(i).toLowerCase();
//         if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//             count++;
//         }
//     }
//     console.log(`Total ${count} vowels are present in a given string`);
// }

// countVowels(str);