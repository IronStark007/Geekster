function showHidePass() {
    let pass = document.getElementById('pass');
    let button = document.getElementById('show-hide');
    if (button.innerText == "Show Password") {
        pass.type = "text";
        button.innerText = "Hide Password";
    } else {
        pass.type = "password";
        button.innerText = "Show Password";
    }
}
let button = document.getElementById('show-hide');
button.addEventListener('click', showHidePass);