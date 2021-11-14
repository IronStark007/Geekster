let url = 'https://fakestoreapi.com/products/'
const fetchingAPI = fetch(url).then(response => {
    return response.json()
}).then(data => {
    var myTable = "<table><tr>";
    myTable += "<th>ID</th><th>TITLE</th><th>PRICE</th><th>IMAGE</th><th>RATE</th></tr><tr>"
    var row = 1;
    data.forEach((element, i) => {
        myTable += `<td>${element.id}</td><td>${element.title}</td><td>${element.price}</td><td><img src="${element.image}"/></td><td>${element.rating.rate}</td>`
        var next = i + 1;
        if (next % row == 0 && next != data.length) {
            myTable += "</tr><tr>";
        }
    })
    myTable += "</tr></table>";
    document.getElementById("tableContainer").innerHTML = myTable;

})