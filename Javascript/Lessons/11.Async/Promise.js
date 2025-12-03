
/*------------------------------------Promise--------------------------------------------*/

// A Promise in JavaScript is an object representing the result of an asynchronous operation.
// 1) Pending : Initial state(operation not finished).
// 2) Resolved(fullfilled) : Operation completed successfully.
// 3) Rejected : Operation failed.

// Example:

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

let promise1 = new Promise((resolve, reject) => {
    let result = true;
    result ? resolve("Promise has been resolved successfully") : reject("Promise has been rejected!")
})

// then().catch().finally().

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is settled (either resolved or rejected).");
})


promise1.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
}).finally(()=>{
    console.log("Promise is settled (either resolved or rejected).");
})


// async/await

// async declares a function that always returns a Promise.
// await pauses an execution until the promise is settled.

// Errors are handled using try...catch.

async function asyncFunction(){
    try{
        let result = await promise; // waits for the promise to resolve or reject
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

asyncFunction();


// Example 1:

function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 120){
                resolve({
                    name: "John", 
                    id: 120,
                    age: 22, 
                });
            }else{
                reject("Data not found");
            }
        }, 3000);
    });
}

async function getUserData(){
    try{
        let user = await getData(120);
        console.log("User Data: ", user);
    }catch(e){
        console.error(e);
    }
}

getUserData();


// Example 2:

function getProductData(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name === "Laptop"){
                resolve({id : 12, name : "Laptop", price : 45000});
            }else{
                reject("Product not found");
            }
        }, 4000);
    })
}

async function showProduct(){
    try{
        let product = await getProductData("Laptop");
        console.log("Product Data: ", product);
    }catch(error){
        console.error(error);
    }
}

showProduct();