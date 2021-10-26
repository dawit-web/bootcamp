// // Exercise 2 : Employees
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let hellouser = users.map(( Element , index) => "Hello" + users[index].firstName );
// console.log(hellouser);

// let fullstack = users.filter(users => users["role"].includes("Full Stack Resident"));
// console.log(fullstack);


// let gooduser = fullstack.map((Element , index) => "Good job" + users[index].role);
// console.log(gooduser)

// -//-----1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // bread, carrot, potato, chicken, apple, orange

//------2------
const country = "USA";
console.log([...country]); // 'U', 'S', 'A'

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);// undefined, undefined

// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let newepic = epic.reduce(function (accumulator, current) {
    return `${accumulator}  ${current}`;
});
console.log(newepic); 

// Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let studentpassed = student.filter(student => student["isPassed"] === true);
console.log(studentpassed);

let goodstudent = studentpassed.map((Element , index) => `Good Job ${studentpassed[index].name} you passed the course in Robotics`)
// +  studentpassed[index].name);
console.log(goodstudent);
