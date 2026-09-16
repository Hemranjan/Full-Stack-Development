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
    .then((resolve) => {
        console.log("data1 saved");
        console.log("result of promise:",resolve);  //showing resolved data
        return saveToDb("helloworld");
    })
    .then((resolve) => {
        console.log("data2 saved");
        console.log("result of promise:",resolve);
        return saveToDb("shraddha");
    })
    .then((resolve) => {
        console.log("data3 saved");
        console.log("result of promise:",resolve); 
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise:",error);  //showing error data
    });