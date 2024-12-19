//*Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.

// let num = +prompt("Write a positive number","");
const arithmeticMean = function (num) {
    let g = 1;
    let suM = 0;
    let count = 0;
    while (g <= num) {
        if (g % 2 !== 0) {
            suM = suM + g;
            count++;
        }
        g++;
    }
    console.log(suM / count);
}
module.exports = arithmeticMean;
// arithmeticMean(6)
