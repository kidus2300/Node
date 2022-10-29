const fs = require('fs');
const http = require('http');
const url = require('url');


// *******************************************************************
                            // FILES
                 // Blocking, synchronous way
                 // - synchronously block the code of execution
// *******************************************************************

// const textIn = fs.readFileSync('./xfile/input.txt', 'utf-8');
// // console.log(textIn);
// const textOut = `This is what we know about the js: ${textIn}.`;

// fs.writeFileSync('./xfile/hello.txt', textOut);
// console.log('File written!');

// *******************************************************************
                 // Non-blocking, asynchronous way
// *******************************************************************
                // To check which line of code is running first

                // fs.readFile('./xfile/start.txt', 'utf-8', (err, data1) => {
                //     console.log(data1)
                // })

                // console.log('this is from out side')

// *******************************************************************

// fs.readFile('./xfile/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./xfile/append.txt`, 'utf-8', (err, data2) => {
//         // console.log(data2)
//         fs.readFile('./xfile/input.txt', 'utf-8', (err, data3) => {
//             // console.log(data3)
//             fs.writeFile('./xfile/final.txt', `${data1} \n ${data2}\n ${data3}`, 'utf-8', err => {
//                 console.log('all the data is inserted')
//             })
//         })
//     })
// })
// console.log('Will read file!');


