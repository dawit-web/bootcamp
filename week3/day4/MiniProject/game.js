
let colorArr = ['green', 'blue', 'black', 'pink','brown', '#4DAF4C','#52AF60','#5499C7','#87668A', '#FBEA19', 'indigo', 'darkmagenta', 'violet','lightpink','lightgray', 'gray' ];
let sidebar = document.getElementById("sidebar");
let container = document.createElement("container");
let color ;
let isMouseDown;
let btn = document.getElementById('Claer');


for (let i = 0; i < colorArr.length; i++) {
    let newdiv = document.createElement("div");
    newdiv.style.backgroundColor = colorArr[i];
    // newdiv.classList.add("colorSqaure")
    // btn.addEventListener("click", function() )

    sidebar.appendChild(newdiv)
    
}

let pain;
let painting = document.getElementById("painting");
for (let i = 0; i < 60*24 ; i++) {
    let canvas = document.createElement("div");
    canvas.style.border = " 0.5px solid gray";
    painting.appendChild(canvas);
       
}


