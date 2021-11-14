const getDate = require('./main.js');
const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader(200,{'Content-Type': 'text/html'});
    res.write('the date and time are currently: ' + getDate.newDate())
    res.end();
   
}) 

server.listen(8080);
    console.log('i am listening... ');


