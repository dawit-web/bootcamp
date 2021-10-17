// let divElement =document.body.firstElementChild;
// let divElment = document.body.children[0];

// let ulElment = divElement.nextElementSibling;
// let ulElmentSecond = document.body.children[1];


// // retrieve the li
// let liElement = ulElement.lastElementChild;
// let liElementSecond = ulElement.children[1];
// liElement.textContent += " Smith"

// console.log(divElement,divElementsecond)
// console.log(ulElement, ulElementSecond)
// console.log(liElement,liElementSecond)


// For each of the questions, find 2 WAYS to access :

// 1. The div node

// 2. The ul nodes, and render all of it's children one by one

// 3. The first li of each ul


let divContainer = document.querySelectorAll("#container")
console.log(divContainer)

let ulElment =document.getElementsByTagName('ul');


for (let ul of ulElment) {
    console.log(ul.children[0])
}


 let names = ["John", "Lola", "Tom"];
// 1. Create a function that adds the name of each students to 
// a paragraph
// 2. each paragraph needs to be background yellow, font-size 25px
// 3. Add the 3 paragraph to the div already on the page

function myname (){
for (let index = 0; index < names.length; index++) {
    let newp = document.createElement("p");
    let newText = document.createTextNode("")
    
}
}