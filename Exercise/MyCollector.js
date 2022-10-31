const myfirst = require("./MyFirst");
const mySecond = require("./MySecond");
const fs = require('fs');


//console.log(myfirst.myMultiplier(5));
//console.log(mySecond.myMultiplier(5));

let myFirstResult = myfirst.myMultiplier(14);
let mySecondResult=mySecond.myMultiplier(14)
let text = `\n The result from myFirst (${myFirstResult}) \n and\n The result from mySecond (${mySecondResult}) `;

// fs.writeFile("result.txt", text, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log(`You have created a file `);
// }); 

//appending data to the file

fs.appendFile("result.txt", text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(`The result is appended `);
}); 

