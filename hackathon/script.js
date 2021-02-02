//color array
let colors = ['#2BD1EE', '#F04F35', '#2ECC71', '#F3E90E', '#8a2be2','#E705FD'];
//get button
let button = document.getElementById('button');
//add event
button.addEventListener('click', function(){
   //randomizer
   let randomcolor = colors[Math.floor(Math.random() * colors.length)]
  //get container
  let container = document.getElementById('container');
   
  container.style.background=randomcolor;

})

