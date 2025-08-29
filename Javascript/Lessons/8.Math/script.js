// In js, Math is a built-in object that provides mathematical constants(properties) and functions(methods).
// It works with the Number type and helps in performing complex mathematical calculations.


/*-----------------------------------Common Properties Of Math--------------------------------------*/

// 1) Math.PI → Value of π (≈ 3.14159)

// 2) Math.SQRT2 → Square root of 2 (≈ 1.414)

// 3) Math.SQRT1_2 → Square root of 1/2 (≈ 0.707)

// 4) Math.LN2 → Natural log of 2 (≈ 0.693)

// 5) Math.LN10 → Natural log of 10 (≈ 2.302)

// 6) Math.E → Euler’s number (≈ 2.718)

console.log(Math.PI);       // 3.141592653589793
console.log(Math.SQRT2);    // 1.4142135623730951
console.log(Math.SQRT1_2);  // 0.7071067811865476
console.log(Math.LN2);      // 0.6931471805599453

/*----------------------------------Common Mathods Of Math-----------------------------------------------*/

// 1. Power & Roots

// Math.sqrt(n) → Square root of n

// Math.cbrt(n) → Cube root of n

// Math.pow(base, exp) → Exponentiation (base^exp)

// Examples: 

console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.pow(2,3));

// 2. Rounding Numbers

// Math.round(n) → Nearest integer

// Math.floor(n) → Round down

// Math.ceil(n) → Round up

// Math.trunc(n) → Removes decimal part

console.log(Math.round(11.45)); //11
console.log(Math.round(11.54)); //12
console.log(Math.floor(1.9)); //1
console.log(Math.ceil(1.01)); //2
console.log(Math.trunc(4.99)); //4

// 3. Min & Max

// Math.max(a, b, c...) → Maximum value

// Math.min(a, b, c...) → Minimum value

let numbers = [1,5,10,-3,90];

console.log(Math.max(...numbers)); // 90
console.log(Math.min(...numbers)); // -3

// 4. Random Numbers

// Math.random() → Returns a random number between 0 and 1

// To get a random integer in a range →
// Math.floor(Math.random() * (max - min + 1)) + min

console.log(Math.random());  // 0.12345...
console.log(Math.floor(Math.random() *6)); // Random 0-5
console.log(Math.floor(Math.random() * 10) + 1); // Random 1-10

// 5. Trigonometric Functions

// Math.sin(x) → Sine of x (in radians)

// Math.cos(x) → Cosine of x

// Math.tan(x) → Tangent of x

// Math.asin(x) → Inverse sine

// Math.acos(x) → Inverse cosine

// Math.atan(x) → Inverse tangent

console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1


// 6. Logarithmic & Exponential

// Math.log(n) → Natural log (base e)

// Math.log10(n) → Log base 10

// Math.exp(n) → e^n

console.log(Math.log(1));      // 0
console.log(Math.log10(100));  // 2
console.log(Math.exp(2));      // e^2 ≈ 7.389


// Use Cases in Real Life

// Games → Random dice rolls, generating random enemy positions.
// Graphics/Animations → Trigonometry for rotations and scaling.
// Finance apps → Rounding off currency values.
// Data analysis → Finding max/min, averages, growth (log/exp).