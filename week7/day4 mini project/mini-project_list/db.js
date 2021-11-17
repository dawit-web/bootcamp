// const knex = require('knex');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     port: '5432',
//     user : 'postgres',
//     password : 'run',
//     database :'products'
//   }
// });



// app.use(bp.urlencoded({extended:false}));
// app.use(bp.json());

// app.use('/',exp.static(__dirname+'/public'));

// app.listen(3000, () => {
//   console.log('yor are in 3000')
// })



// app.post('/products',(req,res)=>{
//   console.log(req.body);
//     res.send({message:'OK'})
//   })
  
 
// app.get('/show', (req,res)=>{
//   db('products')
//   .select('name')
//   .then(data => {
//     console.log(data);
//     res.send(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({message:err.detail})
//   })
// })
 

// fs.writeFile('./txt',JSON.stringify(productdata) , 'utf8', error => {
//   if(error) {
//     console.log(error);
//   }   
//   res.send({ message: 'OK' });
// });



// app.post('/find', (req,res)=> {
//     console.log(req.body);
       
//     const {product,quantity} = req.body;
//     db('products')
//     .insert([{ name: product , quantity: quantity }])
//     .returning('*')
//     .then(data => {
//       console.log('data1',data)
//       res.send({ message: 'OK' });
      
//     })
//       .catch(err => {
//         console.log(err)
//         res.send({ message: err });
  
//       })
//     });

















// const product = () =>{
//   return db('products')
//   .select('country_id','country')
//   .from('country', 'asc')
// }


// module.exports ={
//   product,

// }
 
