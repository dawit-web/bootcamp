// let b = 3, d = 3, u = 3;
// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ + u

//  4*4*3*3+

//   Birthday Cake Candles
//   This array are Birthday Cake Candles
//   You can blow only the tallest candles
//   let ar = [2,4,4,1]
//   birthdayCakeCandles function will return
//   how many candles you can blow
// ‏


// let arr = [2,4,4,1]

// function numcandels (arr) {
// }
// let max = [ ]
// for (x of i) {
    
// }

// * findIntersection function return an array that
// * contain the numbers exist in both strings from the array.
 
// let arr = ["1,2,5,6,7", "2,5,7,8,15"];
// const findIntersection = (arr) => {
//   let arr1 = arr[0].split(',');   // [1,2,5,6,7]
//   let arr2 = arr[1].split(',');   // [2,5,7,8,15]
//   let ret = arr1.filter( value => {
//     return arr2.includes(value)
//   })
//   return ret;
// }
// console.log(findIntersection(arr));

// const tokyo = obj.tokyo;
//   const delhi = obj.delhi;
//   const shanghai = obj.shanghai;
//   const time = obj.datetime.time;
//   const date = obj.datetime.date;
//   console.log(tokyo,delhi,shanghai,time,date);
// }
// dist(population5

//     const {tokyo , delhi ,shanghai ,datetime{time,date}} = (obj)
//     console.log(tokyo,delhi,shanghai,time,date);
// }


// const users = {
//     user1: {
//       age: 44,
//       name: 'picard',
//     },
//     user2: {
//       age: 12,
//       name: 'sisko',
//     },
//     user3: {
//       age: 109,
//       name: 'janeway',
//     },
//   }

// //   let arr2 = users.map(id => users )
// //   console.log(arr2)
//   const { picard , janeway,dateage{age,date}} = (users)
//   console.log( picard, janeway,dateage{age,date);

    // const person = {
    //     name: 'John Doe',
    //     age: 25,
    //     location: {
    //         country: 'Canada',
    //         city: 'Vancouver',
    //         coordinates: [49.2827, -123.1207]
    //     }
    // }
    
 //Exercise
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce

 let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
    ];

let pepolevote = voters.reduce ((accumulator , Element ) => {
        if (Element.voted === true){
            return ++accumulator
        }else{
            return accumulator
        }
},0);

console.log(`the pepole voted ${pepolevote}`);


// Exercise Destructuring Objects

// function getDetails(name , house , goodstudent) {
// console.log(name , house , goodstudent)
// }
// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// Exercise 2
function getDetails({name, house, friend:{friendName, age}}) {
	console.log(name, house, friendName, age);
}
getDetails({name: 'Hermione Granger', house: 'Gryfindor', friend :  {friendName : 'Harry Potter', age : 20}})

//Exercise3

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first, last, housesLocation: [usa, france], houses : {value}}){
	console.log(first, last, value)
	console.log(usa, france)

}

getElonMuskDetails(elonPerson)