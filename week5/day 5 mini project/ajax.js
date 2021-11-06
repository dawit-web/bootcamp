async function fetchStar() {
try {
  let rand = Math.round(Math.random() * 82);
  let response = await fetch(`https://swapi.dev/api/people/${rand}/`)
  let data = await response.json();
     console.log(data);
     document.getElementById("name").innerHTML = data.name;
     document.getElementById("height").innerHTML = data.height;
     document.getElementById("gender").innerHTML = data.gender;
     document.getElementById("birth_year").innerHTML = data.birth_year;
     document.getElementById("homeworld").innerHTML = data.homeworld;
   } catch (error) {
       console.log(error, "Oh No! That person isnt available");
   }
  }
 
  
  
fetchStar()
document.getElementsByClassName("i").innerHTML;

function Star(){
  let button = document.getElementById("btnsearch");
  button.addEventListener("click", fetchStar)

  }

Star();


