// / Instructions
// 1. Change the style of the element when it's dropped in a valid drop zone
// 2. Add another green box on the page and try dragging and dropping it
// 2. Bonus: Change the style of the dropzone on dragenter

let newitem = document.getElementById(item)
newitem.style.



event.dataTransfer.setData()








// Create the dropping function

function dropping(event){
    event.preventDefault();
	// console.log(event.target)
	// 1. retrieve the element that we want to srop
	let elementToDrop = event.dataTransfer.getData("text/plain")
	// 2. append the element on the drop zone
	let elemNode = document.getElementById(elementToDrop)
	event.target.appendChild(elemNode)
}

