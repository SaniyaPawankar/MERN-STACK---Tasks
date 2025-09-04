/*--------------------------------------DOM Summary------------------------------------------------*/

// DOM (Document Object Model) represents the structure of an HTML document as objects that javascript can interact with (like changing text, styles, or attributes).

// DOM Getters (Methods for Accessing Elements):

// 1. document.getElemetById("id") - Selects single element by its id.
// 2. document.getElementsByClassName("ClassName") - Selects multiple elements by their class name.
// 3. document.getElementsByTagName("tagName") - Selects multiple elements by their tag name.
// 4. document.querySelector("cssSelector") - Selects the first element that matches a CSS selector.
// 5. document.querySelectorAll("cssSelector") - Selects all elements that match a CSS selector.

// DOM Setters (Methods/Properties for Updating Elements):
// - Used to MODIFY attributes, content, or styles of elements.
// - Actually change the DOM.
// - Examples:
//    element.setAttribute("class", "newClass")
//    element.setAttribute("src", "image.png")
//    element.innerText = "New Text"
//    element.innerHTML = "<b>Bold Text</b>"
//    element.style.color = "red"
//    element.style.backgroundColor = "blue"

//  innerText vs innerHTML
// - innerText → returns only text (without HTML tags)
// - innerHTML → returns text along with HTML tags

// Difference Between DOM & HTML:
// - HTML → static code written by developer
// - DOM → dynamic representation that JS can modify at runtime

let heading = document.getElementById("heading1");
console.log("Heading Text: ", heading.innerText);
console.log("Heading HTML: ", heading.innerHTML);

heading.innerText = "New Heading Text"; // Change text
heading.innerHTML = "<span style='color:blue'>New Heading with Span</span>"; // Change HTML
heading.style.color = "red"; // Change style

console.log("Heading Text: ", heading.innerText);
console.log("Heading HTML: ", heading.innerHTML);

// Attributes in DOM:
// - Attributes provide additional information about HTML elements (like id, class, src, href).
// - You can get or set attributes using getAttribute() and setAttribute() methods.

let para = document.querySelector(".para");
console.log("Paragraph ID: ", para.id); // Accessing id attribute
console.log("Paragraph Class: ", para.className); // Accessing class attribute  

para.setAttribute("title", "This is a paragraph"); // Setting a new attribute

let input = document.querySelector("#input1");
console.log("Input type:", input.type);
console.log("Placeholder:", input.placeholder);
console.log("Min value:", input.min, "Max value:", input.max);

let list = document.getElementById("list1");
console.log("List type:", list.tagName);


// Changing style using JS
function changeStyle() {
    let box = document.querySelector("#box");
    box.style.backgroundColor = "lightblue";
    box.style.color = "white";
    box.style.padding = "10px";
    box.style.borderRadius = "5px";
}


