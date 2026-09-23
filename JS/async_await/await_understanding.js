function wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

async function demo() {
    console.log("Inside A");

    await wait();  //iske baad wala content 2seconds ke liye pause hoga jab tak promise return nahi ho jata nahi.

    console.log("Inside B");
}

console.log("Start");

demo();

console.log("Outside");