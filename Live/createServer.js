const http = require('http');
const fs = require('fs');
var path = require('path');
const express = require('express');
const app = express();

// const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     fs.readFile('/view/index.html', (err, data) =>{
    //         if(err) throw err;
    //         console.log("To check");
    //         res.end(data);
    //     })
    // }
    // else if(req.url === '/admin'){
    //     exports.address = {
    //         url : req.url
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     fs.readFile('./view/admin.html', (err, data) =>{
    //         if(err) throw err;
    //         console.log("To check Admin");
    //         res.end(data);
    //     })
    // }
    // else{
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.end("<h1>404 Page not found!</h1>");
    // }
// });

var IndexRouter = app.use("./js/index.js");

app.get("/", IndexRouter);


    // fs.readFile('index.html', (err, data) => {
    //     if(err) throw err;
    //     res.send(data);
    // })


// server.listen(3000, () => {
//     console.log("Listening to the port 8080");
// });

// const server = http.createServer((req, res) => {
//     path = '/';
//     console.log(path);
//     console.log(req.url);
//     switch(req.url){
//         case '/' :
//             path += 'index.html';
//             break;
//         case '/admin' :
//             path += 'admin.html';
//             break;
//         default :
//             res.end('404 Not Found!');
//     }
//     if(path === '/' || path === '/index.html'){
//         fs.readFile('index.html', (err, data) => {
//             if(err) throw err;
//             res.end(data);
//         })
//     }
//     else if(path === 'admin.html'){
//         fs.readFile('admin.html', (err, data) => {
//             if(err) throw err;
//             res.end(data);
//         })
//     }
//     fs.readFile(path, (err, data) => {
//         if(err) throw err;
//         res.end(data);
//     })
// });

// const server = http.createServer((req, res) => {
// 	let htmlFile = '';
// 	switch(req.url) {
// 		case '/':
// 			htmlFile = 'index.html';
// 			break;
// 		case '/admin':
// 			htmlFile = 'admin.html';
// 			break;
// 		default:
// 			break;
// 	}

// 	if(htmlFile)
// 		render(res, htmlFile);
// });

// function render(res, htmlFile) {
//     fs.stat(`./${htmlFile}`, (err, stats) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//         if(stats) {
//             fs.createReadStream(htmlFile).pipe(res).end();
//         } else {
//             res.statusCode = 404;
//             res.end('Sorry, page not found!');
//         }
//     });
// }

app.listen(8080, 'localhost', () => {
    console.log("listening to the port 8080");
    // console.log(path);
});