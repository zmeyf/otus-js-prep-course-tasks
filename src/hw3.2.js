//2.Вывести в консоль таблицу умножения на 7.

const multiplicationTableFor7  = function () {
    let result = 0;
    for (let i = 1; i < 10; i++) {
        result = 7 * i;
        console.log(`7 x ${i} = ${result}`);
    }
}

// let x = 1;
// while (7 * x < 64) {
//     let result = 7 * x;
//     console.log(`7 x ${x} = ${result}`);
//     x++;
// }
// multiplicationTableFor7();
module.exports = multiplicationTableFor7;