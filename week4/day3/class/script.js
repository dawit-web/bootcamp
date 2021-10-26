
// //Exercise

// let famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// 1. Use the map method, to create a new array and push the name of the people which age
// is equal or bigger than 16.
// 2. Use the map method, to create a new array and to push an object in the new array. 
// Each object should contain the name of the actor, and it's job

// let newfamous = myArr.map((val, i, arr) => {
//    if (val.age >= 16)
   
// }

// let newfamous = famousPeople.filter(function (val) {
//     return val.age >= 16;
// });
// console.log(newfamous);

// let newfamous = famousPeople.map((Element ) => {
//     let newfamous = [
//         {
//             name: "Brono mars",
//             job: "singer",
//             age: 120
//         }
//     ]
// });



// Exercise
// Use map to push every student into another array. Every student is an object with the key name, score and average. 
// Average should be equal to true if the score is bigger than 50.

// const studentsFootball = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// let newstudent = studentsFootball.map (element => {
// let valueAverage = element.score > 50 ? true : false ;
// return{
//     name:element.name,
//     score: element.score,
//     Average: valueAverage

// } 
// })
// console.log(newstudent);



// // Exercise 1: filter only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let newnum = numbers.filter(element =>( element >= 0));
// console.log(newnum);


// ----

// Exercise 2: Suppose you have a list of Star Trek characters, 
// and you want to get just the characters that appeared in 
// Star Trek: The Next Generation. 
// Use filter() to filter the array of characters below 

// const characters = [
//   { name: 'James T. Kirk', series: ['Star Trek'] },
//   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ];

// let newcharacters = characters.filter(function(val) {
//     return val["series"].includes("Star Trek: The Next Generation")
    
// });
// console.log(newcharacters);


// Exercise 2 : Employees



// function numbers (arr){
    
//     let arr2 = [ ]  
//     for (x of arr) {
//         if (x>2){
//             arr2.push(x)  
//         }
//     }
//    return arr2
// }
//  let a = numbers ([0,1,1,2,3,5,8])
//  console.log (a)

// function numbers (arr) { 

//     let arr2 = [ ]
//     if (typeof numbers === 'arr2') {
        
//     }
//     return Number * 2;
//     arr2
//     return ;
//   };

//   let arr  = numbers ([1, 2, 3])
//   console.log (arr)

//1. Create a structured html file linked to a js file
//2. Write a JS function that takes a parameter: myAge
// function ageinfo (arr){ 

// }
// let myage = '25'
// let agemom = myAge*2
// let agedad = agemom*1.2

// // 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)
// console.log = ( " the age of my mom" + agemom + "the age of my dad is" +agedad )


// // 4. Call the function

// let Arr = [1, 4, 9, 16];

// // pass a function to map
// let Arr2 = Arr.map((value, index) => value * 2);
// // array passed : firstArr
// // transformation passed : value * 2

// console.log(Arr2);
// // expected output: [2, 8, 18, 32]



// function (myage) {
//     console.log("My name is " + name + "my age is "  + age + "I have " + eyeColor + "eyes ")
// }
// var bill = 10.25 + 3.99 + 7.15 ;
// console.log(bill);

// var tip = 0.15 * bill;
// console.log(tip);


