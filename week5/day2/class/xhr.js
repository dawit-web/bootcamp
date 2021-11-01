
// Exercise 1
// Write a function called divide that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// function divide (numerator, denominator) {
//   try{
//     if(numerator !== o){
//     let a = numerator/denominator ;
//     console.log("a is :" , total)
//   } else {
    
//   }
// }


// let xhr = new XMLHttpRequest();
// //2. Set the request
// xhr.open('GET', 'https://lisenakache.github.io/HttpRequestGithub/test.json');

// //4. Send the request
// xhr.send();

// xhr.addEventListener("load")
// //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		console.log("the respon is :" ,typeof( xhr.response))
// 		let response = JSON.parse(xhr.response)
//     displayUser(xhr.response) 
// 	}
// };

// const displayUser = (animals) => {
// 	let results = document.getElementById("results")
// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.species}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }


let xhr = new XMLHttpRequest()// xhr.open(method,url,[true,user,pass]);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.onload = function() {
	if (xhr.status != 200) {
	 	console.log("error status")
		displayError(xhr)
	} else {
		console.log("Finished Loading")
		console.log("the respon is :" ,typeof( xhr.response))
		let response = JSON.parse(xhr.response)
    displayUser(response) 
	}
};

const displayUser = (response) => {
	let users = document.getElementById("users")
	response.forEach(info => {

	 let li = document.createElement("li");
		li.textContent = `${info.id} - ${info.name} ${info.username} ${info.email} ${info.address}[value]`
		users.appendChild(li)
	});
 
 }
