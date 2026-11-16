const express = require("express");

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// GET request
app.get("/", (req, res) => {

    console.log(req.params.id);
    console.log(req.query);

    res.send("User fetched");

});

// POST request
app.post("/users", (req, res) => {

    console.log(req.body);

    res.send("User created");  //see this using hoppscotch

});

app.listen(8080, () => {
    console.log("Server running");
});