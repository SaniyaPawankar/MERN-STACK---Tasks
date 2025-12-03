/*----------------------------------------------Why Do We Need Promises in JavaScript?---------------------------------------------------------------*/

// 1. To handle asynchronous operations
// Operations like API calls or reading files do not complete instantly. Promises allow JavaScript to handle these tasks without blocking the main thread.

// Example:

const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
});

promise.then(result => console.log(result));

// 2. To avoid callback hell
// Nested callbacks make code messy and hard to maintain.

// Callback hell example:

getData(function(res1) {
    processData(res1, function(res2) {
        saveData(res2, function() {
            console.log("Done");
        });
    });
});


// Promise version:

getData()
  .then(processData)
  .then(saveData)
  .then(() => console.log("Done"));


// 3. Better error handling
// Promises provide a single .catch() block to handle errors from any step.

// Example:

fetchData()
  .then(processData)
  .catch(error => console.error("Error occurred:", error));

// 4. Easy chaining of asynchronous tasks
// Promises allow sequential execution of tasks using .then().

// Example:

doTask1()
  .then(doTask2)
  .then(doTask3)
  .then(() => console.log("All tasks completed"));

// 5. Representing a future value
// A Promise represents a value that will be available later.

// Example:

let myPromise = fetch("https://api.example.com/data");
console.log(myPromise); // Pending state

// 6. Foundation for async/await

// async/await simplifies working with Promises and makes code look synchronous.

// Example:

async function loadData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}

loadData();

// 7. Cleaner and more maintainable code

// Promises reduce complexity and improve readability compared to traditional callbacks