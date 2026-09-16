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

saveToDb("apna college")
    .then(() => {
        console.log("data1 saved");
        return saveToDb("helloworld");
    })
    .then(() => {
        console.log("data2 saved");
        return saveToDb("shraddha");
    })
    .then(() => {
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });