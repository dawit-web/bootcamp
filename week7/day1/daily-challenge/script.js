// part 1
const num = require("./main");

const a = num.largeNumber;
const b = 5 ;
console.log(a+b);

//PART 2

const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('MY MODULE IS:')
    res.write('36!')
    res.write('<h2>Hi there at the frontend</h2>')
    return res.end();
   
}) 

server.listen(3000 ,() =>{
    console.log('i am listening... ');
});





