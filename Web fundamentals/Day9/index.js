let first = '';
let operator = '';
let second = '';
let result = '';

const display = (value) => {
    document.querySelector('#display').innerText = value;
}

const buttons_clicked = ele => {
    if (operator == '') {
        first += ele.target.dataset.number;
        display(first);
    } else {
        second += ele.target.dataset.number;
        display(second);
    }
}
let buttons = document.querySelectorAll('.item');
buttons.forEach(single_button => {
    single_button.addEventListener('click', buttons_clicked);
});

const add_click = () => {
    operator = "+";
}

const sub_click = () => {
    operator = "-";
}

const mul_click = () => {
    operator = "*";
}

const div_click = () => {
    operator = "/";
}

const clr_click = () => {
    first = '';
    operator = '';
    second = '';
    result = '';
    display('');
}




const equal_click = () => {
    if (operator == "+") {
        result = Number(first.slice(0, -1)) + Number(second);
        first = '';
        second = '';
        display(result);
        result = '';
    } else if (operator == "-") {
        result = Number(first.slice(0, -1)) - Number(second);
        first = '';
        second = '';
        display(result);
        result = '';
    } else if (operator == "*") {
        result = Number(first.slice(0, -1)) * Number(second);
        first = '';
        second = '';
        display(result);
        result = '';
    } else if (operator == "/") {
        result = Number(first.slice(0, -1)) / Number(second);
        first = '';
        second = '';
        display(result);
        result = '';
    }
    operator = '';
}


let add_button = document.getElementById('add');
add_button.addEventListener('click', add_click);

let equal_button = document.getElementById('equal');
equal_button.addEventListener('click', equal_click);

let sub_button = document.getElementById('sub');
sub_button.addEventListener('click', sub_click);

let mul_button = document.getElementById('mul');
mul_button.addEventListener('click', mul_click);

let div_button = document.getElementById('div');
div_button.addEventListener('click', div_click);

let clr_button = document.getElementById('clr');
clr_button.addEventListener('click', clr_click);