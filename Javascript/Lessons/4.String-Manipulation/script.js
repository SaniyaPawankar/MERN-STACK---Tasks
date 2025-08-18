
/*---------------------------------------Task---------------------------------------------*/

//wap to get reverse of a string

// let fname = " Saniya ";
// let newName = "";
// fname = fname.trim();

// for (let i = fname.length - 1; i >= 0; i--) {
//     newName = newName + fname.charAt(i);
// }

// console.log(newName);

// console.log(fname.substring(4,2));






// wap to count a specific character in a string
// let str = "Alisha";
// str = str.toLowerCase();
// let char = "h";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if(char == str.charAt(i)){
//         count++;
//     }
// }
// console.log(count);





//wap in js to find out unique character within a string

// let str2 = "Hi, everyone.";
// for (let i = 0; i < str2.length; i++) {
//     if (str2.indexOf(str2.charAt(i)) == str2.lastIndexOf(str2.charAt(i))) {
//         console.log(str2.charAt(i));
//     }
// }


let str1 = "Hello World!";
let str2 = "";

for (let i = 0; i < str1.length; i++) {
    let present = false;
    for (let j = 0; j < str2.length; j++) {
        if (str1.charAt(i) === str2.charAt(j)) {
            present = true;
            break;
        }
    }
    if (!present) {
        str2 = str2 + str1.charAt(i);
        let char = str1.charAt(i);
        let charCount = 0;
        for (let i = 0; i < str1.length; i++) {
            if (char === str1.charAt(i)) {
                charCount++;
            }
        }
        console.log(`${char} appears ${charCount} times`);
    }
}
console.log(str2);