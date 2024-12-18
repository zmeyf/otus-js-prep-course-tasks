// 2. Minutes passed since the beginning of today
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let minPass = hours * 60 + minutes;
console.log(minPass);
// document.getElementById('minutes').innerHTML = minPass + ' minutes have passed since the beginning of today.';