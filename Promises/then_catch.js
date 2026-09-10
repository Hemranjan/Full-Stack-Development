function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

//then() & catch():-
let request = saveToDb("apnacollege");

request
    .then(() => {
        console.log("promise resolved");
    })
    .catch(() => {
        console.log("promise rejected");
});