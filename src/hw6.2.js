// 2.Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.

const isWord = function (text) {
    let line = text.split('');
    if (line.length === 0 || line === ' ') {
        return "Not defined";
    } else if (line.includes(' ') || line.includes(',')) {
        return false;
    }
    return true;
}
// console.log(isWord('cats and dogs'));
// console.log(isWord('Summer'));
// console.log(isWord('apples,plums'));

module.exports = isWord;
