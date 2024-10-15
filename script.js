const add = function (x, y) {
    return x + y;
}
console.log(add(2, 3));

const subtract = function (x, y) {
    return x - y;
}
console.log(subtract(10, 4));

const multiply = function (x, y) {
    return x * y;
}
console.log(multiply(5 , 3));

const divide = function (x, y) {
    return x / y;
}
console.log(divide(10, 2))

let num1;
let num2;
let operator;

const operate = function (x, operator, y) {
if (operator = '+') add(x, y);
if (operator = '-') subtract (x, y);
if (operator = '*') multiply (x, y);
if (operator = '/') divide (x, y);
}