//ex xp --1

const http = require('http');

const server = http.createServer( (req, res) => {
    // console.log(req, method);
    res.setHeader('content-type','text/html');
    res.end('<h2>this is my first response<h2><h2>this is my second response<h2><h5>his is my third response<h5>');

});

server.listen(3001);



