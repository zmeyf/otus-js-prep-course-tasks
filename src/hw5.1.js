//Создайте массив целых чисел из 10 элементов.
// 1.Выведите в консоль сумму всех элементов массива.

// Create 10-integers array

const arithmeticMean = require("./hw3.3");
const newArr = [];
let i = 0;
let el;
while (i < 10) {
    el = Math.floor(Math.random() * 110);
    newArr.push(el);
    i++;
}
// console.log(newArr);

// 1. Sum of elements
const sumOfIntegers = function (arrayOfNums) {
    let sum = 0;
    arrayOfNums.forEach(function (el) {
        sum = sum + el;
    });
    console.log(sum);
}
// sumOfIntegers(newArr)
// sumOfIntegers([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

module.exports = sumOfIntegers;