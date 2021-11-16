const exp = require('express');
const app = exp();

console.log((__dirname+'/puplic'))

app.get('/',(req,res)=>{
    let list  = [
      {name:'milk',price:80},
      {name:'brokoly',price:80},
      {name:'pasta',price:80},
    ];
    res.json(list);
  })

app.listen(3000);
console.log('hello');


app.get('/items',function(req,res){
    res.json(items);
    //__dirname : It will resolve to your project folder.
  });
  
  app.post('/items',function(req,res){
    res.json({id:name, price});
  });
  


 