let num1 = 0;
let num2 = 0;
let operator;
let displayValue;
const display = document.querySelector(".display");
let placeholder = document.querySelector(".display").placeholder;
const numBtns = document.querySelector(".number-buttons");
const operatorBtns = document.querySelectorAll(".operator-buttons > div > button");
const equal = document.querySelector(".equal-button");
const clear = document.querySelector(".clear-button");
let result = 0;

let number = document.querySelectorAll(".number-buttons > button");

//Create function that populates display
const populateDisplay = function() {
    display.value += event.target.textContent;
    return display.value;
}

//Add on-click function to number buttons
for (const num of number) {
    num.addEventListener('click', populateDisplay);
}

//Create basic calculator functions
const add = function (x, y) {
    result = x + y;
    return result;
}
const subtract = function (x, y) {
    result = x - y;
    return result;
}

const multiply = function (x, y) {
    result = x * y;
    return result;
}

const divide = function (x, y) {
    result = x / y;
    return result;
}

//Add on click function to operator buttons
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue = +display.value;
        num1 = displayValue;
        console.log(num1);
        console.log(typeof num1)
        operator = event.target.textContent;
        console.log(operator)
        display.value = '';
    })
})

equal.addEventListener('click', () => {
    displayValue = +display.value;
    num2 = displayValue;
    console.log(num2);
    console.log(typeof num2)
    display.value = operate(num1, operator, num2);
})

clear.addEventListener('click', () => {
    display.value = '';
    num1 = 0;
    num2 = 0;
    operator = '';
})


const operate = function (num1, operator, num2) {
if (operator === '+') return add(num1, num2);
if (operator === '-') return subtract (num1, num2);
if (operator === '*') return multiply (num1, num2);
if (operator === '/') return divide (num1, num2);
}










