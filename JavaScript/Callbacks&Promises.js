'use strict';

// const greeting = (fname) => {
//     // create a popup which prints out the entered name
//     alert(`Hello ${fname}`);
// }

// // greeting("charlie");

// const writesomething = (cb) => {
//     // create a user input box that takes a value and assigns it to fname^
//     let username = prompt("Please enter your name: ");
//     cb(username); // greeting("sav");
// }

// writesomething(greeting);

// anonymous function = function without a name
// userInput((fname) => alert(`Hello ${fname}`));

// let promprom = new Promise((resolve,reject)=>{
//     //do something where i request information 
//     // compute something
//     let a = 1+1; 
//     if( a == 122){
//         // successful outcome
//         resolve("Oh great it all went well!");
//     }
//     else{
//         // something went wrong
//         reject("It didn't work");
//     }
// });

// .then() (if successful what should i do)
// .catch()  ( if failed/rejected what should i do )
// promprom.then( (message) => {
//     alert(`Woohoo let's throw a partyy ${message}`);
// }).catch( (error) => {
//     alert(`oh no something happened: ${error}`);
// });

// order of execution 
// promprom.then( (message) => {
//     console.log(`This is in the then block, the status is: ${message}`);
// }).catch( (err) => {
//     console.error(`This is in the catch block, the status is: ${err}`)
// }).then( () => {
//     console.log(`Do i execute?`);
// })

// let newPromise = new Promise((resolve, reject) => {
//     // complicated logic
//     console.log(`initial`);
//     resolve();
//     reject(); // unreachable code
// }).then(() => {
//     console.log(`Do this`);
// }).then(() => {
//     // throw new Error("Something has failed");
//     console.log(`Straight after`);
// }).catch(() => {
//     console.error(`oh no`);
// });

let newProm = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        //we say what happens in the success outcome
        resolve("Success");
    } else {
        //we say what happens in the reject outcome
        reject("Failed");
    }
})

//we then pass the value from resolve or reject and we set it to message.
//.then() is executed if Fulfilled/successful.
newProm.then((message) => {
    console.log(`This is in the then block and the status is: ${message}`);
    //.catch() is executed if rejected/failed.
}).catch((message) => {
    console.log(`This is in the catch block and the status is: ${message}`);
    //.then can be chained and will execute regardless of the outcome.
}).then(() => {
    console.log("I will take place regardless of what happened before.");
})