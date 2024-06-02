//37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function  make_shirts(size : string = "large", message : string = "I love Typescript"){
    console.log(`Creating a shirt with the size of ${size} and a message of ${message}`);
}
make_shirts();
make_shirts("Medium","Love life");
make_shirts("Small","Beautiful Me");