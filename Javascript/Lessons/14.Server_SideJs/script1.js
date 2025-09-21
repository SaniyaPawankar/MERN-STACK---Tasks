// Node.js

// What is Node.js -

/*
Node.js is an open-source, cross-platform runtime environment that allows JavaScript to run outside the web browser. 
It is built on the Google Chrome V8 JavaScript engine, which compiles JavaScript into machine code for fast execution.
*/

//Traditionally, JavaScript was used only in browsers for client-side scripting.
//  Node.js extends JavaScript to the server-side, allowing developers to build complete applications using a single language across frontend and backend.

/*------------------------------------------------------------------------------------------------*/

// Key Features Of Node.js

//1)  Asynchronous and Event-Driven

// Node.js uses a non-blocking I/O model, which means operations like reading 
// files or making network requests don’t block the execution of other tasks.


// Example:

// const fs = require("fs");

// // Asynchronous file reading
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("File is being read...");

// 2) Single-Threaded but Highly Scalable
// It uses a single-threaded event loop to handle multiple clients at once without creating multiple threads.
// Suitable for real-time apps like chat servers, streaming, and gaming.

// 3) Cross-Platform
// Works on Windows, macOS, and Linux.

// 4) Fast Execution
// Powered by the V8 engine, making JavaScript execution very fast.

// 5) npm (Node Package Manager)
// Comes with a huge collection of libraries and packages.

// Example:
// npm install express

/*--------------------------------------------------------------------------------------------------------*/

// Architecture of Node.js

// Event Loop: Handles multiple requests asynchronously.

// Non-blocking I/O: Manages tasks like file system, database, and network without waiting.

// Modules: Built-in modules like http, fs, path, and external ones from npm

