const fs = require('fs');

// Exercise 1 : Reading From A File In Node.JS

// fs.readFile('./file.text','utf-8', (err,data) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data);
//     }
// })

// Exercise 2 : Writing Files With Node JS

// fs.writeFile('./datatxt','new data file', 'utf8', error => {
//     if(error) {
//       console.log(error);
//     }   
// });



// fs.appendFile('./datatxt','Buy orange juice', err => {
//     if(err){
//         cnonsole.log(err);
//     }
// })


fs.unlink('./datatxt' , err => {
    if(err)
    cnonsole.log(err);
})



