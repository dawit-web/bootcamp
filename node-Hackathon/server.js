const { text, json } = require('express');
const exp = require('express');
const fs = require('fs')

const app = exp ();

app.use(exp.urlencoded({extended:false}));
app.use(exp.json());

app.use('/',exp.static(__dirname+'/public'));

app.listen(3000, () =>{
    console.log('we are in 3000')
})


app.post('/Login', (req,res) => {
    const { firstName, lastName, Email, phone } = req.body
    res.json(req.body)
    let users= [];

    try{
       
        const text = fs.readFile('./txt');
        users  = JSON.parse(text.toString())
        
      }
      catch(err) {
          console.log(err)
          res.send({ message: err });
      }
      
      finally{
        console.log(users)
          users.push(req.body)
      }  


    fs.writeFile('./txt',JSON.stringify(users) , 'utf8', err => {
    if(err) {
      console.log(err);
    }   
    res.json(users);
   
  
   });
  
 })


  


