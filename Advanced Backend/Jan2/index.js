const http = require('http');
const crud = require('./crud');

$port = 8000;
$localhost = "127.0.0.1";


http.createServer((req, res) => {
    console.log("req url", req.url.split('/'))
    if (req.url == "/blogs" && req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(crud.getAllBlogs());
    } else if (req.url == "/blogs" && req.method == "POST") {
        req.on('data', d => {
            crud.createBlog(d.toString());
        })

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ "message": "Blog Created" }));
            res.end();
        })
    } else if (req.url.split('/')[1] == "blogs" && req.method == "PUT") {
        var id = req.url.split('/')[2]
        req.on('data', d => {
            crud.updateBlog(d.toString(), id);
        })

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ "message": "Blog Updated" }));
            res.end();
        })
    } else if (req.url.split('/')[1] == "blogs" && req.method == "DELETE") {
        var id = req.url.split('/')[2]
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ "message": "Blog Deleted" }));
        res.end(crud.deleteBlog(id));
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ "message": "Invalid URL" }));
    }
}).listen($port, () => {
    console.log(`Connected to server http://${$localhost}:${$port}`)
});