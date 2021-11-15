// Exercise 3 : Express
const exp = require('express');


const app = exp();
app.get('/', (req,res)=>{
    console.log("Got a GET request for the homepage");
  res.send('<h1>this is an HTML tag</h1>')

})


// app.listen(3000);

// console.log('hello');
