
let targetElement = document.getElementById("box1");

let btn = document.querySelector("button");

// btn.addEventListener("click", (event) => {
//     if (targetElement.classList.value === "show") {
//         targetElement.classList.value = "hide";
//     } else {
//         targetElement.classList.value = "show";
//     }
// })


// btn.addEventListener("click", (event) => {
//     if (targetElement.classList.value === "show") {
//         targetElement.classList.value = "";
//         targetElement.classList.value += "hide";
//     }
//     else {
//         targetElement.classList.value = "";
//         targetElement.classList.value += "show";
//     }
// });

console.log(targetElement.className);

btn.addEventListener("click", () => {
    if (targetElement.className.includes("show")) {
        targetElement.className = targetElement.className.replace("show", "hide");
    } else {
        targetElement.className = targetElement.className.replace("hide", "show");
    }
});
