var count = 0;
let right = document.getElementById('right');
right.addEventListener('click', function() {
    let ball = document.getElementById('ball');
    ball.style.marginLeft = count + "em";
})

let left = document.getElementById('left');
left.addEventListener('click', function() {
    count = 0;
    let ball = document.getElementById('ball');
    if (count >= 88) {
        ball.style.marginRight = count + "em";
        count++;
    } else {
        alert("Maxium left reached")
    }
})