/*------------------------------------Exception Handling------------------------------------------------------------------*/

// Defination :- Exception Handling in Javascriot allows you to catch errors during runtime and handle them without stopping the whole program.

// It Uses:

// try -> test risky code
// catch -> handle error if it occurs
// throw -> create a custom error
// finally -> always run(cleanup, closing connections, etc.)

// 1.Undefined/Wrong Variable Example

try {
    console.log(myValue); // variable not declared
} catch (err) {
    console.error("Error occured: " + err);
}

// 2.Custom error with string check

let city = "Nagpur"

try {
    if (city != "Pune") {
        throw ("City does not match!")
    }
    console.log("City is Pune")
} catch (err) {
    console.error("Exception occured: " + err);
}

// 3.Division By zero Check

let divide = (a, b) => a / b

try {
    let result = divide(50, 0)
    if (result === Infinity) {
        throw ("Cannot divide by zero!")
    }
    console.log("Result: " + result)
} catch (e) {
    console.error("Exception occured: " + e);
} finally {
    console.log("Division process completed.");
}

// 4.Division Result Validation(NaN case)

let divideNumbers = (a,b) => a/b

try{
    let result = divideNumbers("abc", 2)
    if(isNaN(result)){
        throw("Result is not a number!");
    }
    console.log("Division result: "+ result)
}catch(err){
    console.error("Error: "+err);
}

// 5.Wrong Type of Data

let age = "Twenty"

try{
    if(typeof(age) != "Number"){
        throw("Age must be a number!")
    }
    console.log("Age is valid: "+ age)
}catch(e){
    console.error("Error: "+e);
}