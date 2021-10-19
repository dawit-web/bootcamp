let inputs = document.getElementsByTagName('input');

let button = document.getElementById("lib-button");
    button.addEventListener("click", addInputs);


function addInputs(event){
    event.preventDefault();
    let noun = document.getElementById("noun").value;
   
    let adjective = document.getElementById("adjective").value;
    
    let person = document.getElementById("person").value;
    
    let verb = document.getElementById("verb").value;
    
    let place = document.getElementById("place").value;
   
    if(noun === "" || adjective === "" || person === "" || verb === "" || place === "" )
    alert("bad");
   
    let storyParagraph = document.createElement("p");
    let spanElement = document.querySelector ("#story")
        storyParagraph.innerHTML =
        "The" + " " + adjective + " " + noun + " told " + person + " to " + verb + " in " + place ;
       spanElement.appendChild(storyParagraph);

}
