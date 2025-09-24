
console.log("Hello from Node!");

const add = (a, b) => a + b;
console.log("5 + 3 =", add(5, 3));


const greet = (name) => `Hello, ${name}! Welcome to Node.js`;
console.log(greet("Saniya"));

const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("I like", fruit));

const checkEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log("7 is", checkEven(7));
console.log("10 is", checkEven(10));
