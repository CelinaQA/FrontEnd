'use strict';

// container relevant information, properties (key value pairs)

// creating objects
let student = new Object();

let person = {}; // <-- short hand 

// adding properties to your object
// person.name = "Tony Stark";
// person["date of birth"] = 1965;

// console.log(person);
// console.log(person.name); //tony stark
// console.log(person["date of birth"]);
// console.log(person["name"]);

let blue = {};
blue["make"] = "hyundai";
blue["model"] = "i30";
blue["colour"] = "gorgeous";

console.log(blue); // {make: "hyundai", model:"i30", color:"gorgeous"}

for (let attributes in blue) {
    console.log(`key:${attributes} value: ${blue[attributes]}`);
}

let carpark = [
    blue,
    { "make": "Audi", "model": "A5", "colour": "Silver" },
    { "make": "Merc", "model": "C", "color": "grey" }
]

console.log(carpark);

for (let cp of carpark) {
    console.log(cp);
    for (let car in cp) {
        // console.log(car); // returns the keys of the object
        // console.log(cp[car]); // returns the value
        console.log(`key: ${car} value: ${cp[car]}`); // key:[key] value:[value]
    }
}

let list = {
    "id": 0,
    "name": "string",
    "taskList": [
        {
            "description": "task 1",
            "id": 0,
            "isDone": true
        },
        {
            "description": "task 2",
            "id": 1,
            "isDone": true
        },
        {
            "description": "task 3",
            "id": 2,
            "isDone": false
        }
    ]
}
const displayList = document.querySelector("body");
console.log(list);
console.log(list.taskList);
for (let item of list.taskList) {
    console.log(item["description"])
}

for (let item of list.taskList) {
    let listResult = document.createElement("p");
    let text = document.createTextNode(`${item.description}`);
    if (item.isDone == true) {
        listResult.style = "text-decoration: line-through";
    } else { };
    listResult.appendChild(text);
    displayList.appendChild(listResult);
}

// JSON = javascript object notation 
// key : value , key2: value2, 

// let myJSONObject = {
//     "tescos": [
//         { "productname": "7up", "price": 0.99, "quantity": 100 },
//         { "productname": "flowers", "price": 15.99, "quantity": 200 }
//     ],
//     "cars": [
//         { "make": "Audi", "model": "A5", "colour": "Silver" },
//         { "make": "Merc", "model": "C", "color": "grey" }
//     ]
// }

// let toAdd = { "productname": "nail polish remover", "price": 3.99, "quantity": 9 };

// myJSONObject.tescos.push(toAdd);

// console.log(myJSONObject);

// console.log(blue);
// let blueToText = JSON.stringify(blue);
// console.log(typeof blue);
// console.log(typeof blueToText);

// let userData = `{"name":"sav"}`;
// console.log(typeof userData);
// let obj = JSON.parse(userData);
// console.log(typeof obj);

// let power = 200;
// let n = 0;
// let myCar = {
//     power,
//     ["prop_" + ++n]: n
// };
// console.log(myCar);

// let darthVader = {
//     allegiance: "empire",
//     weapon: "lightsabre",
//     sith: true
// };

// console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
// console.log("Darth Vader's weapon of choice is a " + darthVader.weapon);
// console.log("Darth Vader is a sith? " + darthVader.sith);
// console.log("Darth Vader is a Jedi? " + darthVader.sith == "jedi");

// let myArray = ["hello", "everyone"]
// console.log(myArray.length)
// myArray.push("one")
// myArray.push("two")
// myArray.push("three")
// console.log(myArray.length)
// myArray.shift();
// console.log(myArray);

// const powerUp = (n1, n2) => n1 ** n2;

// console.log(powerUp(2, 3));

// class Duck {
//     constructor(nametag) {
//         this.name = nametag;
//     }

//     speak() {
//         return "Quack!";
//     }

//     getName() {
//         return this.name;
//     }
// }

// const myDuck = new Duck("Charlie");

// console.log(myDuck.speak() + " exclaimed '" + myDuck.getName() + "'");

// let numberArray = [3, 24, 51, 41];
// let value = numberArray.find(greaterThan);

// function greaterThan(value) {
//     return value > 5;
// }

// console.log(value);

// const distance = (x, y) => Math.sqrt((x ** 2) + (y ** 2));
// console.log(distance(2, 5));