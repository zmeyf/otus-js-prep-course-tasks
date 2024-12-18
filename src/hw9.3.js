let input = prompt("Enter three numbers (Ex: 5 86 24)","");
let [a, b, c] = input.split(" ");
let nums = [a, b, c];

while (nums.includes(undefined) || nums.includes(NaN)) {
    input = prompt("Enter exactly three numbers (Ex: 5 86 24)","");
    [a, b, c] = input.split(" ");
    nums = [a, b, c];
}

if ((b**2 - 4 * a * c) < 0) {
    console.log("There are no roots for this equation.");
} else if ((b**2 - 4 * a * c) === 0) {
    let result = ((-b) / (2 * a));
    console.log(result);
} else {
    let result1 = (((-b) + Math.sqrt(b**2 - 4 * a * c)) / 2 * a);
    let result2 = (((-b) - Math.sqrt(b**2 - 4 * a * c)) / 2 * a)
    console.log(result1, result2);
}