const defineTheString = function () {
const input = prompt("Enter a date, an email or a phone number");
    const dateExp1 = /[0-9]{4}[(\/)|\.|-][0-9]{1,2}[(\/)|\.|-][0-9]{1,2}/;
    const dateExp2 = /[0-9]{1,2}[(\/)|\.|-][0-9]{1,2}[(\/)|\.|-][0-9]{4}/;
    const emailExp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
const phoneNumExp = /^(\s*)?(\+)?([-_()+]?)\d([-_()+]?){10,14}(\s*)?/;

if (dateExp1.test(input) || dateExp2.test(input)) {
    console.log('It\'s a date!');
    alert('It\'s a date!');
}
else if (emailExp.test(input)) {
    console.log('It\'s an email!');
    alert('It\'s an email!');
} else if (phoneNumExp.test(input)) {
    console.log('It\'s a phone number!');
    alert('It\'s a phone number!');
} else {
    console.log('Data is undefined!');
    alert('Data is undefined!');
}
}
defineTheString()
