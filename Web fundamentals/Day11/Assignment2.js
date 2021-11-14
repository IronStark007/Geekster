// Question 2
// Write a JavaScript program to find the most frequent item of an array.

function mostFrequent(arr) {
    const count = {};
    var frequent;
    arr.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
    var sortedCount = Object.keys(count).sort(function(a, b) { return count[b] - count[a]; });
    frequent = sortedCount[0];
    return frequent;
}

let arr = [2, 4, 3, 4, 5, 6, 4, 3, 4, 5, 3, 4, 3]
console.log("The most frequent item is", mostFrequent(arr))