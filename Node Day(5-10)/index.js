

// console.log("Hello world"); // global module because don't need to import

// const fs = require('fs'); // non global module because we need to import
// fs.writeFileSync("hello1.txt","learn from youtube video 6th");// create a new file

// //check the file directory
// console.log("directory ->>>"+ __dirname);

// const fs = require('fs').writeFileSync; // don't need to import all module of fs
// fs("code.txt","do practice");// directly can use require module

// http module
const http = require('http');
function datacontrol(req, resp){
    resp.write("Hello");
    resp.write(" world");
    resp.end();
}
// http.createServer(datacontrol).listen(4000);

// using arrow function
http.createServer((req,resp)=>{
    resp.write("<h1>How are you </h1>")
}).listen(4000);

// npm init -> it initialize the package.json file and keep
// brief history of the project like version
/*
The package.json file is a crucial file in any Node.js project. It's a JSON file that contains metadata about your project, such as its name, version, dependencies, and scripts.

Here's a breakdown of the common properties you'll find in a package.json file:

name: the name of your project
version: the version number of your project
description: a brief description of your project
main: the entry point of your project (usually index.js or app.js)
scripts: a list of scripts that can be run with the npm run command
dependencies: a list of dependencies required by your project
devDependencies: a list of dependencies required only for development (e.g., testing frameworks)
Some other properties you might find in a package.json file include:

author: the author of the project
license: the license under which the project is released
keywords: a list of keywords related to the project
repository: information about the project's repository (e.g., GitHub)
*/

// npm i color
console.log("helo00df0");
const color = require('colors'); // npm install colors
console.log("Hello".red);


// if node_modules file deleted then using "npm install" command can be reinstall

//instlled globally nodemon
// cmd-> npm i nodemon -g / npm install nodemon -g
// it help to run the code continuously 

// node.js is a single thread or async language