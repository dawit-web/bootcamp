async function fetchStar() {
try {

  let rand = Math.round(Math.random() * 82);
  const response = await fetch(`https://swapi.dev/api/people/${rand}/`)
  const data = await response.json();
     console.log(data);
     document.getElementById("name").innerHTML = data.name;
     document.getElementById("height").innerHTML = data.height;
     document.getElementById("gender").innerHTML = data.gender;
     document.getElementById("byear").innerHTML = data.birth_year;
   } catch (error) {
       console.log(error)
   }
  }
  

fetchStar()

function Star(){
  let button = document.getElementById("btnsearch");
  button.addEventListener("click", fetchStar)

  }

Star();


