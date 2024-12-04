//В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.
const circleInSquare = ((circle, square) =>
    (Math.sqrt(square) >= 2 * Math.sqrt(circle / Math.PI) ?  console.log(true) : console.log(false)));

module.exports = circleInSquare;