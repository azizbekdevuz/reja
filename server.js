const { MongoClient } = require("mongodb");

const connectionString = "mongodb://azizbek:1010aziz@cluster0-shard-00-00.fi3ba.mongodb.net:27017,Reja/?authSource=admin&ssl=true";

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect()
    .then(() => {
        console.log("DB connected successfully");
        module.exports.db = client.db("Reja");

        const app = require("./app");
        const http = require("http");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error("Database connection failed:", err));
