const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.set("view engine", "ejs");  //view = templates

app.get("/", (req,res) => {
    res.send("This is our home");
    res.render("home.ejs");      
})

//through ejs we cant send responses although we render responses

