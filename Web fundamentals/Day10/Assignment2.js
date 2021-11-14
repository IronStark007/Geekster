// Question two:
// Create a function that takes in input as voltage and current and returns the power. 

function power(vol, curr) {
    let res = vol * curr;
    return res;
};
let voltage = 12;
let current = 5;
console.log("The power is:", power(voltage, current), "watts");