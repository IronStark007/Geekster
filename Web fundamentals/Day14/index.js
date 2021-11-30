var count = 0;

function btnclick() {
    count++;

    // function btnEditClick(clicked_object) {
    //     // let btnEdit = document.getElementById('btnEdit' + count);
    //     // if (btnEdit.innerText == "Edit") {
    //     //     let span = document.getElementById('span' + count);
    //     //     btnEdit.innerText = "Save";
    //     //     console.log(span);
    //     console.log(clicked_object.getAttribute('name'));
    // }

    let textinput = document.getElementById('textinput');
    if (textinput.value == "") {
        alert('Type any text in textbox first')
    } else {
        let spanCreate = document.createElement('span');
        let btnEdit = document.createElement('button');
        let btnDelete = document.createElement('button');
        let breaks = document.createElement('br');

        spanCreate.innerText = textinput.value;
        btnEdit.innerText = "Edit";
        btnDelete.innerText = "Delete";

        spanCreate.style.margin = "10px";
        btnEdit.style.margin = "10px";
        btnDelete.style.margin = "10px";

        spanCreate.id = "span" + count;
        btnEdit.id = "btnEdit" + count;
        btnDelete.id = "btnDelete" + count;
        breaks.id = "breaks" + count;
        document.querySelector('#main').appendChild(spanCreate);
        document.querySelector('#main').appendChild(btnEdit);
        document.querySelector('#main').appendChild(btnDelete);
        document.querySelector('#main').appendChild(breaks);
        textinput.value = "";
        btnEdit.addEventListener("click", function() {
            let textinput = document.getElementById('textinput');
            let num = this.id.slice(-1);
            let span = document.getElementById("span" + num);
            if (this.innerText == "Edit") {
                this.innerText = "Save";
                textinput.value = span.innerText;
            } else if (this.innerText == "Save") {
                this.innerText = "Edit";
                span.innerText = textinput.value;
                textinput.value = "";
            }
        })

        btnDelete.addEventListener("click", function() {
            let textinput = document.getElementById('textinput');
            let num = this.id.slice(-1);
            let span = document.getElementById("span" + num);
            let btnEdit = document.getElementById("btnEdit" + num);
            let btnDelete = document.getElementById("btnDelete" + num);
            let breaks = document.getElementById("breaks" + num);
            span.remove();
            btnEdit.remove();
            btnDelete.remove();
            breaks.remove();
        })
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', btnclick);