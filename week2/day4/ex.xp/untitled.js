// //Exercise 1 : Information

// let me = ['dawit','27','music'];
// function infoAboutMe() {
	
//    console.log('dawit','27','music');
// }

// infoAboutMe();
 
 
// function infoAboutPerson ( Name, Age, Color, Hobbies ) {
// 	console.log(`Your name is ${Name}, you are ${Age} years old, your favorite color is ${Color}`)
// 	console.log(`Your name is ${Name}, you are ${Age} years old, your favorite color is ${Color}, you like to play ${Hobbies}`)
// 	let i = 0 ;
// 	while (i < Hobbies.length ) {
// 		console.log(Hobbies[i])
// 		i++;
// 	  }
// }
// //  infoAboutPerson("David", 45, "blue")
// //  infoAboutPerson("Josh", 12, "yellow")
//  infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
//  infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])
 

// // Exercise 2 : Keyless Car
// // 1.Ask the user for their age, and save the value to a variable.
//  let age = parseInt(prompt("what your age?."))
//  console.log(age)
// //Create a function called checkDriverAge() that will notify the user if they are
 
//  function checkDriverAge(){
// 	if (age < 18) {
// 		alert("Sorry, you are too young to drive this car. Powering off")
// 	} else if (age > 18) {
// 		alert("You are old enough to drive, Powering On. Enjoy the ride!")
// 	} else {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!")	
// 	}
//  }
//   checkDriverAge();

// //Exercise 3: Odd Or Even
// //1.Create a function called checkNumber() that takes no parameter.

// function checkNumber() {
// 	let n = 0;
// 	while (n<100) {
// 		n++;
// 		if (n%2) {
// 			console.log(`the number ${n} is odd`)
// 		} else{
// 			console.log(`the number ${n} is even`)
// 		}
// 	}
	  
// }
//   checkNumber();

// //Exercise 4: Find The Numbers Divisible By 23

// function isDivisible() {
// 	let n = 0; //that Divisiblt by 23 
// 	while (n <= 500) {
// 		n++;
// 		if (n % 23 === 0);{
// 			console.log(n)	
// 		}		 
//    }
  
// }

//  isDivisible();


// Exercise 5 : Amazon Shopping
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket() {
// 	let item = prompt("user for an item?");
// 	if (item in amazonBasket) {
// 		console.log(`yes we have it ${item}`);
// 	}	else{
// 			console.log("sorry, no");
// 		}
	
// }
//  checkBasket();

 ///7 

 let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = [ "banana", "orange", "apple" ];
 function myBill() {
    let sum = 0;
	for (let i = 0; i < shoppingList.length; i++) {
		if (shoppingList[i] in stock && stock[shoppingList[i]]>0) {
			sum = prices[shoppingList[i]];
			console.log(sum);
		}	
	}
    
}
myBill();