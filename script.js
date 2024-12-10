//Create onclick functions in global scope, then call it in Populate display or relevant function

let num1 = 0;
let num2 = 0;
let operator;
let displayValue;
let display = document.querySelector(".display");
const numBtns = document.querySelector(".number-buttons");
const operatorBtns = document.querySelectorAll(".operator-buttons > div > button");

let number = document.querySelectorAll(".number-buttons > button");

//Create function that populates display
const populateDisplay = function() {
    display.textContent += event.target.textContent;
    return +(display.textContent);
}

//Create basic calculator functions
const add = function (x, y) {
    return x + y;
}
const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operate = function (num1, operator, num2) {
if (operator === '+') add(num1, num2);
if (operator === '-') subtract (num1, num2);
if (operator === '*') multiply (num1, num2);
if (operator === '/') divide (num1, num2);
}
operate();









