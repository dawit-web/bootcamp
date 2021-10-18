let article = document.body.getElementsByTagName ("article")[0];
article.removeChild(article.lastElementChild);

let newh2 = document.getElementsByTagName("h2")[0];
  newh2.addEventListener("click",changeColor);

  function changeColor(){
	newh2.style.backgroundColor = "red";
  }

let newh1 = document.getElementsByTagName("h1")[0];
newsize = Math.floor(Math.random()*101)
newh1.style.fontSize = (newsize+ "px" );

let newh3 = document.getElementsByTagName("h3")[0];
    newh3.addEventListener("click", display);

function display(){
        newh3.style.display = "none";
    }


let allP = document.getElementsByTagName("p");
function someFunction() {
    for (let i = 0; i < allP.length; i++){
    allP[i].style.fontWeight = "bold";
    }
}
