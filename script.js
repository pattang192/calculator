let num1 = 0;
let num2 = 0;
let operator;
let displayValue;
let display = document.querySelector(".display");
console.log(display)
const numBtns = document.querySelector(".number-buttons");
const operatorBtns = document.querySelectorAll(".operator-buttons > div > button");

let number = document.querySelectorAll(".number-buttons > button");

//Create function that populates display
const populateDisplay = function() {
    display.value += event.target.textContent;
    return +(display.value);
}

//Add on-click function to number buttons
for (const num of number) {
    num.addEventListener('click', populateDisplay);
}

//Create basic calculator functions

//Create result variable that updates with the result 
//of any operation. 
//Update functions to return result 
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
    operatorBtns.forEach((button) => {
        button.addEventListener('click', () => {
            displayValue = display.value;
            num1 = displayValue;
            operator = event.target.textContent;
            alert(num1);
        })
    })
if (operator === '+') add(num1, num2);
if (operator === '-') subtract (num1, num2);
if (operator === '*') multiply (num1, num2);
if (operator === '/') divide (num1, num2);
}
operate();









