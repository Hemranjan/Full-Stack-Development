// req contains incoming request information.
// res allows the server to send a response.

const express = require("express");

const app = express();


app.listen(8080, () => {
    console.log("Server started!");
});

app.get("/", (req, res) => {
    res.send("Hello! Welcome to my server.");
});

//app.use() can handle both GET and POST requests, along with PUT, PATCH, DELETE, and other HTTP methods.