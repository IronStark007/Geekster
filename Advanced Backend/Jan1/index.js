const express = require('express');
const http = require('http');
const app = express();
const blogging = require('./blogging');

$port = 8000;
$localhost = "127.0.0.1";

const getAllBlogs = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(blogging));
}

http.createServer(getAllBlogs).listen($port, () => {
    console.log(`Connected to server http://${$localhost}:${$port}`)
});