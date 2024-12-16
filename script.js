let num1 = 0;
let num2 = 0;
let operator;
let displayValue;
const display = document.querySelector(".display");
const number = document.querySelectorAll(".number-panel > .number");
const decimalPoint = document.querySelector(".number-panel > .decimal")
const arithmeticSign = document.querySelector(".number-panel > .arithmetic-sign")
const operatorBtns = document.querySelectorAll(".operator-buttons > div > button");
const equal = document.querySelector(".equal-button");
const clear = document.querySelector(".clear-button");
let result = 0;


//Create function that populates display
const populateDisplay = function() {
    display.value += event.target.textContent;
    return display.value;
}

//Add on-click function to number buttons
for (const num of number) {
    num.addEventListener('click', populateDisplay);
}

//Add on-click function to decimal button
decimalPoint.addEventListener('click', () => {
    displayValue = display.value;
    if (!displayValue.includes(".")) {
        display.value += ".";
    }
})

//Add on-click function to arithmetic sign
arithmeticSign.addEventListener('click', () => {
    displayValue = +display.value;
    displayValue = -displayValue;
    display.value = displayValue;
})

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
//Add lines that call appropriate operator function on-click
//that will operate on num1 and display.value
    button.addEventListener('click', () => {
        displayValue = +display.value;
        num1 = displayValue;
        operator = event.target.textContent;
        display.value = '';
        document.querySelector(".display").placeholder = num1;
    })
})

equal.addEventListener('click', () => {
    displayValue = +display.value;
    num2 = displayValue;
    display.value = operate(num1, operator, num2);
})

clear.addEventListener('click', () => {
    display.value = '';
    num1 = 0;
    num2 = 0;
    operator = '';
    document.querySelector(".display").placeholder = 0;
})

const operate = function (num1, operator, num2) {
if (operator === '+') return add(num1, num2);
if (operator === '-') return subtract (num1, num2);
if (operator === '*') return multiply (num1, num2);
if (operator === '/') return divide (num1, num2);
}