// // Exercise 1 : Change The Navbar

// let div = document.getElementById("navBar");
// div.setAttribute("id", "socialNetworkNavigation");
// console.log(div);
// //2
let newul = document.getElementsByTagName("ul")[0];
let newli = document.createElement("li")
let newhref = document.createElement("a");
let text = document.createTextNode("logout")
newli.appendChild(text);
// newLiElement.appendChild(newLiHref);
newul.appendChild(newli);
console.log(newli);


 
//Exercise 2 : Users

// let litow = document.getElementsByTagName('ul').innerHTML=('Richard');  
//     litow.appendChild('ul');
   
//    for (let i = 0; i <collection; i++) {
//        let lito = document.getElementsByTagName('li')[i].innerHTML='david';
//    } console.log(litow);

//    let parentElem = document.getElementById("sahra");
//     parentElem.removeChild(childElem);
   
   
//    document.getElementsByTagName('ul');
   
//    for (let selectedUl of ulTwo) {
   
//        selectedUl.firstElementChild.innerHTML = 'david'
//        console.log(selectedUl.firstElementChild.innerHTML);
//    }

//Exercise 3 : Users And Style
 let newUser = document.querySelector("div");
 newUser.setAttribute("id", "title");
 newUser.style.backgroundColor = "lightblue";
 let newPete = document.getElementsByTagName("li")[1];
 newPete.style.border = "1px solid black";
 document.body.style.fontSize = "50px"