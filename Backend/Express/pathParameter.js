const express = require("express");

const app = express();


app.listen(8080, () => {
    console.log("Server started!");
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;

    //let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;

    res.send(`Welcome to the page of @${username}`);
    //res.send(htmlStr);
})