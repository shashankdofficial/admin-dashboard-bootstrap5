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

