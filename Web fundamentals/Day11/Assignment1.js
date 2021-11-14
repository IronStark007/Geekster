// Question 1
// Write a JavaScript function to generate an 
// array between two integers of 1 step length.

function arrayGenerator(start, end) {
    let arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
        i++;
    }
    return arr;
}
let start = 2;
let end = 50;
console.log(arrayGenerator(start, end));