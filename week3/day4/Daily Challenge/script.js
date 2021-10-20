
let planets =['Earth', 'Jupiter', 'Mercury', 'Venus', 'Mars','Saturn' , 'Uranus', 'Neptune', 'Pluto'];

let colors =['red','blue','green','yellow','purple','white','brown','orange','pink'];
let planet = document.getElementById("planets");
console.log(planet);
  for (let i = 0; i < planets.length; i++) {
  	let newDiv = document.createElement("div");
  	let newContent = document.createTextNode (planets[i]);
     newDiv.appendChild(newContent);
     newDiv.classList.add('planet', `${planets[i]}.`);
     newDiv.style.background = colors[i];
     planet.appendChild(newDiv);

   }

// dcvg
nmnmnm