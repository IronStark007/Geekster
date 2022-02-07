const express = require('express');
const app = express();
const fs = require('fs');

var data = {
    portal: "GeeksforGeeks",
    knowledge: "unlimited",
    location: "Noida"
}

app.get('/', (req, res) => {
    let readJSON = fs.readFile('./data.json', 'utf8', (err, data) => {
        if (data) { console.error(data) }
    });
    res.send(data);
})

app.listen(8000, () => {
    console.log('Listening to port 8000')
});