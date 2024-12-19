//3. Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.

// let num = +prompt("Write a 3-digit number", "");
const digitsSum = (num) => console.log((Math.floor(num / 100)) + Math.floor((num % 100) / 10) + ((num % 10)));
// console.log(digitsSum(num))

module.exports = digitsSum;
