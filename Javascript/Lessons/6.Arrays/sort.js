//Bubble sort

function bubbleSort(numbers, order) {
    let steps = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (order === "asc" && numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
                steps++;
            }
            if (order === "desc" && numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
                steps++;
            }
        }
    }
    console.log(`It took ${steps} steps.`);
    return numbers;
}


//Selection Sort

function selectionSort(numbers, order) {
    let steps = 0;
    if (order === "asc") {
        let swap = false;
        for (let i = 0; i < numbers.length; i++) {

            let minIndex = i;
            for (let j = i; j < numbers.length; j++) {
                if (numbers[j] < numbers[minIndex]) {
                    minIndex = j;
                }
            }
            let temp = numbers[i];
            numbers[i] = numbers[minIndex];
            numbers[minIndex] = temp;
            swap = true;
            steps++;
        }
        if (!swap) {
            console.log(`Array is already sorted in ${order} order.`);
            return numbers;
        }
    }
    if (order === "desc") {
        let swap = false;
        for (let i = 0; i < numbers.length; i++) {
            let maxIndex = i;
            for (let j = i; j < numbers.length; j++) {
                if (numbers[j] > numbers[maxIndex]) {
                    maxIndex = j;
                }
            }
            let temp = numbers[i];
            numbers[i] = numbers[maxIndex];
            numbers[maxIndex] = temp;
            swap = true;
            steps++;
        }
        if (!swap) {
            console.log(`Array is already sorted in ${order} order.`);
            return numbers;
        }
    }
    console.log(`It took ${steps} swaps.`);
    return numbers;
}

let numbers1 = [20, 50, 30, 10, 40];
let numbers2 = [20, 50, 30, 10, 40];

console.log(bubbleSort(numbers1, "asc"));
console.log(bubbleSort(numbers1, "desc"));
console.log(selectionSort(numbers2, "asc"));
console.log(selectionSort(numbers2, "desc"));

