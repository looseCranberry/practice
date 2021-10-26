/** The Mighty Eight
 * NUMBER
 * BIGINT
 * STRING
 * BOOLEAN
 * NULL
 * UNDEFINED
 * OBJECT
 * SYMBOL
 */

let jsString = "I am a string! Also an object!";
let jsObject = { name: "Objectivity", value: "We're all objects, here!" };

/*
	All numbers in Javascript are 64-bit floats
*/

let jsFloat = 3.14;
let jsScience = 123e5;
let jsDecimal = 123e-5;

let jsNumber = 100;
let jsBiggerNo = 1000;

let jsResult = jsNumber + jsBiggerNo; // Result: 1100

let jsBiggestInteger = 999999999999999; // Will be 999999999999999
let jsOverflowInteger = 9999999999999999; // Well be 10000000000000000

// Floating point arithmetic sucks ass, like with any language.
let jsIncorrect = 0.2 + 0.1; // So simple, but will result in 0.30000000000000004
// For proper floating point arithmetic, make them whole numbers.
let jsCorrect = (0.2 * 10 + 0.1 * 10) / 10;

let x = 10;
let y = 30;
let a = "Hello,";
let b = "World!";

// Results in 40;
z = x + y;
// Results in Hello, World!
z = a + b;
// Results in 30Hello,
z = y + a;
// Results in 40Hello, World!
z = x + y + a + b;
// Results in Hello, World!1030
z = a + b + x + y;
// Results in 10
z = "100" / 10;
// Results in NaN (Not a Number)
z = "Apple" / 10;
// Results in Infinity (Division by Zero error)
z = 10 / 0;

10 == 10; // True
10 === 10; // True
10 == Number(10); // True
10 === Number(10); // False, Comparing Type Number with Type Object
10 == "10"; // True
10 === "10"; // False, Comparing Type Number with Type Object/String

/** An operator is +, -, /, * for addition, subtraction, multiplication,
 * and division respectively. The operand is what is being operated _on_
 */

5 + 8; // This has one operator (+) and two operands (5 and 8)

// A Unary operator operates on one operand
-5; // Negation operator
x++; // Increment operator
5 % 2; // Modulos, or Remainder operator
2 ** 2 + // Exponentiation operator, two to the power of two
	// The Unary plus operator can convert non-numbers to numbers
	true + // 1
	""; // 0
"10" + 10; // 1010
+"10" + 10; // 20

// Some operators can also assign a value
let ten = 10;
ten += 5; // ten == 15

let nullish = null;
alert(nullish ?? "Value is nullish"); // Alert window with "Value is nullish"
nullish = "Hello, World!";
alert(nullish ?? "Value is nullish"); // Alert window with "Hello, World!"
