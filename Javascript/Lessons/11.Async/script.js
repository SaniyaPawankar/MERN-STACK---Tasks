
// setInterval(callback,[interval]) -> Executes after every given time interval(in milliseconds)

// setTimeout(callback, [interval]) -> Executes a function once after the given time delay(in milliseconds).

// 1000 ms = 1 second

console.log(1)
console.log(2)
console.log(3)

let async1 = setInterval(()=> {
    console.log("Hii !")
}, 1000) // prints hii for every 1 second

setTimeout(()=> {
    console.log("this is setTimeout")
    clearInterval(async1) // stops setInterval after 10 seconds
}, 10000)                 // runs only once after 10 seconds

console.log(4)
console.log(5)
console.log(6)


// Flow of Execution:

// Synchronous code runs first → prints 1, 2, 3, 4, 5, 6.
// setInterval starts → prints "hii !" every 1 second.
// After 10 seconds, setTimeout runs → prints "this is setTimeout !" and then stops the interval using clearInterval(async1).

// More Examples 

let count = 5;
let timer = setInterval(() => {
    console.log(count)
    count--
    if(count === 0){
        clearInterval(timer)
        console.log("Time's up!");
    }
}, 1000)


setTimeout(() => {
    console.log("Welcome! This message appears after 3 seconds")
}, 3000)
