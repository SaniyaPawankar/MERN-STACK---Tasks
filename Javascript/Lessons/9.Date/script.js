
let date = new Date();

//setters 

date.setFullYear(2000,7,3);
date.setHours(12);
date.setMinutes(45);
date.setSeconds(2300);
date.setDate(29);
date.setMonth(9);

//getters 

console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.getTimezoneOffset());
console.log(date.toUTCString());
console.log(date.toISOString());
console.log(date.getMilliseconds());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(`Current date is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

let boy1 = {
    b_name: "Amit",
    b_date: 12,
    b_year: 2000,
    b_month: 4
}

let boy2 = {
    b_name: "Sahil",
    b_date: 5,
    b_year: 2023,
    b_month: 6
}

let date1 = new Date();
let date2 = new Date();

date1.setDate(boy1.b_date);
date1.setFullYear(boy1.b_year);
date1.setMonth(boy1.b_month);

date2.setDate(boy2.b_date);
date2.setFullYear(boy2.b_year);
date2.setMonth(boy2.b_month);

let time1 = date1.getTime();
let time2 = date2.getTime();

let maxTime = Math.max(time1, time2);
let minTime = Math.min(time1, time2);
// console.log(maxTime);
// console.log(minTime);

let diffInMs = maxTime - minTime;

let days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
console.log(days);

