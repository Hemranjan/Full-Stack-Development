let h1 = document.querySelector("h1");

function changeColor(color, delay) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let num = Math.floor(Math.random() * 5) + 1;

            if (num > 3) {
                reject("promise rejected");
                return;  //reject() changes the Promise's state; return stops the function's execution.
            }

            h1.style.color = color;
            console.log(`color changed to ${color}`);

            resolve("color changed");

        }, delay);
    });
}


async function demo() {

    //What if there is NO await?
    //Start all these operations but don't wait for each one before starting the next.

    try {    //The try block basically says:-
            //Try to execute this code. If any error/rejected Promise occurs while executing it, stop the try block and go to catch.

        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);

        //Try running these four Promise operations one by one. If any one of them gets rejected, stop here and send the rejection to catch.
        //Wait for the Promise returned by changeColor() to finish before moving to the next line.
        //One more important point: await does not freeze the entire JavaScript/browser. It only pauses the execution of the async function at that point; the rest of JavaScript can continue running.
        //await is very important because it makes the color changes happen one after another, waiting for each Promise to finish before starting the next one.
        //await pauses the current async function, not the entire JavaScript program.
        // changeColor("red", 1000)
        //     ↓
        // Promise created
        //     ↓
        // wait 1 second
        //     ↓
        // Promise resolved/rejected
        //     ↓
        // then move forward

    }

    catch (err) {    //catch executes when an error/rejected Promise occurs in the try block, and it receives that error so we can handle it.

        console.log("error caught");
        console.log(err);

    }
}

demo();

//Try-Catch logic:-

// try {

    // "Try running this code"

// }
// catch (err) {

    // "If something goes wrong,
    // handle it here"

// }


//Promises Workflow:-
// Promise resolved
// await
//  ↓
// Promise resolved
//  ↓
// continue try
//  ↓
// next line

// Promise rejected
// await
//  ↓
// Promise rejected
//  ↓
// try stops
//  ↓
// catch executes


//Compare try and catch:-
// | Part        | What it does                       |
// | ----------- | ---------------------------------- |
// | `try`       | **Attempts to execute the code**   |
// | `await`     | **Waits for the Promise**          |
// | `resolve()` | Promise succeeds → `try` continues |
// | `reject()`  | Promise fails → `try` stops        |
// | `catch`     | Handles the rejection/error        |
