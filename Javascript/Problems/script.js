// Q1 : Write a program that takes a temperature in Celsius and converts it to Fahrenheit.
// Formula : F = (C * 9/5) +32

// Code:-
// let tempCelsius = Number(window.prompt("Enter the current temperature "));

// let tempFahrenheit = (tempCelsius * 9/5) + 32;
// console.log(`Temperature in Faherenheit is ${tempFahrenheit}`);

//Q2:  Sum of first natural numbers

//Code:-
// let n = Number(window.prompt("Enter a number"));
// let sum = 0;
// for(let i=0;i<n;i++){
//     sum += i;
// }
// console.log(`Sum of ${n} natural numbers is ${sum}`);

//Q3: Take a number as input and print its multiplication table from 1 to 10 using a while loop.

// let number = Number(window.prompt("Enter a number"));

// let i = 1;
// while(i <= 10){
//     console.log(`${number} * ${i} = ${i*number}`);
//     i++;
// }


//Q4: Take a number as input and print its factorial using a do...while loop

// let num = parseInt(prompt("Enter a number:"));
// let factorial = 1;
// let i = num;

// if (num < 0) {
//     console.log("Factorial is not defined for negative numbers.");
// } else {
//     do {
//         factorial *= i;
//         i--;
//     } while (i > 0);

//     console.log(`The factorial of ${num} is ${factorial}`);
// }


//Q5: Formula: SI = (P × R × T) / 100
// Take P (principal), R (rate), and T (time) as input and calculate simple interest.

// let principal = parseInt(prompt("Enter principal"));
// let rate = parseFloat(prompt("Enter rate of interest"));
// let time = parseFloat(prompt("Enter number of years"));

// let SI = parseFloat((principal*rate*time) / 100);

// console.log(`Simple Interest is ${SI}`);


//Q6: Count Vowels in a String

// let str = "Hello world";

// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     let ch = str.charAt(i).toLowerCase();
//     if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
//         count++;
//     }
// }
// console.log(`Total ${count} vowels are present in a given string`);


//Q7: Check if string is palindrome or not.

// let string = "Mam";
// originalString = string.toLowerCase();

// let reversedString = "";
// for(let i = string.length; i>=0; i--){
//     reversedString += originalString.charAt(i);
// }
// if(originalString === reversedString){
//     console.log("String is Palindrome.")
// }else{
//     console.log("String is not Palindrome.")
// }

