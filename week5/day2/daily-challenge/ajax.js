let xhr = new XMLHttpRequest();
function fetchGif (){
	let search = document.getElementById("search").value;
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g=${search.value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
xhr.responseType = 'json'; 
xhr.send();
console.log(xhr)
xhr.onload = function() {
	createImages(xhr.response.data);
}
xhr.onerror = function(){
	alert("wait sconds");
 };
}

function createImages (arr){
	let item = document.getElementById("item");
	item.innerHTML = "";
	arr.forEach((val, i) => {
		let img = document.createElement("img");
		img.setAttribute("src",val.images.downsized.url)
		item.appendChild(img)
	});

console.log(arr);
console.log(item);
}

function deleteAll(){
	let item = document.getElementById("item")
	item.innerHTML = "";
}

fetchGif();



// xhr.onload = function() {
//    if (xhr.status != 200) {
//      // analyze HTTP status of the response
//      // e.g. 404: Not Found
//      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//    } else { // show the result
//      // response is the server response
//      console.log(`Done, got ${xhr.response.length} bytes`);
//      // console.log(xhr.response);
//    }
//  };
 




// let APIKEY = "PnVDuxPm2wjNiTL8ZLiLYiwyX8E7HloI";
// // you will need to get your own API KEY
// // https://developers.giphy.com/dashboard/
// document.addEventListener("DOMContentLoaded", init);
// function init() {
//   document.getElementById("btnSearch").addEventListener("click", ev => {
// 	ev.preventDefault(); //to stop the page reload
// 	let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
// 	let str = document.getElementById("search").value.trim();
// 	url = url.concat(str);
// 	console.log(url);
// 	fetch(url)
// 	  .then(response => response.json())
// 	  .then(content => {
// 		//  data, pagination, meta
// 		console.log(content.data);
// 		console.log("META", content.meta);
// 		let fig = document.createElement("figure");
// 		let img = document.createElement("img");
// 		let fc = document.createElement("figcaption");
// 		img.src = content.data[0].images.downsized.url;
// 		img.alt = content.data[0].title;
// 		fc.textContent = content.data[0].title;
// 		fig.appendChild(img);
// 		fig.appendChild(fc);
// 		let out = document.querySelector(".out");
// 		out.insertAdjacentElement("afterbegin", fig);
// 		document.querySelector("#search").value = "";
// 	  })
// 	  .catch(err => {
// 		console.error(err);
// 	  });
//   });
// }

