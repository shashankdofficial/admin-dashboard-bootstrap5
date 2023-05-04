const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

//Home route
app.get('/', (req, res) => {
  // console.log("Inside Home page");
  res.render('index', { title: "Login System" });
})

//Home route
app.get('/index', (req, res) => {
  // console.log("Inside /Index page");
  res.render('index', { title: "Login System" });
})

//Home route
app.get('/admin', (req, res) => {
  console.log("Inside Admin page");
  res.render('admin', { title: "Admin Dashboard" });
})

//Get table data from file
app.get('/getdata', (req, res) => {
  const d = JSON.parse(fs.readFileSync('input.json'));
  console.log(d)
  return res.status(200).send({ data: d })
})

//Form route
app.get('/form', (req, res) => {
  console.log("Inside Form page");
  res.render('form', { title: "FIll The Form" });
})

//Submit route
// var arr = [];
var arr2;
app.post('/submit', (req, res) => {
  // console.log(req.body);

  fs.exists('input.json', (exists) => {
    if (exists) {
      var temp;
      fs.readFile('input.json', 'utf8', (err, data) => {
        temp = data;
        console.log(temp);
        arr2 = JSON.parse(temp);
        arr2.push(req.body);
        fs.writeFile('input.json', JSON.stringify(arr2), function (err) {
          if (err) {
            console.log(err);
            return res.status(404).send("error");
          };
          console.log('No such file found,\nSo new file is created successfully.\nAnd written the data into it.');
          return res.status(200).send("File is created successfully.\nAnd written the data into it.");
        });
      });
    }
    else {
      arr = [];
      arr.push(req.body);
      const data = JSON.stringify(arr);
      fs.writeFile('input.json', data, function (err) {
        if (err) {
          console.log(err);
          return res.status(404).send("error");
        };
        console.log('No such file found,\nSo new file is created successfully.\nAnd written the data into it.');
        return res.status(200).send("File is created successfully.\nAnd written the data into it.");
      });
    }
  })
})

//Home route
app.get('*', (req, res) => {
  // res.end("<h1>404 Not found!</h1>");
  res.render('404', { title: "404 Not Found!" })
})

app.listen(port, () => {
  console.log("Listening to the server on http://localhost:3000")
})