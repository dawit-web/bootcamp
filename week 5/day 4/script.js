
//exercies xp 1      ​
    async function fetchStarship() {
      try {
       const response = await fetch('https://swapi.dev/api/starships/9/')
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchStarship()



//xp gold


// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
//   ]
//   ​
//   const getData = async function() {
//     const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) { 
//       try {
//           let response = await fetch(url);
//           let data = await response.json();
//           return data;
//       } catch (err) {
//           console.log('Request Failed', err)
      
//     }));
//     console.log('users', users);
//     console.log('posta', posts);
//     console.log('albums', albums);
// }
//   ​
//   getData();