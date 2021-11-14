function btn1click() {
    let btn1 = document.getElementById('btn-1');
    let ans1 = document.getElementById('ans-1');
    if (btn1.innerText == "+") {
        btn1.innerText = "-";
        ans1.style.display = "block";
    } else {
        btn1.innerText = "+";
        ans1.style.display = "none";
    }
}

function btn2click() {
    let btn2 = document.getElementById('btn-2');
    let ans2 = document.getElementById('ans-2');
    if (btn2.innerText == "+") {
        btn2.innerText = "-";
        ans2.style.display = "block";
    } else {
        btn2.innerText = "+";
        ans2.style.display = "none";
    }
}

function btn3click() {
    let btn3 = document.getElementById('btn-3');
    let ans3 = document.getElementById('ans-3');
    if (btn3.innerText == "+") {
        btn3.innerText = "-";
        ans3.style.display = "block";
    } else {
        btn3.innerText = "+";
        ans3.style.display = "none";
    }
}

let btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', btn1click);
let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', btn2click);
let btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', btn3click);