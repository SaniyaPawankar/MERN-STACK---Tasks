/*
==========================================================
 EVENT OBJECT IN JAVASCRIPT - BEGINNER FRIENDLY SUMMARY
==========================================================

👉 What is it?
--------------
- The "event object" is automatically created by the browser whenever
  an event happens (like a click, key press, mouse move, etc.).
- It contains useful information about the event and is passed to
  the event handler function.

----------------------------------------------------------
 HOW TO ACCESS THE EVENT OBJECT
----------------------------------------------------------
- You can get the event object by writing a parameter (commonly `event` or `e`)
  inside your event handler function.

Example:
document.getElementById("btn").addEventListener("click", function(event) {
    console.log(event); // Logs the event object in console
});

----------------------------------------------------------
 COMMON PROPERTIES OF THE EVENT OBJECT
----------------------------------------------------------
event.type          → The type of event (e.g., "click", "keydown")
event.target        → The actual element that triggered the event
event.currentTarget → The element the listener is attached to
event.timeStamp     → Time (in ms) when the event occurred
event.clientX/Y     → Mouse position (relative to viewport)
event.pageX/Y       → Mouse position (relative to page)
event.key           → Which key was pressed (for keyboard events)
event.code          → Physical key code (e.g., "KeyA", "Enter")
event.altKey        → true/false if Alt was pressed
event.ctrlKey       → true/false if Ctrl was pressed
event.shiftKey      → true/false if Shift was pressed

----------------------------------------------------------
 COMMON METHODS OF THE EVENT OBJECT
----------------------------------------------------------
event.preventDefault()      → Prevents the default action
                             (e.g., stop link navigation, form submission)
event.stopPropagation()     → Stops the event from bubbling up
event.stopImmediatePropagation()
                           → Stops bubbling + prevents other listeners
                             on the same element

----------------------------------------------------------
 EXAMPLES
----------------------------------------------------------
*/

// Example 1: Mouse event
document.getElementById("btn1").addEventListener("click", function(event) {
    console.log("Event Type:", event.type);     // "click"
    console.log("Target Element:", event.target); // <button>
    console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY);
});

// Example 2: Keyboard event
document.getElementById("inputBox").addEventListener("keydown", function(event) {
    console.log("Key Pressed:", event.key);   // e.g., "a", "Enter"
    console.log("Code:", event.code);         // e.g., "KeyA"
    console.log("Ctrl pressed?", event.ctrlKey);
});

// Example 3: Preventing default form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops the page from refreshing
    console.log("Form submission prevented!");
});

// Example 4: Bubbling vs Target
document.getElementById("parent").addEventListener("click", function(e) {
    console.log("Parent listener triggered");
    console.log("Target element:", e.target.id);
});
document.getElementById("child").addEventListener("click", function(e) {
    console.log("Child listener triggered");
    console.log("Target element:", e.target.id);
});

/*
----------------------------------------------------------
 EVENT FLOW (CAPTURING → TARGET → BUBBLING)
----------------------------------------------------------
- Events have 3 phases:
  1. Capturing Phase (event goes down to the target)
  2. Target Phase   (event occurs on the target)
  3. Bubbling Phase (event bubbles up to ancestors)

- By default, event listeners use the bubbling phase.
- You can listen in the capturing phase by passing "true":
  element.addEventListener("click", handler, true);

----------------------------------------------------------
 SPECIAL EVENT OBJECTS
----------------------------------------------------------
- MouseEvent     → Extra properties for mouse position, buttons
- KeyboardEvent  → Extra properties like key, code, modifiers
- FocusEvent     → Triggered on focus/blur
- InputEvent     → Triggered when typing inside inputs
- SubmitEvent    → Triggered when forms are submitted

----------------------------------------------------------
 SUMMARY
----------------------------------------------------------
1. Event object is passed automatically to event handlers.
2. Use event properties (like target, key, clientX) to get details.
3. Use event methods (like preventDefault, stopPropagation) to
   control behavior.
4. Works differently depending on the type of event (mouse, keyboard, form).
==========================================================
*/
