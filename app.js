const express = require("express");
const app = express();

// const fs = require("fs");


// MongoDB connect
const { db } = require("./server");




// 1 Kirish code
app.use(express.static("public")); // MiddleWare DP  // permission to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // permission for html form request



// 2: Session code



// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code

app.get("/", function (req, res) {
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("error db!")
        } else {
            res.render("reja", { items: data })
        }
    });
});

app.post("/create-item", function (req, res) {
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end('error');
        } else {
            res.end('successfully added')
        }
    })
});

app.get("/author", (req, res) => {
    res.render("author", { user });
});



module.exports = app;