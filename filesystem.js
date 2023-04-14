// include node fs module
var fs = require('fs');

// writeFile function with filename, content and callback function
// fs.writeFile('input.txt', 'Learning Node JS modules', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });

var data = "\nMy name is Shashank Dubey";

// // Append data to file
fs.exists('input.txt', (exists) => {
  if (exists) {
    fs.appendFile("input.txt", data, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        // Get the file contents after the append operation
        console.log("File is already exixsts\nSo Data appended succefully.");
      }
    });
  }
  else {
    fs.writeFile('input.txt', data, function (err) {
      if (err) throw err;
      console.log('No such file found,\nSo new file is created successfully.\nAnd written the data into it.');
    });
  }
})


