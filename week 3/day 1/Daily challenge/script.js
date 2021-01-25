
let planets =['Earth', 'Jupiter', 'Mercury', 'Venus', 'Mars', 'noga', 'Uranus', 'Neptune'];
  console.log(planets); 

let colors =['red','blue','green','yellow','purple','white','brown','orange','pink'];

  for (i=0; i< planets.length; i++) {

  	let newDiv = document.createElement('div');
  	let newContent=document.createTextNode(planets[i]);
     newDiv.appendChild(newContent)
     newDiv.classList.add('planet', `${planets[i].toLocaleLowerCase()}`);
     newDiv.style.backgroundColor = colorList[i];
     document.body.appendChild(newDiv);

   }