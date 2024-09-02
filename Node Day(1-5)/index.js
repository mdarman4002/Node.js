// var a = 10;
// var b = 20;
// var c = 30;
// console.log(a + b + c);
// console.warn(a + b + c);
// console.error(a + b + c);

// try {
//     throw new Error("whoops, something happened bad");
//     //console.error(new Error("whoops, something happened bad"));
//   } catch (error) {
//     console.log("error: " + error);
//     console.log("stack " + error.stack);
//     console.log("message " + error.message);
// }


// import {x,y} from './app'; it can run in javascript but not in node.js

// const app = require('./app')
// console.log(app.x);
// console.log(app.y);
// console.log(app.z);
// console.log(app.z());
// console.log(app);

//filter function

const arr = [3,'3',1,2,3, 0,4,3,5,6];
let count = 0;
let result = arr.filter((item)=>{
    //console.log(item);
    //return item >= 3;
    if(item === 3) count++;
    return item == 3;
    // == equal only check value but === checked both value and it's type
})
console.log(result);
console.log(count);

//----------- watched till 5th video https://www.youtube.com/watch?v=zaLfOjNEOaQ&list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At