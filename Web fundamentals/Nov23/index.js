var count = 0;


function editbtnclick(event) {
    let num = event.target.id.slice(-1)
    let namerow = document.getElementById('nameref' + num);
    let descrow = document.getElementById('descref' + num);
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
    let date = document.getElementById('dateref' + num);
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    if (event.target.innerText == "Edit") {
        event.target.innerText = "Save";
        name.value = namerow.innerText;
        desc.value = descrow.innerText;
    } else if (event.target.innerText == "Save") {
        event.target.innerText = "Edit";
        namerow.innerText = name.value;
        descrow.innerText = desc.value;
        name.value = " ";
        desc.value = " ";
        date.innerText = datetime;
    }
}

function deletebtnclick(event) {
    let num = event.target.id.slice(-1)
    let btnEdit = document.getElementById('btnEdit' + num);
    let btnDelete = document.getElementById('btnDelete' + num);
    let namerow = document.getElementById('nameref' + num);
    let descrow = document.getElementById('descref' + num);
    let date = document.getElementById('dateref' + num);
    let trCreate = document.getElementById('tr' + num);
    namerow.remove();
    descrow.remove();
    date.remove();
    btnEdit.remove();
    btnDelete.remove();
    trCreate.remove();
}

function createbtnclick() {
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
    if (name.value == "" || desc.value == "") {
        alert('Type any text in textbox first')
    } else {
        let currentdate = new Date();
        let datetime = currentdate.getDate() + "/" +
            (currentdate.getMonth() + 1) + "/" +
            currentdate.getFullYear() + " @ " +
            currentdate.getHours() + ":" +
            currentdate.getMinutes() + ":" +
            currentdate.getSeconds();
        trCreate = document.createElement('tr');
        tdNo = document.createElement('td');
        tdDate = document.createElement('td');
        tdDate.id = "dateref" + count;
        tdName = document.createElement('td');
        tdName.id = "nameref" + count;
        tdDesc = document.createElement('td');
        tdDesc.id = "descref" + count;
        tdbtn = document.createElement('td');

        btnEdit = document.createElement('button');
        btnEdit.id = 'btnEdit' + count;
        btnEdit.addEventListener('click', editbtnclick);

        btnDelete = document.createElement('button');
        btnDelete.id = "btnDelete" + count;
        btnDelete.addEventListener('click', deletebtnclick);

        btnEdit.style.margin = '10px';
        btnEdit.style.align_items = 'center';
        btnEdit.style.width = "150px";

        btnDelete.style.margin = '10px';
        btnDelete.style.align_items = 'center';
        btnDelete.style.width = "150px";

        document.querySelector('table').appendChild(trCreate);
        trCreate.appendChild(tdNo);
        trCreate.appendChild(tdDate);
        trCreate.appendChild(tdName);
        trCreate.appendChild(tdDesc);
        trCreate.appendChild(tdbtn);

        tdNo.innerText = count;
        btnDelete.className = count;
        trCreate.id = 'tr' + count;
        tdDate.innerText = datetime;
        tdName.innerText = name.value;
        tdDesc.innerText = desc.value;
        name.value = "";
        desc.value = "";

        btns = document.getElementById('btnbox');
        tdbtn.appendChild(btnEdit);
        tdbtn.appendChild(btnDelete);
        btnEdit.innerText = "Edit";
        btnDelete.innerText = "Delete";
        count++;
    }
};


let createbtn = document.getElementById('create-btn');
let createEvent = createbtn.addEventListener('click', createbtnclick);