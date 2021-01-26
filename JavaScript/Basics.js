'use strict';
// 3 keywords
let a = "a"; // a value that changes
const b = "b"; // a set/fixed value
var c = "c"; // VERY BAD DO NOT USE

a = "This is the let"; //access variable a and change to value "b"
//b = "something else"; // fixed value - ERROR

// To print to console:
console.log(a);
console.info("info message");
console.warn("warning message");
console.error("error message");

// Try and declare variables as a CONST if you know it's not going to change
const fname = "celina"; //String?
const year = 2021; //Int?
const value = false; //Boolean?
const num = 2.4; //Double?
let what;
let how = null;

console.log(typeof fname); //String
console.log(typeof year); //Number
console.log(typeof value); //Boolean
console.log(typeof num); //Number
console.log(typeof what);
console.log(typeof how);

// Data types:
// String: "abc"
// Number: any kind - int/float/double...+-253 chars
// bigInt: >253 chars number
// Boolean: T/F
// null: Empty object - explicitly stating that it is empty
// undefined: unassigned value/not initialised at declaration
// symbol?

// String interpolation / concatenation
let str = "5 + 3 = ";
let val = 5 + 3;
let str2 = str + val
console.log(str2); // 5 + 3 = 8

// template literal
let string = `5 + 3 = ${val}`;
console.log(string); // 5 + 3 = 8

// Datatypes are dynamic, runtime compiler does not know the type until the program is running
// Primitive types: immutable, fixed elngth, quick to look up
// Objects: mutable, collection of properties, variables are references in memory


// Explanation of VAR and why it's bad

function deposit(increment) {
    let balance = 100000;
    return balance + increment
}

deposit(10);

console.log(balance);// Does not show balance if let 
console.log(balance); // Shows balance = 100000 if balance is VAR

// Use 'use strict' at top of doc to prevent accidentally creating a global variable