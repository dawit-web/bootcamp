//Exercise 1 : Move The Box

let button = document.getElementById("btn")
button.addEventListener("click", myMove)

let position;
let timerInterval;

function myMove () {
	position = 0
	// local variable
	// it cannot be accessed or "seen" from the outside of the myMove() function
    timerInterval = setInterval(moveRedBox, 5)
}

function moveRedBox () {
	let animateDiv = document.getElementById("animate")	
	if (position == 350) {
		clearInterval(timerInterval)
	} else {
		position ++
		animateDiv.style.left = position + "px"
        animateDiv.style.top = position + "px";
	}
}



