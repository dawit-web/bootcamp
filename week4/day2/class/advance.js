   
//     }
// var a = 10;
// var b = 20;
// // a comparison - we will study this in detail in upcoming lesson
// if (a>b) {  // The outcome of a>b will be a boolean
//     console.log("Variable `a` has higher value"); // if a>b is true
// }
//     else{ 

//     console.log("Variable `b` has higher value"); // if a>b is false
//     }
// /// class

// (function () {
//     console.log("in the self invoking func")
//     let btnFirst = document.getElementById("first");
//     let btnSecond = document.getElementById("second");
  
//     btnFirst.addEventListener("click", () => alert("you clicked the btn"))
//     btnSecond.addEventListener("mouseover", () => alert("you hovered over the btn"))
//   })();


//  Exercise
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter
// the name of the user
// 3. When invoked, the function add the name of the user in a sentence in the div


// (function(nameuser){
//     let div = getElementById("container");
//     let p = document.createElement("p")
//     p.textContent =`heloo ${nameuser}`
    
// })();

//-----------------------------
// NESTED FUNCTION
// ----------------------------

// let name = "John";
// // the outer func : checkName() is going to be ran once
// //the inner func, addExclamation() is going to run 3 times
// function checkName() {
//     let nameUppercase = name.toUpperCase();

//     function addExclamation() {
//         nameUppercase += "!";
//         console.log("in the addExclamation func NAME_TO_UPPERCASE: ", 
//         	nameUppercase);
//     };

//     addExclamation(); //JOHN!
//     addExclamation(); //JOHN!!
//     addExclamation(); //JOHN!!!
// }

// checkName(); 


// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variables `characters` equal to an empty array
// 3. In the startWars function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"

// 4. The createCharacter function should console.log the fullname of the character,
// and push it to the `characters` array.
// 5. Call the `createCharacter` function a few times inside the starWars function
// and console.log the `characters` array
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `createCharacter` function should now console.log the fullname and 
// of the character
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

// function starWars () {
//     let characters = [];
//     function createCharacter(Firstname , Lastname = "Smith" ){
//         console.log(`full name is : ${Firstname} ${Lastname} ${spaceship}`)
//         characters.push(`${Firstname} ${Lastname}');

//     }
//     createCharacter ("moshe");
//     console.log("characters")
//     createCharacter ("avi");

//     createCharacter ("dodo");
// }

// starWars("The Devastator");
// starWars(Republic Attack Cruiser");