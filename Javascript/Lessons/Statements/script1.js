/*----------------------------------------------------------------------Task-1------------------------------------------------------------------------- */

// let a = window.prompt("Enter a Number: ");
// let b = window.prompt("Enter another Number: ");
// let c = window.prompt("Enter a third Number: ");
// let d = window.prompt("Enter a fourth Number: ");
// let e = window.prompt("Enter a fifth Number: ");

// a = Number(a);
// b = Number(b);
// c = Number(c);
// d = Number(d);
// e = Number(e);

if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                console.log("The largest number is: " + e);
            }
        }
    }
} else if (b > c) {
    if (b > d) {
        if (b > e) {
            console.log("The largest number is: " + b);
        }
    }
} else if (c > d) {
    if (c > e) {
        console.log("The largest number is: " + c);
    }
} else if (d > e) {
    console.log("The largest number is: " + d);
} else {
    console.log("The largest number is: " + e);
}


// if (a > b) {
//     if (a > b) {
//         if (a > c) {
//             if (a > d) {
//                 console.log("The larget number is: " + a);
//             }
//         }
//     }
// } else if (b > c) {
//     if (b > d) {
//         console.log("The larget number is: " + b);
//     }
// } else if (c > d) {
//     console.log("The largest number is: " + c);
// } else {
//     console.log("The largest number is: " + d);
// }

/*----------------------------------------------------------------------Task-2-------------------------------------------------------------------------- */

// Greater number out of 5 numbers

// let a = Number(window.prompt("Enter a Number:"));
// let b = Number(window.prompt("Enter a Number:"));
// let c = Number(window.prompt("Enter a Number:"));
// let d = Number(window.prompt("Enter a Number:"));
// let e = Number(window.prompt("Enter a Number:"));


// if ((a > b) && (a > c) && (a > d) && (a > e)) {
//     console.log("The largest number is: " + a);
// } else if ((b > c) && (b > d) && (b > e)) {
//     console.log("The largest number is: " + b);
// }
// else if ((c > d) && (c > e)) {
//     console.log("The largest number is: " + c);
// } else if (d > e) {
//     console.log("The largest number is: " + d);
// }
// else {
//     console.log("The largest number is: " + e);
// }


// Greater number out of 4 numbers 

// if ((a > b) && (a > c) && (a > d)) {
//     console.log("The largest number is: " + a);
// }
// else if ((b > c) && (b > d)) {
//     console.log("The largest number is: " + b);
// }
// else if (c > d) {
//     console.log("The largest number is: " + c);
// }
// else {
//     console.log("The largest number is: " + d);
// }

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Even or Odd
// let num = Number(window.prompt("Enter a number : "));
// if(num % 2 === 0) {
//     console.log("The number is even.");
// }else {
//     console.log("The number is odd.");
// }

//Positive or Negative
// let number = Number(window.prompt("Enter a number : "));
// if( number > 0){
//     console.log("The number is positive.");
// }else if(number < 0){
//     console.log("The number is negative.");
// }else {
//     console.log("The number is zero.");
// }


// Check if a person is eligible to vote
// let age = Number(window.prompt("Enter your age: "));
// let eligible = (age >=18) ? console.log("You are eligible to vote.") : console.log("You are not eligible to vote.");

// // Greater character 

// let char1 = window.prompt("Enter first character: ");
// let char2 = window.prompt("Enter second character: ");

// let greaterChar = (char1 > char2) ? char1 : char2;
// console.log("The greater character is: " + greaterChar);