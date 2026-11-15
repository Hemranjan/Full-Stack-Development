let args = process.argv;


//here we ignore two value means i=0,1 because these are by default value bin and path
for(let i=2;i< args.length;i++) {
    console.log("hello to" , args[i]);
}

// If an interviewer asks, "What is Node.js?", you can answer:
// Node.js is an open-source, cross-platform JavaScript runtime environment built on Google's V8 JavaScript engine. It allows developers to execute JavaScript outside the browser. It uses an event-driven, non-blocking I/O model, making it suitable for building scalable network applications and backend services.

// Remember these three things
// 1. JavaScript is a programming language.
// 2. Node.js is a runtime environment that executes JavaScript outside the browser.
// 3. Express.js is a framework that runs on Node.js and simplifies backend development.