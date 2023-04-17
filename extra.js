// include node fs module
var fs = require('fs');
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.html', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

// Synchronous read
// console.log("Synchronous append method:");
  
var data = "\nMy name is Shashank Dubey";
  
// Append data to file
fs.appendFileSync('sample.txt', data, 'utf8');
console.log("Data is appended to file successfully.")
  
//Read File
data = fs.readFileSync('sample.txt');
console.log("Data in the file after appending is - \n" + data.toString());






// let filepath = '.' + req.url;

//     if (filepath === './') {
//         filepath = './index.html';
//     }
//     const extname = path.extname(filepath);
//     let contentType = 'text/html';
//     fs.readFile(filepath, (err, Content) => {
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 res.writeHead(404);
//                 res.end('404 Not found!');
//             }
//             else{
//                 res.writeHead(500);
//                 res.end('Internal server error');
//             }
//         }
//         else{
//             res.writeHead(200, {'Content-Type': contentType});
//             res.end(Content, 'utf8');
//         }
//         console.log("To check");
//         res.end(data);
//     });