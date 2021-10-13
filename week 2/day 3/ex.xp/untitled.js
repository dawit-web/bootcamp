//Exercise 1 : Your Favorite Colors


 let colors = ["blue", "red", "black"] 
 let number = [""]
 
 for (let i = 0; i < colors.length; i++) {
	console.log(`My #${i+1} choice is ${colors[i]} `);
 }
  

//let "suffix" = [ "st" , "nd" , "rd" , "th" ]

// console. log =   'st'


// Exercise 2 : List Of People

//  let people = ['Greg', 'Mary', 'Devon', 'james']
//  //removes Greg = > "Mary", "Devon", "James"
//  people.shift();
//  //replace “James” to “Jason” = "Mary", "Devon", "Jason"
//  people.splice(2, 1,'Jason')
//  // add dawit at the end
//  people.splice(3,0,'Dawit');
//  console.log(people)

// people.forEach(element => console.log(element));

// for (let i = 0; i < people.length; i++) {
// 	// people.splice(1, 2);
// }

// console.log(people.slice(-3, ));
// // console.log(people);
// console.log(people.indexOf('Mary'));
// // let last =
// console.log(people.indexOf("foo"));



// //Exercise 3 : Repeat The Question

// // let number = (prompt(" ask user number "))

// //  while (number < 10) {
// // 	number = parseInt(prompt("The number is less than 10 , Enter one bigger"));	
// //   }

// //Exercise 4 : Attendance
//  let guestList = {
// 	randy: "Germany",
// 	karla: "France",
// 	wendy: "Japan",
// 	norman: "England",
// 	sam: "Argentina",
//   };

// let student = prompt("hello, what your name ?.").toLowerCase();

//  if (student in guestList )  {
// 	  console.log("hi i'm ${[key]} && and i'm from ${guesList[key]}");
//  } else{
// 	 console.log("Hi! I'm a guest.");
//  }





//  //Exercise 5 : Family
//  let family = {
// 	 name: "dawit",
// 	 age : "28",
// 	 live : "haifa",
//  };
  
//  for (let key in family) {

//     console.log(`${key}: ${family[key]}`);
// }

// //  for (let i = family; i < family.length; i++) {
	 
// //   console.log(family[i]);
// //  }

// //Exercise 6
// let details = {
// 	my: 'name',
// 	is: 'Rudolf',
// 	the: 'raindeer'
//   }
//   let sentence =""
//   for (let element in details) {
// 	  sentence+=element + " ";
// 	  sentence+=details[element]+ " ";
//   }
//   console.log(sentence);
