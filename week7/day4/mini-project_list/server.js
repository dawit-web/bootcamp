const exp = require('express');
const bp = require('body-parser');
// const db = require('./db')
const fs = require('fs');
const app = exp();




app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.listen(3000, () => {
  console.log('yor are in 3000')
})


app.post('/find', (req,res)=> {
  console.log(req.body);
  let productlist = [];  
  
  try{
    const text = fs.readFileSync('./txt');
    listShop = JSON.parse(text)
  }
  catch(err) {
      console.log(err)
      res.send({ message: err });
  }
  
  finally{
      productlist.push(req.body)
  }  
 
  
fs.writeFile('./txt',JSON.stringify(productlist) , 'utf8', err => {
  if(err) {
    console.log(err);
  }   
  res.send({ message: 'OK' });
});

})

 
app.get('/show', (req,res)=>{

  let showProduct = [];
  try{
    const text1 = fs.readFileSync('./txt');
    showList = JSON.parse(text1);
  }
  catch(err ) {
    console.log(err);
    res.send({message:err.detail})
  }
   res.send(showProduct)
})


// app.post('/products',(req,res)=>{
//   console.log(req.body);
//     res.send({message:'OK'})
//   })
  