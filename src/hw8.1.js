// 1. Output a weekday
// const input = prompt("Enter a date (DD.MM.YYYY)","");

const defineAweekday = function(input){
const [day, month, year] = input.split(".");
const inputDate = new Date(`${year}-${month}-${day}`)
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log('The weekday of your date is ' + weekDays[inputDate.getDay()] + '.');
}

module.exports = defineAweekday;
