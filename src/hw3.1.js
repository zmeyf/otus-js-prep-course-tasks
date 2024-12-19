//1.Вывести в консоль сумму всех целых чисел от 50 до 100.

const sumOfIntegers = function () {
    let result = 0;
    for (let num = 50; num <= 100; num += 1) {
        result += num;
    }
console.log(result)
}

//
// let i = 50;
// let sum = 0;
// while (i<=100) {
//     sum = sum + i;
//     i++;
// }
module.exports = sumOfIntegers;