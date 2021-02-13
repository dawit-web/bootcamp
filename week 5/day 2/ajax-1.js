// First, create XMLHttpRequest:
// let xhr = new XMLHttpRequest();
// // Then, you have to initialize it
// // xhr.open(method, URL, [async, user, password])
// xhr.open('GET', 'https://zivuch.github.io/load', true);

// xhr.send();


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
 

// xhr.onprogress = function(event) {
//    if (event.lengthComputable) {
//      console.log(`Received ${event.loaded} of ${event.total} bytes`);
//    } else {
//      console.log(`Received ${event.loaded} bytes`); // no Content-Length
//    }
//  };
 
//  xhr.onerror = function(){  // only triggers if the request couldn't be made at all
//  console.log("Request failed")
//  };


// let xhr = new XMLHttpRequest()// xhr.open(method,url,[true,user,pass]);
// xhr.open('GET',"https://zivuch.github.io/data.json‏", true);
// xhr.send();
// // 4. This will be called after the response is received
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     // e.g. 404: Not Found
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     // response is the server response
//     console.log(`Done, got ${xhr.response.length} bytes`);
//      console.log(xhr.response);
//   }
// }; 



// exercies xp 
// Create a program to fetch the API URL above.
// Make an AJAX request to the Giphy API and return an Object


let xhr = new XMLHttpRequest()
xhr.open('GET',"https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC" , true );
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
	  if (xhr.status != 200) {
	     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      } else { // show the result
	     console.log(`Done, got ${xhr.response.length} bytes`);
        console.log(xhr.response);
        }
	 }; 	

daliy 	