const exp = require('express')
const app = exp()

// Exercise 1 : Express & JSON
// app.use('/',exp.static(__dirname+'public'))

// console.log(__dirname+'/public')
 
// app.get('/',(req, res)=> {
//    const user = {
//    firstname: 'John',
//    lastname: 'Doe'
//    }
//  res.json(user);
//  console.log("{firstname: 'John', lastname: 'Doe' }")
    
// })
 

// app.listen(3000);
// console.log('you in 3000')

// Exercise 2 : Express & Parameters
app.get('/:id', (req, res) => {
    console.log(req.params)
    res.json(req.params);
})

app.listen(3000)