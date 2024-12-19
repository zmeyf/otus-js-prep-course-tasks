//2.Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).

// let month = +prompt("Write a number from 1 to 12","")

const identifyMonth = function(month) {
    const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augus', 'September', 'October', 'November', 'December']
    if (month > 0 && month <= 12) {
        console.log(monthsList[month - 1]);
    } else {
        console.log('Try to write a number again');
    }
}
module.exports = identifyMonth;
// identifyMonth(10)