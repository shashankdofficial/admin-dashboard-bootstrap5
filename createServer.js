const http = require('http');

const server = http.createServer((req, res) => {
    res.write('My name is Shashank Dubey');
    res.write('\nI am from Lucknow, Uttar Pradesh');
    res.end();
});

server.listen(8080, '127.0.0.1', () => {
    console.log("Listening to the port 8080");
});

const response = http.STATUS_CODES;
console.log(response);