let request = saveToDBPromise("apnacollege");

request
    .then(() => {
        console.log("promise resolved");
    })
    .catch(() => {
        console.log("promise rejected");
    });