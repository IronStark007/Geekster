const btn1click = () => {
    let btn1 = document.getElementById('btn-1');
    const styles = window.getComputedStyle(btn1);
    let span1 = document.getElementById('span-1');
    let span2 = document.getElementById('span-2');
    span1.innerText = btn1.innerText;
    span1.style.color = styles.backgroundColor;
    span2.style.color = "purple";
}
const btn2click = () => {
    let btn2 = document.getElementById('btn-2');
    const styles = window.getComputedStyle(btn2);
    let span1 = document.getElementById('span-1');
    let span2 = document.getElementById('span-2');
    span1.innerText = btn2.innerText;
    span1.style.color = styles.backgroundColor;
    span2.style.color = "orange";
}

const btn3click = () => {
    let btn3 = document.getElementById('btn-3');
    const styles = window.getComputedStyle(btn3);
    let span1 = document.getElementById('span-1');
    let span2 = document.getElementById('span-2');
    span1.innerText = btn3.innerText;
    span1.style.color = styles.backgroundColor;
    span2.style.color = "brown";
}

let btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', btn1click);
let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', btn2click);
let btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', btn3click);