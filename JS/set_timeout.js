//setTimeout() is a JavaScript function used to run some code after a specified delay.

console.log("hi there");

//setTimeout(function, delay)
//function → the code/function you want to execute
//delay → time to wait in milliseconds

setTimeout( () => {
    console.log("Apna College");
}, 10000);  //10sec ke baad Apna College print hoga
//or iske print hone ke pehle hi there,welcome to print ho jayega then after 10 sec Apna College will print successfully

console.log("welcome to");