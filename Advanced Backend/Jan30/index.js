const express = require('express');
const app = express();
const users = require('./route/user')


app.use(express.json())

app.use('/', users);


app.listen(8000, () => {
    console.log("Connected to server at 8000");
});