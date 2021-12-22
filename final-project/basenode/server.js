const exp = require('express');
const cors = require('cors');
const DB = require('./DB');
const p4ssw0rd = require('p4ssw0rd');
// const hash = p4ssw0rd.hash("password");‏

const app = exp();
app.use(cors());
app.use(exp.urlencoded({extended:false}));
app.use(exp.json());
p4ssw0rd.simulate();

// app.use(hash());

app.post('/users', (req, res) => {
   console.log(req.body)
   const hash = p4ssw0rd.hash(req.body.password,{cost:10})
   console.log(hash)
    DB.Users(req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.username,hash)
    .then(data => {
        // console.log('ok',data) 
      res.send(data)   
    })
    .catch(err => {
        console.log('ok',err)
      res.send({message:err.datail})
    })
    
  })


  app.post('/connect', (req,res)=> {
    DB.retrivepass(req.body.username)
    // DB.Connect(req.body.username, req.body.password)
    .then(data => {
        // console.log('ok',data)
        // result == true 
        if (p4ssw0rd.check(req.body.password, data[0].password )) {
            // Passwords match
            DB.getUserid(req.body.username)
            .then(user =>{
              res.send(user)
              
            })
            // res.send(data)
          }
  
        else {
            res.send({message:"wrong username or password"})
            console.log('wrong',result) 
        }     
    })
})



app.post('/favorite', (req, res) => {
  console.log('bb',req.body)
  // res.send({message: 'ok'})
  DB.Favorite(req.body.user_id,req.body.calories, req.body.cholesterol_mg , req.body.carbohydrates_total_g, 
    req.body.fat_saturated_g, req.body.fat_total_g, req.body.fiber_g, req.body.name , 
    req.body.protein_g, req.body.potassium_mg, req.body.sodium_mg , req.body.sugar_g )
   .then(data => {
       // console.log('ok',data) 
     res.send(data)   
   })
   .catch(err => {
       console.log('ok',err)
     res.send({message:err.datail})
   })
   
 })


app.get('/userfavor/:user_name',(req,res)=>{
    console.log('AA',req.params)
    DB.userFavor(req.params.user_name)
    .then(data => {
      console.log('ok',data) 
      res.send(data)   
    })
    .catch(err => {
        console.log('ok',err)
      res.send({message:err.datail})
    })

  })

  app.delete('/userfavor/:favorite',(req,res)=>{
    console.log('AA',req.params)
    DB.deleteFavor(req.params.favorite)
    .then(data => {
      console.log('ok',data) 
      res.send({message:'i delete'})   
    })
    .catch(err => {
        console.log('ok',err)
      res.send({message:err.datail})
    })

  })


app.listen(5000, () => {
  console.log('you are in 5000');
});




// 'http://localhost:5000/deleteFavor/:user_name'

// (err, res) => {
//     if(err) {
//         res.send({err: 'err'})
//         console.log(err)  

//     }  if(res) {
//         res.send(res)
//     }else {
//         res.send({message:"wrong username or password"})
//         console.log('nono',data) 
//     }
//  } }

//   Hm3yq8hppYGN8Jk