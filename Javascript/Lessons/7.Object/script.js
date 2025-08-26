/*--------------------------------------Objects-----------------------------------------------------*/

// Definition:
// An object in JavaScript is a collection of key-value pairs where keys are strings (called properties) and values can be any data type (string, number, array, function, etc.).



let student = {
    name: "Saniya Pawankar",
    phone: 9850257834,
    address: "Nagpur",
    subjects: ["Math", "Java"]
}
console.log(student.name)
console.log(student.phone)

// Array Of objects 

// An array can store multiple objects, making it easier to handle collections of records.

let students = [
    { name: "Amey", address: "Nagpur" },
    { name: "Rohit", address: "Pune" },
    { name: "Sahil", address: "Mumbai" }
]
console.log(students[1].name) // Rohit


// Accessing Properties 

// Properties of objects can be accessed using dot operator

console.log(student.name);

// Looping through objects 

for (let student of students) {
    console.log(student.name)
}

for (let key in student) {
    console.log(key + " : " + student[key])
}

// Destructuring 

// Allows extracting values from arrays or objects into seprate variables 

let num = [10, 20, 30, 40];
let [u, x, y, z] = num;
console.log(x, y);

let person = { name: "Amey", age: 21 }
let { name, age } = person
console.log(name, age) // Amey 21

// Spread Operator 

let array = [50, 60, ...num];
console.log(array);

// Functions with objects 

let response = { status: true, output: [5, 4, 6] }

function checkTask({ status, output }) {
    if (status) {
        let [op1, op2, op3] = output
        return (op1 === 1 && op2 === 2 && op3 === 3)
    }
    return false
}

console.log(checkTask(response)) // false


// Use Cases :

// User/Student Management Systems – storing and retrieving details like name, contact, subjects, etc.

// E-commerce Apps – handling lists of products (array of objects), with details like price, stock, and description.

// APIs & Databases – data is returned in JSON (objects + arrays), so destructuring and looping are used to process it.

// Validation & Tasks – checking conditions (like checkTask) for quizzes, assignments, or form submissions.
