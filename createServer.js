const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<p>My name is Shashank Dubey</p>');
    res.write('\nI am from Lucknow, Uttar Pradesh');
    res.end();
    // console.log(req.url, req.method);
});

server.listen(8080, 'localhost', () => {
    console.log("Listening to the port 8080");
});

// const response = http.STATUS_CODES;
// console.log(response);