let num1 = 0;
let num2 = 0;
let operator = null;
const display = document.querySelector(".display");
const backspace = document.querySelector(".backspace");
const number = document.querySelectorAll(".number");
const decimalPoint = document.querySelector(".decimal")
const arithmeticSign = document.querySelector(".arithmetic-sign")
const operatorBtns = document.querySelectorAll(".operator-buttons > button");
const equal = document.querySelector(".equal-button");
const clear = document.querySelector(".clear-button");

document.querySelector(".display").readOnly = true;

//Create function that populates display
const populateDisplay = function() {
    if(!(display.value.length === 11))
    display.value += event.target.textContent;
    return display.value;
}

//Add on-click function to backspace button
const deleteLastDigit = function() {
    display.value = display.value.slice(0, -1)
}
backspace.addEventListener('click', deleteLastDigit);

//Add on-click function to number buttons
for (const num of number) {
    num.addEventListener('click', populateDisplay);
}

//Add on-click function to decimal button
const addDecimalPoint = function() {
    if(display.value == '') {
        display.value = "0.";
    }
    if(!display.value.includes(".")) {
        display.value += ".";
    }
}
decimalPoint.addEventListener('click', addDecimalPoint);

//Add on-click function to arithmetic sign
const negateNumber = function() {
    if(display.value < 0 || display.value >0) {
        display.value = -display.value;
       }
}
arithmeticSign.addEventListener('click', negateNumber)

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
    if (y === 0) {return display.value = "Can't divide by 0"}
    else return x / y
}

//On click functions for operator buttons
const setOperator = function() {
    if(operator === null) {
        operator = event.target.textContent;
        num1 = display.value;
        display.value = '';
        display.placeholder = num1;
        }

        else {
            num2 = display.value;
            display.value = operate(operator, num1, num2).toFixed(5);
            operator = event.target.textContent;
            num1 = display.value;
            display.value = '';
            document.querySelector(".display").placeholder = num1;
        }
}
operatorBtns.forEach((button) => {
    button.addEventListener('click', setOperator)
})

const calculate = function() {
    num2 = display.value
    display.value = operate(operator, num1, num2).toFixed(5);
    num1 = display.value;
    operator = null;
}
equal.addEventListener('click', calculate);

const clearAll = function() {
    display.value = '';
    num1 = 0;
    num2 = 0;
    operator = null;
    document.querySelector(".display").placeholder = 0;
}
clear.addEventListener('click', clearAll)

const operate = function (operator, num1, num2) {
num1 = Number(num1);
num2 = Number(num2);
if (operator === '+') return add(num1, num2);
if (operator === '-') return subtract (num1, num2);
if (operator === '*') return multiply (num1, num2);
if (operator === '÷') return divide (num1, num2);
}