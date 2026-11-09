const axios = require("axios");
let url = "https://catfact.ninja/fact";



async function getFacts() {
    try {
        let res = await axios.get(url);
        //let data = await res.json();
        console.log(res);

    } catch (e) {
        console.log("error - ", e);
    }

    console.log("bye");
}
getFacts();