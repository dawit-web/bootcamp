// let article = document.body.getElementsByTagName ("article")[0];
// article.removeChild(article.lastElementChild);

// let newh2 = document.getElementsByTagName("h2")[0];
//   newh2.addEventListener("click",changeColor);

//   function changeColor(){
// 	newh2.style.backgroundColor = "red";
//   }

// let newh1 = document.getElementsByTagName("h1")[0];
// newsize = Math.floor(Math.random()*101)
// newh1.style.fontSize = (newsize+ "px" );

// let newh3 = document.getElementsByTagName("h3")[0];
//     newh3.addEventListener("click", display);

// function display(){
//         newh3.style.display = "none";
//     }

// let allP = document.getElementsByTagName("p");
// function someFunction() {
//     for (let i = 0; i < allP.length; i++){
//     allP[i].style.fontWeight = "bold";
//     }
// }


// let newtable = createTable(["First Name", "Last Name"])
// let formval = document.querySelectorAll("form")
// formval.addEventListener("submit", item);

// function item (event){
//   event.preventDefault()
//   let firstn =  event.target.elemnts.firstn.value;
//   let lastn =  event.target.elemnts.lastn.value;
//   if (firstn === "" || lastn === "") {
//     alert ("bad")
//    return
// } else {addRow([firstn,lastn],tableEle)}
// }

//Exercise 2 : Transform The Sentence

// let WORD = document.querySelector("p");
// function getBold_items()  {
// WORD[i].style.fontWeight = "bold";


// const paragraph = document.querySelector("p").style = "bold";

function getBoldItems() {
	let boldItems = document.querySelectorAll("p > strong");
	// return boldItems;
}

// function highlight() {
// 	boldItems = getBoldItems();
// 	setColor(boldItems, "blue");

