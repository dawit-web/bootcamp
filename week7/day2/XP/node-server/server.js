// Exercise 2 : HTTP & JSON
const http = require('http');

const server = http.createServer( (req, res) => {
    res.setHeader('content-type','application/json');
    const user = {
        firstname:'jonh',
        lastname: 'doe'
      } 
    res.end(JSON.stringify(user));
});

// server.listen(8080);

