// Initial values for standard math
let a = 5;
let b = 2;
console.log("############# Arithmetic Operators #############");

// 1. Basic Arithmetic Operations
console.log("Addition (5 + 2):", a + b);             // 7
console.log("Subtraction (5 - 2):", a - b);          // 3
console.log("Multiplication (5 * 2):", a * b);       // 10
console.log("Division (5 / 2):", a / b);             // 2.5
console.log("Modulus/Remainder (5 % 2):", a % b);    // 1
console.log("Exponentiation (5 ** 2):", a ** b);     // 25

// 2. Increment and Decrement Operations
let x = 5;
x++; // Adds 1 to x
console.log("Increment (let x = 5; x++):", x);        // 6

let y = 5;
y--; // Subtracts 1 from y
console.log("Decrement (let y = 5; y--):", y);        // 4

console.log("############# Comparison Operators #############");
//comparison operator 
// 1. Equality and Inequality tests (Comparing 5 and "5")
let num = 5;
let strNum = "5";

console.log("Loose Equality (5 == '5'):", num == strNum);     // true
console.log("Strict Equality (5 === '5'):", num === strNum);   // false
console.log("Loose Inequality (5 != '5'):", num != strNum);   // false
console.log("Strict Inequality (5 !== '5'):", num !== strNum); // true

// 2. Relational tests
console.log("Greater Than (5 > 2):", 5 > 2);                   // true
console.log("Less Than (5 < 2):", 5 < 2);                      // false
console.log("Greater Than or Equal (5 >= 5):", 5 >= 5);         // true
console.log("Less Than or Equal (5 <= 3):", 5 <= 3);           // false
