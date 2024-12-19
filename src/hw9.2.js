let input = prompt("Enter a number","");
let R = input;

while (R === '' || isNaN(R) || (R < 0)) {
    R = prompt("Enter a correct number!", "");
}
console.log(`The circumference is ${2 * Math.PI * R}.\nThe area of the circle is ${Math.PI * R**2}.`);
document.getElementById("measures").innerHTML = `The circumference is ${2 * Math.PI * R}.<br>The area of the circle is ${Math.PI * R**2}.`
