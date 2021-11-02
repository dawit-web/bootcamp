
function compareToTen (num){
    return new Promise ((resolve, reject) =>{
        if (num > 10){
            resolve(`${num} is greater than 10, success!`)
        } else{
            reject(`${num} is les than 10 , error!`)
        }

    });
} 

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


// Exercise 2 : Promises

// 1.Create a promise that resolves itself in 4 seconds and returns a “success” string.
// 2.Read about Promise.resolve() and Promise.reject().
// 3.How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// 4.Add code to catch errors and console.log ‘Ooops something went wrong’.


let self =  new Promise ((resolve, reject) => {
    setTimeout(() => {    
            resolve("success")
    }, 4000);
  });

self.then(resolve => 
    console.log(resolve))
.catch(error => 
    console.log( error ,"Ooops something went wrong"))

 let newsefl = Promise.resolve(setTimeout(() => {
    console.log('success')
}, 4000)
)

// Exercise 3 : Resolve & Reject 

promise.resolve(3).then((result => console.log(result));
promise.reject("boo").catch((error) => console.log(error));






// xp gold

//  const urls = [
//           'https://swapi.dev/api/people/1',
//           'https://swapi.dev/api/people/2',
//           'https://swapi.dev/api/people/3',
//           'https://swapi.dev/api/people/4'
//         ]

//  Promise.all(urls.map(url => {
//     fetch(url).then(people => people.json())
//  })
//   .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
  
//   .catch(error => console.log('ughhhh fix it!', error)‏
// })
