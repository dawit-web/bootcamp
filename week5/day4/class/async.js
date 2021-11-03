// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"


// let famousname =  prompt("receives 2 famous persons name");

// let check = (famousname) => {
//   return new promis ((resolve, reject ) =>{
//     if(typeof famousname === 'string' ){
//       resolve ("yess is string ");
//     } else {
//       reject (Error , "not string")
//     }

//   });

// }


// let noun = prompt ("receives a noun name");

// let check = (noun) => {
//   return new promis ((resolve, reject ) =>{
//     if(noun.match(/,/g) || [].length){
//       resolve ("yess is string ");
//     } else {
//       reject (Error , "not string")
//     }

//   });

// }
// let city 




const fetchSunRise = async (endpoint) => {
    const response = await fetch(endpoint);
    console.log("response", response)
    let data = await response.json();
    console.log("data", data)
    let sunrise = data.results.sunrise
    console.log(`The hour of the sunrise in Tel Aviv is: ${sunrise}`)
}

fetchSunRise("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");