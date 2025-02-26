const http = require("http");

const mongodb = require("mongodb");

//MongoDB Connect
let db;
const connectionString = "mongodb://azizbek:1010aziz@cluster0-shard-00-00.fi3ba.mongodb.net:27017,Reja/?authSource=admin&ssl=true";
mongodb.connect(connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }, (err, client) => {
    if(err) console.log("Error on connecting MongoDB");
    else {
        console.log("MongoDB Connection Success");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    };
 });