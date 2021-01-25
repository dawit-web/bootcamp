 /////////////------>
function insert_Row() {
	// access the table
	let tableHtml = document.getElementById("sampleTable")
	//create a row
	let rowHtml = document.createElement("tr")
	//create 2 cells (or columns)
	for (let i = 0; i<2; i++){
		//create a column
		let columnHtml = document.createElement("td")
		//add text content to the column
		let contentCell = document.createTextNode(`Row New cell${i+1}`)
		//add the text node to the column
		columnHtml.appendChild(contentCell)
		//add the column to the row
		rowHtml.appendChild(columnHtml)
	//add row to the table
	tableHtml.appendChild(rowHtml)

 }


