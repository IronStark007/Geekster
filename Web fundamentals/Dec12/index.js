let promise = fetch("https://meme-api.herokuapp.com/gimme/20");

let response = promise.then(function(response) {
    return response.json();
});

response.then(function(data) {
    display(data);
    // data.forEach(number => console.log(number));
});

function display(data) {
    let container_fluid = document.getElementsByClassName('container-fluid')[0];

    data.memes.forEach(function(element) {
        let creatediv = document.createElement('div');
        creatediv.className = 'container-fluid inner';
        container_fluid.appendChild(creatediv);

        let createH2 = document.createElement('h2');
        let createImg = document.createElement('img');
        let createH3 = document.createElement('h3');
        createH2.className = 'h2';
        createH3.className = 'h3';

        createH2.innerText = element.title;
        createImg.src = element.url;
        createH3.innerText = `By: ${element.author}`;
        creatediv.appendChild(createH2);
        creatediv.appendChild(createImg);
        creatediv.appendChild(createH3);

    })
}