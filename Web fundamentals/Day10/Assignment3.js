// Question three:
// I have a bucket containing an amount of navy blue paint and 
// I'd like to paint as many walls as possible. 
// Create a function that returns the number of complete walls that I can paint, 
// before I need to head to the shops to buy more.
// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters

function areaOfWall(w, h, n) {
    if (w > 0 && h > 0) {
        let area = (w * h);
        let canPaint = area - n;
        if (canPaint != 0) {
            canPaint = n / canPaint;
            return canPaint.toFixed(2);
        } else {
            return 1;
        }

    }
    return "Invalid Inputs";
}

let width = 80;
let height = 80;
let metreSq = 3200;

console.log("I can paint", areaOfWall(width, height, metreSq), "Walls");