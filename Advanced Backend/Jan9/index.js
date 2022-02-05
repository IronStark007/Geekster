const express = require('express');
const app = express();
const crud = require('./crud');

$port = 8000;
$localhost = "127.0.0.1";

app.use(express.json());


app.get('/:id', (req, res) => {
    id = req.url.split('/')[1];
    res.send(crud.getBlogbyID(id));

})

app.put('/', (req, res) => {
    crud.updateTitle(req.body);
    res.send({ "message": "Blog Updated" })
})

app.delete('/:id', (req, res) => {
    id = req.url.split('/')[1];
    crud.deleteBlogById(id);
    res.send({ "message": "Blog Deleted" })
})

app.listen($port, () => {
    console.log(`Connected to server http://${$localhost}:${$port}`)
});