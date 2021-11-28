var count = 0;


function editbtnclick() {
    let button = document.getElementById('btnEdit');
    let namerow = document.getElementById('nameref');
    let descrow = document.getElementById('descref');
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
    let date = document.getElementById('dateref');
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    if (button.innerText == "Edit") {
        button.innerText = "Save";
        name.value = namerow.innerText;
        desc.value = descrow.innerText;
    } else if (button.innerText == "Save") {
        button.innerText = "Edit";
        namerow.innerText = name.value;
        descrow.innerText = desc.value;
        name.value = " ";
        desc.value = " ";
        date.innerText = datetime;
    }
}


function createbtnclick() {
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
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
    tdDate.id = "dateref";
    tdName = document.createElement('td');
    tdName.id = "nameref";
    tdDesc = document.createElement('td');
    tdDesc.id = "descref";
    tdbtn = document.createElement('td');

    btnEdit = document.createElement('button');
    btnEdit.id = 'btnEdit';
    btnEdit.addEventListener('click', editbtnclick);

    btnDelete = document.createElement('button');
    btnDelete.id = "btnDelete";
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
    count++;
    tdNo.innerText = count;
    btnDelete.className = count;
    trCreate.id = count;
    tdDate.innerText = datetime;
    tdName.innerText = name.value;
    tdDesc.innerText = desc.value;
    name.value = " ";
    desc.value = " ";

    btns = document.getElementById('btnbox');
    tdbtn.appendChild(btnEdit);
    tdbtn.appendChild(btnDelete);
    btnEdit.innerText = "Edit";
    btnDelete.innerText = "Delete";
};


let createbtn = document.getElementById('create-btn');
let createEvent = createbtn.addEventListener('click', createbtnclick);