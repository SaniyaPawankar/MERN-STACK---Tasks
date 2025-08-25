//Linear Search Algorithm 

/*function linearSearch(numbers, target) {
    let steps = 0;
    for (let i = 0; i < numbers.length; i++) {
        steps++;
        if (numbers[i] == target) {
            return `the target ${target} found at position ${i + 1} in ${steps} steps.`
        }
    }
    return `the target ${target} not found at any  position in ${steps} steps.`
}*/



//let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let numbers = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
//console.log(linearSearch(numbers,40));
//console.log(linearSearch(numbers,100));

function binarySearch(numbers, target) {
    let steps = 0;
    let lb = 0;
    let ub = numbers.length - 1;

    while (lb <= ub) {
        steps++;
        let mid = Math.floor((lb + ub) / 2);

        if (numbers[mid] === target) {
            return `The target ${target} found at position ${mid + 1} in ${steps} steps.`;
        }
        if (numbers[lb] < numbers[ub]) {
            if (numbers[mid] > target) {
                ub = mid - 1;
            } else {
                lb = mid + 1;
            }
        } else {
        
            if (numbers[mid] < target) {
                ub = mid - 1;
            } else {
                lb = mid + 1;
            }
        }
    }

    return `The target ${target} not found at any position in ${steps} steps.`;
}

let ascendingArray = [10, 20, 30, 40, 50];
let descendingArray = [50, 40, 30, 20, 10];

console.log(binarySearch(ascendingArray, 30));   
console.log(binarySearch(descendingArray, 50));  


