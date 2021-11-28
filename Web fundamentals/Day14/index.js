function btnclick() {
    let textinput = document.getElementById('textinput');
    let divCreate = document.createElement('div');
    let pCreate = document.createElement('p');
    let btnEdit = document.createElement('button');
    let btnDelete = document.createElement('button');
    divCreate.style.display = "flex";
    divCreate.style.position = "absolute";
    divCreate.id = "innerdiv";
    pCreate.innerText = textinput.value;
    btnEdit.innerText = "Edit";
    btnDelete.innerText = "Delete";
    document.querySelector('#main').appendChild(divCreate);
    document.querySelector('#innerdiv').appendChild(pCreate);
    document.querySelector('#innerdiv').appendChild(btnEdit);
    document.querySelector('#innerdiv').appendChild(btnDelete);
}

let btn = document.getElementById('btn');
btn.addEventListener('click', btnclick);