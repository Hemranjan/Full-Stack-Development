const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.set("view engine", "ejs");  //view = templates
app.set("views", path.join(__dirname, "/views"));  //app ke andar set kar rahe views naam ka folder is jagah.toh isse directly search karlega views ko

app.get("/", (req,res) => { 
    res.render("home.ejs");      
})

app.get("/rolldice", (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
})

app.get("/ig/:username", (req,res) => {

    const followers = ["rahul","hem","ayush","tanush","sumit"];
    let {username} = req.params;
    res.render("instagram.ejs", {username,followers});
})

//through ejs we cant send responses although we render responses
//render me huge file bhej sakte hai.
