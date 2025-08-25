// Bubble Sort

let numbers = [20, 50, 30, 10, 40];

// function bubbleSort(numbers) {
//     let swap = false;
//     let steps = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             // swaping 
//             if (numbers[j] > numbers[j + 1]) {
//                 steps++;
//                 let temp = numbers[j];
//                 numbers[j] = numbers[j + 1];
//                 numbers[j + 1] = temp;
//                 swap = true;

//             }
//         }
//         if (!swap) {
//             console.log(`Array is sorted.`);
//             return numbers
//         }
//     }
//     console.log(`It took ${steps}`);
//     return numbers;
// }

// console.log(bubbleSort(numbers));

// function selectionSort(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let minIndex = i;
//         for (let j = i; j < numbers.length; j++) {
//             if (numbers[j] < numbers[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = numbers[i];
//         numbers[i] = numbers[minIndex];
//         numbers[minIndex] = temp;
//     }
//     return numbers;
// }

// console.log(selectionSort(numbers));
