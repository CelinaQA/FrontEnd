'use strict';
const number1 = document.querySelector("#firstNumber"); //12
const number2 = document.querySelector("#secondNumber"); //15
const result = document.querySelector("#result");
const addButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const timesButton = document.querySelector("#times");
const divideButton = document.querySelector("#divide");
const clearValButton = document.querySelector("#clearValues");
const clearHisButton = document.querySelector("#clearHistory");
const divHistory = document.querySelector(".History");

// return the values entered by the user
const getValues = () => {
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)];
}

const printValue = (newResult) => {
    result.value = newResult
}

// methods for each of the calc functions
const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printValue(newResult);
    const operator = "+";
    addHistory(num1, num2, newResult, operator);
}

const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printValue(newResult);
    const operator = "-";
    addHistory(num1, num2, newResult, operator);
}

const multiply = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printValue(newResult);
    const operator = "*";
    addHistory(num1, num2, newResult, operator);
}

const divide = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printValue(newResult);
    const operator = "/";
    addHistory(num1, num2, newResult, operator);
}

const addHistory = (num1, num2, result, operator) => {
    let newHistory = document.createElement("p");
    let historyText = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    newHistory.appendChild(historyText);
    divHistory.appendChild(newHistory);
}

const clearValues = () => {
    number1.value = "";
    number2.value = "";
    result.value = "";
}

// Add event listener
addButton.addEventListener("click", add);
minusButton.addEventListener("click", subtract);
timesButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
clearValButton.addEventListener("click", clearValues);
clearHisButton.addEventListener("click", () => {
    divHistory.innerHTML = "";
});

//Or add "onclick='add()'" to button in html file