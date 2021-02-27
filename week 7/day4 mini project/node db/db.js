console.log ('hello');
const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'run',
    database :'products'
  }
});

const app = exp();
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.post('/nodedb',(req,res)=>{
  console.log(req.body);
    res.send({message:'OK'})
  })
  
  
app.get('/show', (req,res)=>{
  db('products')
  .select('name')
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})
 
app.post('/find', (req,res)=> {
  console.log(req.body);
     console.log(req.body.quantity);
  const {product,quantity} = req.body;
  db('products')
  .insert([{ name: product , quantity: quantity }])
  .returning('*')
  .then(data => {
    console.log('data1',data)
    res.send({ message: 'OK' });
    
  })
    .catch(err => {
      console.log(err)
      res.send({ message: err });

    })
  });

// app.listen(3000)