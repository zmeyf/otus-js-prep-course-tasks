
const circle = function(R) {
if (R === '' || isNaN(R) || (R < 0)) {
    console.log("Enter a correct number!");
}else {
console.log(`The circumference is ${2 * Math.PI * R}.\nThe area of the circle is ${Math.PI * R**2}.`);
}
}

module.exports = circle;