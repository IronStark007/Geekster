// Question one:
// Create an object and store the height and radius of a cylinder in it. Create a function to calculate the volume andsurface area of the cylinder

let cylinder = {
    height: 35,
    radius: 20
}

function cylinderArea(h, r) {
    if (r > 0 && h > 0) {
        let area = 3.141 * (Math.pow(r, 2)) * h;
        return (area);
    } else {
        return "Invalid inputs";
    }
}
console.log("The Area of cylinder is:")
console.log(cylinderArea(cylinder.height, cylinder.radius));

function cylinderSurface(h, r) {
    if (r > 0 && h > 0) {
        let surface = (2 * 3.141 * r * h) + (2 * 3.141 * (Math.pow(r, 2)));
        return surface;
    }
    return "Invalid inputs";
}

console.log("The Surface Area of Cylinder is:")
console.log(cylinderSurface(cylinder.height, cylinder.radius));