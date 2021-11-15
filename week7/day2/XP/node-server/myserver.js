// Exercise 1 : HTTP
const http = require('http');

const server = http.createServer((req, res) =>{
    res.setHeader('content-type','text/html');
    res.write('<h2>this is my first response<h2><br><h2>this is my second response<h2><br><h5>his is my third response<h5>');
    
})

server.listen(3001, () =>{ 
    console.log('you are in 3001');

});






