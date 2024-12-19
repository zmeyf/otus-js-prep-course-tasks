// 2. Object copy
// 2.Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.

const addRole = function (user, role) {
    let admin = Object.assign({}, user, {role: 'admin'});
    console.log(admin);
}
// addRole({ name: 'John', age: 18 }, 'admin');

module.exports = addRole;