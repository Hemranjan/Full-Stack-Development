function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });

}

async function showData() {

    console.log("Inside 1");

    const data = await getData();

    console.log(data);

    console.log("Inside 2");
}

showData();

console.log("Outside");