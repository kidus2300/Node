// ****************************************************************************
// Group Discussion Node and Express
// ****************************************************************************
// - Introduction
//     - most common core Node modules
//         - fs, os, path, HTTP

// fs  - read synchronously
// 	     read asynchronously
//     - Events

// Building HTTP web server

//     - Simple messaging using the HTTP module and routing
//     - serving static files with HTTP
//     - Serving our puppy Website with HTTP

// Express js
//     - what is express ?
//     - Module vs package vs library vs framework
//     - HTTP vs Express


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
// const textOut = `Summery of js: ${textIn}.`;

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


// drawback of callback function - callback hell
// ****************************************************************************
//Simple Http request
// ****************************************************************************

// const http = require('http');
// const fs = require('fs')

// const myServer = http.createServer(function(req,res){
//     res.writeHead(200);
//     res.end("our first Http request")
// })

// myServer.listen(5000, '127.0.0.1', function(){
//     console.log("server listening to http at port 5000")
// })


// ****************************************************************************
// Routing
// ****************************************************************************                       

// const http = require("http");
// const myServer = http.createServer(function (req, res) {
//     console.log(req.url)
//     // res.writeHead(200);
//     // res.end("My first server!")
//     const pathName = req.url
//     // console.log(first)
//     if (pathName === '/' || pathName === '/Home') {
//         res.write("this is home page")
//         res.end()
//     } else if (pathName === '/About') {
//         res.write("this is About page")
//         res.end()
//     } else if (pathName === '/contact') {
//         res.write("this is contact page")
//         res.end()
//     } else {
//         res.writeHead(404)
//         res.end('404 not found')
//     }

// });
// myServer.listen(5000, "127.0.0.1", function () {
//     console.log(" Server is listening to HTTP requests at port 5000");
// });

// ****************************************************************************
// Express
// npm i express
// npm init
// npm i nodemon
// ****************************************************************************  

const express = require("express")
const app = express();
app.use('/', express.static("puppy-bootstrap"))
app.listen(8000, (err) => {
    if (err) {
        console.log(`error found ${err}`)
    }
    console.log("Listening to port 8000");
});


