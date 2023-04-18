const express = require('express');
const app = express();

const port = process.env.PORT||3000;

app.set('view engine','ejs');

//Home route
app.get('/', (req, res)=>{
    console.log("Inside Home page");
    res.render('index',{title:"Login System"});
})

//Home route
app.get('/index', (req, res)=>{
    console.log("Inside Home page");
    res.render('index',{title:"Login System"});
})

//Home route
app.get('/admin', (req, res)=>{
    console.log("Inside Home page");
    res.render('admin',{title:"Admin Dashboard"});
})

//Home route
app.get('*', (req, res)=>{
    console.log("Inside Home page");
    res.end("<h1>404 Not found!</h1>");
})

app.listen(port, () => {
    console.log("Listening to the server on http://localhost:3000")
})