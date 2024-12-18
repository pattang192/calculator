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
let result;

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
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    if (y === 0) {return display.value = "Impossible!"}
    else return x / y
}

//Add on click function to operator buttons
operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator === undefined) {
        displayValue = +display.value;
        operator = event.target.textContent;
        num1 = displayValue;
        display.value = '';
        document.querySelector(".display").placeholder = num1;
        }

        else {
            displayValue = +display.value;
            num2 = displayValue;
            result = operate(operator, num1, num2);
            display.value = result.toFixed(5);
            operator = event.target.textContent;
            displayValue = +display.value;
            num1 = displayValue;
            display.value = '';
            document.querySelector(".display").placeholder = num1;
        }
    })
})

equal.addEventListener('click', () => {    
    displayValue = +display.value;
    num2 = displayValue;
    result = operate(operator, num1, num2);
    display.value = result.toFixed(5);
    displayValue = +display.value;
    display.value = '';
    document.querySelector(".display").placeholder = displayValue;
   // num1 = displayValue;
    //operator = undefined;
    //num2 = 0;
})

clear.addEventListener('click', () => {
    display.value = '';
    num1 = 0;
    num2 = 0;
    operator = undefined;
    document.querySelector(".display").placeholder = 0;
})

const operate = function (operator, num1, num2) {
if (operator === '+') return add(num1, num2);
if (operator === '-') return subtract (num1, num2);
if (operator === '*') return multiply (num1, num2);
if (operator === '/') return divide (num1, num2);
}
