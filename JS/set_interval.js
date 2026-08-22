//setInterval() is a JavaScript function used to run a function repeatedly after a fixed time interval.

// setInterval(function, delay)
// function → the function/code you want to run repeatedly
// delay → time interval in milliseconds

// setInterval(() => {
//     console.log("Hello");
// }, 2000);

//how to stop set interval function :-
const id = setInterval(() => {
    console.log("Hello");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Interval stopped!");
}, 5000);  
//5 sec ke baad Hello print hona band ho jayega
 