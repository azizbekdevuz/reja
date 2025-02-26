console.log("Web server started");

const express = require("express");
const http = require("http");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// const res = require("express/lib/response");

// 1. Entrance
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Sessions

// 3. Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing
app.get("/", (req, res) => {
    res.render("reja");
});
app.get("/hello", function(req, res) {
    res.end("Hello Word from /hello page");
});
app.get("/gift", function(req, res) {
    res.end(`You are now on the gifts page`);
});
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

let visitCount = 0;

app.get("/counter", function (req, res) {
    visitCount++;
    res.end(`This page has been visited ${visitCount} times.`);
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});