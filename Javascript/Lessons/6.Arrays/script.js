/*--------------------------------------Array----------------------------------------------------*/

// Array Defination:-

// An array is a collection of elements stored in continuous memory locations.
// Arrays are indexed, starting from 0.
// Arrays in JavaScript can store different data types (numbers, strings, objects, functions, etc.).

// Memory Layout:

// Index :  0    1    2    3
// Value :  1    2    3    4
// Addr  : 1000 1004 1008 1012

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);//1
// console.log(numbers[numbers.length - 1]);//5

/*--------------------------------------------------------------------------------------Array Traversal Methods-----------------------------*/

// 1) for loop 

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


// 2) while loop 

// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// 3) for...of(values only)

// for (let element of numbers) {
//   console.log(element);
// }

// 4) forEach(element+index, but returns nothing)

// numbers.forEach((num, i) => {
//   console.log(`Index ${i} → ${num}`);
// });

// 5) map(returns a new array)

// function square(n) {
//     return n * n;
// }
// let squared = numbers.map(square);
// console.log(squared); // [1, 4, 9, 16, 25]

// Note : - 1) foreach -> good for iteration, no return
//          2) map -> transforms and returns a new array


/*----------------------------------------------------------------------Updating Arrays-----------------------------------------------------------------------------------------------------*/


// 1) Add Elements

// let arr = [1, 2, 3];
// arr.push(4);      // [1, 2, 3, 4] → add at end
// arr.unshift(0);   // [0, 1, 2, 3, 4] → add at beginning


// 2) Remove Elements 

// arr.pop();   // removes last → [0,1,2,3]
// arr.shift(); // removes first → [1,2,3]

// 3) Insert/Delete Anywhere (splice)

// let nums = [1, 2, 3, 4];
// nums.splice(2, 0, "hello"); 
// console.log(nums); // [1, 2, "hello", 3, 4]

// note: splice can insert, delete , or replace items in-place

/*----------------------------------------------------------------------Extracting and Searching--------------------------------------------------------------------------------------------------------*/

// 1) slice -> copy part of array without changing original

// let arr = [10, 20, 30, 40, 50];
// let part = arr.slice(1, 4);
// console.log(part); // [20, 30, 40]
// console.log(arr);  // [10, 20, 30, 40, 50] (unchanged)

// 2) includes(boolean check)

// console.log([1, 2, 3].includes(2)); // true

// 3) indexOf & lastIndexOf

// let arr = [1, 2, 3, 2];
// console.log(arr.indexOf(2));     // 1 (first occurrence)
// console.log(arr.lastIndexOf(2)); // 3 (last occurrence)

// 4) filter(get matching values)

// let even = arr.filter((n,i) => {
//     return n % 2 == 0;
// });
// console.log(even); // [2, 2]

/*-----------------------------------------------------Sorting Arrays-----------------------------------------------------------------------------------------*/

// 1) Numbers 

// let nums = [3, 1, 2, 5, 4];
// nums.sort((a, b) => a - b); // Ascending → [1,2,3,4,5]
// nums.sort((a, b) => b - a); // Descending → [5,4,3,2,1]


// 2) Strings 

// let names = ["b", "d", "a", "c", "A"];
// names.sort(); // ["A", "a", "b", "c", "d"]

// Custom sorting
// names.sort((a, b) => (a > b ? 1 : -1));
// console.log(names); // ["A", "a", "b", "c", "d"]

// Notes : sort() converts elements to strings by default.
// Use a compare function for numeric or custom sorting.