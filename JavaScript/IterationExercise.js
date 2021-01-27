'use strict';
// Q1.
// for (let a = 100; a <= 200; a++) {
//     console.log(a);
// }

// Q2.
// for (let a = 100; a <= 200; a++) {
//     if (a % 2 == 0) {
//         console.log("-");
//     } else {
//         console.log("*");
//     }
// }

// Q3.
// for (let i = 1; i <= 10; i++) {
//     for (let a = 1; a <= 10; a++) {
//         console.log(i);
//     }
// }

// Q5.
let day = "Thurs";

switch (day) {
    case "Mon":
        console.log("It monday");
    case "Tues":
        console.log("It tuesday");
    case "Weds":
        console.log("It wedsday");
    case "Thurs":
        console.log("It thursday");
    case "Fri":
        console.log("It friday");
        break;
    case "Sat":
        console.log("It saturday");
        break;
    case "Sun":
        console.log("It sunday");
        break;
    default:
        console.log("What day?")
        break;
}