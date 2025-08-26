/*-----------------------------------------Multidimensional Array--------------------------------------------------------------------*/

// A multidimensional array is an array of arrays, used to represent data in rows and columns(like a matrix or table).

// Example: 

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Accessing Elements 

// numbers[0] => returns [1,2,3](the 1st row)
// numbers[1][2] => returns (row 2, column 3).

// Traversing 

for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) {
        console.log(numbers[row][column]);
    }
}

// output : 1...9

// Use Case :-

// 1) Matrices/ 2D grids
// 2) Game boards(like chess, tic-tac-toe, sudoku)
// 3) Tabular data(row and columns)
// 4) Nested groups of values


let fsd_530 = ["student1", "student2", "student3", "student4"]
let fsd_730 = ["student5", "student6", "student7", "student8"]
let fsd_1030 = ["student9", "student10", "student11"]

let java_530 = ["student12", "student13", "student14", "student15"]
let java_730 = ["student16", "student17", "student18", "student19"]
let java_1030 = ["student20", "student21", "student22"]


let itech_sharda_sq = [fsd_530, fsd_730, fsd_1030]

let itech_tiranga_sq = [java_1030, java_530, java_730]

let itech_nagpur = [
    itech_sharda_sq,
    itech_tiranga_sq
]

for (branch of itech_nagpur) {
    for (batch of branch) {
        for (student of batch) {
            console.log(student);
        }
    }
}