// Select elements
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let inputBox = document.querySelector("#inputBox");
let form = document.querySelector("#myForm");
let nameInput = document.querySelector("#nameInput");
let colorSelect = document.querySelector("#colorSelect");
let darkModeToggle = document.querySelector("#darkModeToggle");
let scrollBox = document.querySelector("#scrollBox");
let container = document.querySelector(".container");

// ---------------- MOUSE EVENTS ----------------
box1.addEventListener("click", () => {
  box1.innerHTML = "Box 1 clicked!";
});

box2.addEventListener("dblclick", () => {
  box2.innerHTML = "Box 2 double clicked!";
});

box3.addEventListener("mouseenter", () => {
  box3.innerHTML = "Mouse entered Box 3!";
});

box3.addEventListener("mouseleave", () => {
  box3.innerHTML = "Mouse left Box 3!";
});

box4.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  box4.innerHTML = "Right click on Box 4!";
});

// ---------------- KEYBOARD EVENTS ----------------
inputBox.addEventListener("keydown", (e) => {
  inputBox.value = "Key down: " + e.key;
});

inputBox.addEventListener("keyup", (e) => {
  inputBox.value = "Key up: " + e.key;
});

inputBox.addEventListener("input", () => {
  inputBox.value = inputBox.value; // Just keeps showing input value
});

// ---------------- FORM EVENTS ----------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});

nameInput.addEventListener("focus", () => {
  nameInput.value = "Name input focused";
});

nameInput.addEventListener("blur", () => {
  nameInput.value = "Name input blurred";
});

colorSelect.addEventListener("change", () => {
  document.body.style.color = colorSelect.value;
});

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    container.style.border = "1px solid white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});

// ---------------- WINDOW EVENTS ----------------
window.addEventListener("scroll", () => {
  scrollBox.innerHTML = "scrolled!";
});

window.addEventListener("resize", () => {
  box4.innerHTML = "Window resized!";
});

window.addEventListener("load", () => {
  box1.innerHTML = "Page loaded!";
});


// DOM Manipulation Methods 

// 1) document.createElement()
// 2) document.appendChild()
// 3) document.removeChild()


let output = document.getElementById("output");

// 1) createElement()
let newPara = document.createElement("p");
newPara.textContent = "👋 Hi, I was created dynamically!";

// 2) appendChild()
output.appendChild(newPara);

// 3) removeChild() after 3 seconds
setTimeout(() => {
    output.removeChild(newPara);
}, 3000);
