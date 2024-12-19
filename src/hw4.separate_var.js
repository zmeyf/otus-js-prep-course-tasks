// *Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.

// const admin = { name: 'John', age: 18, role: 'admin' }
const sepVars = function (admin) {
    let {name, age, role} = admin;
    console.log(name, age, role);
};
// sepVars({ name: 'John', age: 18, role: 'admin' });

module.exports = sepVars;