const express = require("express");
const app = express();

// MongoDB connect
const { db } = require("./server");
const mongodb = require("mongodb");

// 1 Kirish code
app.use(express.static("public")); // MiddleWare DP  // permission to public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // permission for html form request

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/", async (req, res) => { 
  try {
    const documents = await db.collection("plans").find({}).toArray();

    const items = documents.map(doc => ({
      reja: doc.reja,  
      timestamps: doc._id ? new Date(doc._id.getTimestamp()).toLocaleString("en-US", { //adding timestamps
          weekday: "short", 
          year: "numeric", 
          month: "short", 
          day: "numeric", 
          hour: "2-digit", 
          minute: "2-digit",
          second: "2-digit",
      }) : "No timestamp",  //format the date properly
      _id: doc._id 
    }));

    res.render("reja", { items }); 
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error loading page");
  }
});

app.post("/create-item", function (req, res) {
  db.collection("plans").insertOne(
    { reja: req.body.reja, createdAt: new Date() },
    (err, data) => {
      res.json({
        reja: data.ops[0].reja,
        timestamps: data.ops[0]._id.getTimestamp(), //includes timestamps
        _id: data.ops[0]._id,
      });
    }
  );
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "All plans removed successfully!" });
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user });
});

module.exports = app;
