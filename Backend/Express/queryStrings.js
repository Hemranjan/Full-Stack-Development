const express = require("express");

const app = express();


app.listen(8080, () => {
    console.log("Server started!");
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/search", (req,res) => {
    let {q} = req.query;
    res.send(`search results for query: ${q}`);
})