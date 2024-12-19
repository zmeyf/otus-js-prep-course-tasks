// *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.

// *pow (a, x)
    const powNum1 = function (a, x) {
    return a**x;
}
// console.log(powNum1(2,2));

// *pow (a, x)
// const powNum2 = function (a, x) {
//     let res=1;
//     for (let i = 1; i <= x; i++) {
//         res = res*a;
//     }
//     return res;
// }
module.exports = powNum1;
