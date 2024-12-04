// 2.Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом. (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

const doubleArray = function (arr1) {
    let arr2 = arr1.concat();
    arr2 = arr2.map(function (el2) {
        el2 = el2 * 2;
        return el2;
    });
    console.log(arr2);
}
// doubleArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
module.exports = doubleArray;