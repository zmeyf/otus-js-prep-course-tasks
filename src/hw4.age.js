//Создайте объект user, содержащий поле name со значением ‘John’.
// 1.Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
// 2.Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
// *Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.

// 1. Object, age

// const userAge = +prompt("Type your age", "");

// let user = {
//     name: 'John'
// };

const addAge = function (user, userAge) {
    user.age = userAge;
    console.log (user);
}
// console.log(addAge({name: 'John',},18));


// *separate variables
//     let name = admin.name;
//     let age = admin.age;
//     let role = admin.role;
// let {name, age, role} = admin;
// console.log(name, age, role);

module.exports = addAge;
