'use strict';

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); // true
console.log(strictA === strictB); // false

console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

let age = 51;
if (age >= 18 && age <= 65) {
    console.log("OK")
} else if (age < 18) {
    console.log("Too young")
} else {
    console.log("Too old")
}

let msg = (age > 50 ? "Older than 50" : "Below 50");
console.log(msg);