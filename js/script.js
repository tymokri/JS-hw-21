"use strict";

function mainFunction(callback) {

    let num1 = +prompt('Input the first number.');
    let num2 = +prompt('Input the second number.');

    if (num1 === undefined || num2 === undefined) throw new Error("The number is undefined");
    if (typeof num1 !== "number" || typeof num2 !== "number") throw new Error("The number is not in type Number");
    if (isNaN(num1) || isNaN(num2)) throw new Error("The number is not a valid number");

    callback(num1, num2);
}

function exponentiation(num1, num2) {
    let result = num1 ** num2;
    alert(result);
}

function multiply(num1, num2) {
    let result = num1 * num2;
    alert(result);
}

function division(num1, num2) {
    let result = num1 / num2;
    alert(result);
}

function modulo(num1, num2) {
    let result = num1 % num2;
    alert(result);
}

mainFunction(exponentiation);

mainFunction(multiply);

mainFunction(division);

mainFunction(modulo);