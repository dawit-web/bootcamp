// Exercise 1: Simple If/Else Statement

let x = 5
let y = 2

if (x>y) {
    console.log("5 is the bigest number")
}

else {
    console.log('no is the small number')   
}

// Exercise 2: Chihuahua

let newDog = "Chihuahua"
console.log(newDog.length)
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
    console.log('I love Chihuahuas, it’s my favorite dog breed')
}
else {
    console.log('I dont care, I prefer cats')
}

// Exercise 3: Even Or Odd

let num = prompt("ask user for number")
console.log(num);
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (num % 2){
    console.log("num is an ood number")
}
else {
    console.log("num is an even number")
}

// Exercise 4: Group Chat

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
console.log (users.length)

 if (users.length == 0){
    console.log("no one is online")
}
 else if (users.length == 1) {
        console.log (`${users[0]} is online`)   
    }  
 else if (users.length == 2) {
        console.log (`${users[0]} and ${users[1]} are online`)
  } else {
      console.log (`${users[0]} and ${users[1]} and ${users.length-2} more are online`)
  }
