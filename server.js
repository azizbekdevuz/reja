console.log("Web server started");

const express = require("express");
const http = require("http");
const app = express();

// 1. Entrance
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Sessions

// 3. Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing
app.get("/hello", function(req, res) {
    res.end("Hello Word to yio");
});
app.get("/gift", function(req, res) {
    res.end(`You are now on the gifts page`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});