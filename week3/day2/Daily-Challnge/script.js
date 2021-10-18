let inputs = document.getElementsByTagName('input');

let button = document.getElementById("lib-button");
    button.addEventListener("click", addInputs);


let Words = [];

function addInputs(event){
    event.preventDefault();
    let noun = document.getElementById("noun").value;
    Words.push(noun);
    let adjective = document.getElementById("adjective").value;
    Words.push(adjective);
    let person = document.getElementById("person").value;
    Words.push(person);
    let verb = document.getElementById("verb").value;
    Words.push(verb);
    let place = document.getElementById("place").value;
    Words.push(place);

    console.log(Words);


    let storyParagraph = document.createElement("p");

    for (let i = 0; i < Words.length; i++){
        // let text = document.createTextNode(arrWords[i]);
        let spanElement = document.getElementById("story");

        storyParagraph.innerHTML =
        "The" + " " + adjective + " " + noun + " told " + person + " to " + verb + " in " + place ;
       spanElement.appendChild(storyParagraph);
    }

}
