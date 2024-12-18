const triangle = function (side1, side2, side3) {
    let sides = [side1, side2, side3];
    sides = sides.sort();
    if (sides[2]**2 === sides[0]**2 + sides[1]**2) {
        console.log("This is a right triangle.")
    } else {
        console.log("This is not a right triangle.")
    }
}

module.exports = triangle;