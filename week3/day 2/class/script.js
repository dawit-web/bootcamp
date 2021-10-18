// // Exercise 1

// // 1. Create two buttons - id of "red", id of "blue"
// // 2. When we click on the red button -> Change the backgroundcolor of the page to red
// // 3. the same for blue


// let click = document.getElementById("red")
// let clikher  = document.getElementById("blue")
// document.body.style.background

// x.addEventListener("click"); 
// y.addEventListener("click"); 


// let colors = ["red", "blue"];

//button.addEventListener('click', function(){

//     document.body.style.background = "red"; 
//     document.body.style.background = "blue"; 

// }
// //get button
// let button = document.getElementById('button');
// //add event

//    //randomizer
//    let randomcolor = colors[Math.floor(Math.random() * colors.length)]
//   //get container
//   let container = document.getElementById('container');
   
//   container.style.background=randomcolor;

// })

//Exercise 2
// 1. Add inside the HTMl file a div of id container (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that 
// changes the background color of the document,  to the color of the button (do it directly in the JS)

// Example:
// when you click on the YELLOW button, it should change the document 
// background color to yellow

let colors = ["blue", "yellow", "green", "pink"];

let div = document.getElementById("container")
let bodyElement = document.body

function creatBtn (){
    for(let color of colors ){
    let btn = document.createElement("butoon");
    let text = document.createTextNode("color");
    btn.appendChild(div)
    div.appendChild(btn)

    }
}

creatBtn();