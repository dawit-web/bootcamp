// Exercise 2: Display Student Info
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:

function displayStudentInfo({first,last}){
 console.log(first , last);
}
displayStudentInfo({first: 'Elie', last:'Schoppik'})

// Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }
let newuser = Object.entries(users);
// console.log(Object.entries(users));
//1. Using methods taught in class, turn the users object into an array:
// Excepted output: 
// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
//2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
newuser.forEach(element  => {
    element[1] = element[1] * 2;
    
});
console.log(newuser);

// Exercise 4 : Person Class
// 1.Analyze the code below. What will be the output?

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);// object

//   Exercise 6 : Challenges
// 1. Evaluate these (ie True or False)

// [2] === [2] // false
// {} === {}/// false

// 2.What is the value of property “number” for each object.
const object1 = { number: 5 };//4 
const object2 = object1; //4
const object3 = object2; ///4
const object4 = { number: 5};//5
object1.number = 4;//5
// console.log(object1, object2, object3, object4);

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    };
};


class Mamal extends Animal {
    constructor(name, type, color, noise) {
        super(name, type, color);
        this.noise = noise;
    };
    sound() {
        console.log(`This is the ${this.name} of ${this.type} type, it is ${this.color} and sounds "${this.noise}"`);
    };
};


let horse = new Mamal ("horse", "mamal", "brown", "hihih");
horse.sound();

//Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
let cow = new Mamal ("cow", "mamal", "black", "mooo");
cow.sound();
