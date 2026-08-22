//getElementsByClassName:-
let imageChange = document.getElementsByClassName("oldImg");

// for(let i=0;i<imageChange.length;i++) {
//     imageChange[i].src = "assets/spiderman_img.png";
//     console.log(`valur of image no. ${i} is changed.`);
// }

//Query Selector:-
console.log(document.querySelector("h1"));
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));
//both are same, isse hame single anchor tag hi milega
console.dir(document.querySelector(".box a"));

//sab anchor tag chaiye then use querySelectorAll

console.dir(document.querySelectorAll(".box a"));

console.dir(document.querySelectorAll("p"));

//console.log() is mainly used to print and inspect values.
//console.dir() is mainly used to inspect an object and its properties.

//Getters and Setters:-
//element.setAttribute("attributeName", "newValue");

// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));
// img.setAttribute("src", "assets/creation_3.jpeg");


//Adding Elements in DOM:-
// document.createElement('p');

// let newP = document.createElement('p');

// console.dir(newP);

// newP.innerText = "Hi, I am a new p";

// console.dir(newP);

// let body = document.querySelector("body");

// body.appendChild(newP);