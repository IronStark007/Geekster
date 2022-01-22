global.express = require('express');

const app = express();
const employee = require('./routes/employee')


app.use(express.json())

app.use('/', employee);


app.listen(8000, () => {
    console.log("Connected to server at 8000");
});