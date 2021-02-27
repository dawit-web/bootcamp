const { error } = require('console');
const fs = require('fs');

// const data = fs.readFileSync('./file.text', 'utf8');
// console.log(data);
//2 
// fs.writeFile('./text2','new data file', 'utf8', error => {
//     if(error) {
//       console.log('error');

//     }
    
// });

//3
let arr = ['bla bla ']

fs.writeFile('./text2',JSON.stringify(arr),'utf8', error => {
        if(error) {
        console.log('error');

        }
        
 });

 
 
 fs.appendFile('./text2', 'data to append', (err) =>  {
     if (err) {
         console.error(err)
         return
     }
 });
 
 
 
 console.log('newContent');