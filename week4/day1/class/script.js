// function check (Firstname = 'dawit' , Lastname =  'getahon' ){ 
//     console.log(Firstname ,Lastname);

// }

// check ();
// check ( 'moshe ');
// check('babi' ,'david');

// function compare(a, b, operator) {
//     if (operator === "+") {
//         return a+b;
//     } else if (operator === "-") {
//         return a-b;
//     } else {
//     	return "ERROR";
//     }
//     console.log("end of func")
// }

// let resultA = compare(2,3,"+");
// console.log(`The result of the function is ${resultA}`) // true 5

// let resultB = compare(2,3,"-");
// console.log(`The result of the function is ${resultB}`)//true -1

// let resultC = compare(2,3,"*");
// console.log(`The result of the function is ${resultC}`)// false eror
// white_check_mark
// eyes
// raised_hands

// OBJECT DESTRUCTURING
// let {firstName, age} = {firstName:"john", age:12}
// console.log(firstName, age)

// //With function
// function detailsUser(){
// 	//local variables
// 	let username = "John";
// 	let age = 12;
// 	return {
// 		user : username,
// 		userAge : age
// 	}
// }

// let details = detailsUser();
// let {user, userAge} = details
// console.log(user, userAge)

// // ARRAY DESTRUCTURING
// let [nameUser, ageUser] = ["John", 12]
// console.log(nameUser, ageUser)

// //With functions
// function detailsUser(){
// 	//local variables
// 	let username = "John";
// 	let age = 12;
// 	return [username, age]; //["John", 12]
// }

// let details = detailsUser();
// let [person, personAge] = details;
// console.log(person, personAge) 

// let  favroit  = ['blue', 'red' ,'black'];
// let [moshe1 ,color2 , color3] = favroit;

// console.log(moshe1);
// console.log(color2);
// console.log(color3);

// Exercise 1:
// 1. Greet the user (ie. using the username as an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

// function greet (username){
//     console.log("hello" + username);
// }

// let greet = function (username) {
//     console.log("hello" + username)
// }

// greet("ela");
// greet("Lior");
// let greet = (username) => 
//    console.log ("Hello and welcome " +username); 


//  Exercise2:
// Create a button in the HTML file
// In the JS file, add an event listener to this button, do the exercise 3 times
// the callback function should be a function declaration
// the callback function should be an anonymous function
// the callback function should be an anonymous ARROW function

let button = document.getElementById("button");
// button.addEventListener("click", clikeme );
// function clikeme(){
//    console.log("you click me ")
// }
button.addEventListener("click", () => console.log("you clik me "))
 

// let btn  = function (event) {
// alert(`hellp i am ${Event.target.textContent} button `)
// }
