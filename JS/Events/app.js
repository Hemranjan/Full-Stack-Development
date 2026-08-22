// let btn = document.querySelector("#btn");

// btn.onclick = () => {
//     btn.innerText = "im clicked";
//     alert("button was clicked");
// };

// btn.onclick = function () {
//     btn.innerText = "im clicked";
// };


//Event Listeners:-
let btns = document.querySelectorAll("button");

for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;  //here only one value can be assign to onclick.

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);  //isme multiple events or value assign kar sakte hai.
}

function sayHello() {
    alert("Hello");
}

function sayName() {
    alert("Apna College");
}