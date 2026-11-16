// req contains incoming request information.
// res allows the server to send a response.

const express = require("express");

const app = express();


app.listen(8080, () => {
    console.log("Server started!");
});

app.get("/", (req, res) => { //(route,callback function)
    res.send("Hello! Welcome to my server.");
});

app.use((req, res) => {  //agar koi bhi certified route me nahi jayege toh hame Not Found with status 404 show kar dega.
    res.status(404).send("Not Found");
});
//app.listen(8080);
//app.use() can handle both GET and POST requests, along with PUT, PATCH, DELETE, and other HTTP methods.