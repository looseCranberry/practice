const fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.toString()); // Apple,Orange,Banana
console.log(fruits.join(" ")); // Apple Orange Banana
console.log(fruits.join(": ")); // Apple: Orange: Banana

/** Arrays work like stacks... */
const cars = ["Toyota", "Ford", "Mazda"];
cars.push("Chevy");
console.table(cars); // Toyota, Ford, Mazda, Chevy...
// But Chevy is a big heaping pile of shit. Lets remove it...
let shittyMcShitBurger = cars.pop();
console.log(shittyMcShitBurger); // Chevy
console.table(cars); // Toyota, Ford, Mazda

/** However, you can also use Shift and Unshift to Remove and Add */
let favorite = cars.shift();
console.log(favorite); // Toyota
console.table(cars); // Ford, Mazda
let newLength = cars.unshift(favorite);
console.log(newLength == cars.length); // True
console.table(cars); // Toyota, Ford, Mazda

// You can also append by using the last index of the Array.
// Because Arrays are zero-indexed, this is done with the length
cars[cars.length] = "Honda";
console.table(cars); // Toyota, Ford, Mazda, Honda
// Or you can splice into them
cars.splice(2, 2, "Kia", "Hyundai");
// At index two, remove two, insert Kia and Hyundai
console.table(cars); // Toyota, Ford, Kia, Hyundai

// Or you can use splice to remove elements of an Array without
// leaving holes like delete cars[2] will...
delete cars[2];
console.table(cars); // Toyota, Ford, Undefined, Hyundai
// As opposed to
cars.splice(2, 1);
console.table(cars); // Toyota, Ford, Hyundai

// Slicing an Array will return a new array object copied
// from the original -- it will NOT remove the elements!
let newCars = cars.slice(2, 3);
console.table(cars); // Toyota, Ford, Kia, Hyundai
console.table(newCars); // Kia, Hyundai

// The spread syntax is a pretty versatile and nifty thing
function sum(x, y, z, n) {
	return x + y + z + n;
}
const nums = [1, 2, 3, 4];
sum(...nums); // returns 10
const bigNums = [1, 2, 3, 4, 5];
sum(...nums); // Works but returns 10

// Here's where it gets pretty cool
let varNums = [1, 2, 3, 4, 5];
function addNum(newNum) {
	varNums = [...varNums, newNum];
}
function appendNum(newNum) {
	varNums = [newNum, ...varNums];
}

// Can also be used to copy an object without
// having a reference to it
let carObj = { brand: "Ford", name: "Mustang" };
let carCopy = { ...carObj };
carCopy.brand = "Kia";
carCopy.name = "Optima";
console.log(carObj.brand); // Ford
console.log(carCopy.brand); // Kia

// Spread can be used multiple times
let argv = [0, 1];
func(-1, ...argv, 2, ...[3, 4, 5], 6, 7);
// And can make dates easy
let dateFields = [2020, 3, 4];
let dateObj = new Date(...dateFields); // April 4, 2020
// As well as copying and concating arrays
let argv1 = [1, 2, 3];
let argv2 = [...argv1, 4, 5, 6];
let argv3 = [7, 8, 9];
let argv4 = [...argv2, ...argv3];
