// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

// function first() {
//   console.log("First");
//   second();
//   console.log("First ends");
// }

// function second() {
//   console.log("Second");
// }

// first();

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();