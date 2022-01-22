const request = require('request');

function userInfo(req, res) {
    let options = {
        url: "http://dummy.restapiexample.com/api/v1/employees",
        method: "GET"
    }
    request(options, function(err, request, body) {
        console.log(body);
        let parseBody = JSON.parse(body);
        res.send(parseBody);
    })
}
module.exports = { userInfo };