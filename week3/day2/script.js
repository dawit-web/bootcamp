
let newParagraph = document.getElementsByTagName('p');
     console.log (newParagraph)
	for (let index = 0; index < newParagraph.length; index++); {
		 newParagraph[index].className = "paraarticle"
	}
		  let list = document.getElementById("paraarticle"; { 
		 
		  let list = document.getElementById("myList");{ 
		   list.removeChild(list.lasttChild);
		    }

		  // As long as <ul> has a child node, remove it
		 
		 /// let paragraph = document.getElementById("p")
		  ///paragraph.addEve

////1.Give to all paragraphs inside the <article> tag the class of para_article.
//Remove the last paragraph in the article.
//Add an event listener so that when you click on the h2, it is removed from the DOM.
//Set the font size of the h1 to be a random pixel size from 0 to 100.
//Hide the 1st paragraph, when it’s clicked. (use the display property )
//Get the values from the inputs and append them to the end of the html, inside a table.
///Bonus: Fade out the 2nd paragraph over 2000 milliseconds, when it’s clicked.











////JS BASIC
/* function that access the value of volume and the value of radius
/* 2 variables, and the value of the variables will be volume & radius
/* access the value of volume & radius: we need to access the elements by id
/that are in the HTML file 
* then get the value of the inputs (x.value) : twice (volume & radius)
* calculate the volume with a formula depending on the values we retrieved
* make a variable for the formula
* find the formula on the internet (radius : 10, volume: 2 -> radius*volume -> 20)
* look at js MATH
* use the values above inside the formula

//------------B. STEPS-----------------

// 1. When/where do we call the function
// * use event listeners
// 	* retrieve the button:getElementById
// 	* add eventlistener to the button
// 	* click event
// 	* volumeSphere
// 2. How/where do we display the formula result

//------------C. STEPS-----------------
// * if the value of the input is a number : OK
// * if the value of the inpout is a string : 
// 	delete whatever is in the input
// 	add red borders to the input
// 	with a msg : only numbers are accepted

// * conditional : if/else
// * if : the value is a number -- NaN -- typeof
// * else
// * input.value = ""
// * style.border = "red"
// * alert-


let buttonForm = document.getElementById("submit")
buttonForm.addEventListener("click", volumeSphere)

function volumeSphere(event){
event.preventDefault()
let radiusValue = document.getElementById("radius").value;
if (isNaN(radiusValue)){
	document.getElementById("radius").value = "";
	document.getElementById("radius").style.border = "2px solid red";
	alert("you should enter only numbers")
} else{
	let formula = (4/3) * Math.PI * Math.pow(radiusValue, 3);
	let volumeResult = document.getElementById("volume")
	volumeResult.value = formula
}
}///
