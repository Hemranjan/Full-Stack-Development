let args = process.argv;


//here we ignore two value means i=0,1 because these are by default value bin and path
for(let i=2;i< args.length;i++) {
    console.log("hello to" , args[i]);
}