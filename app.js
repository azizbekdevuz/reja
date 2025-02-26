console.log("Web server started");

const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB Call
const db = require("./server").db();

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

module.exports = app;