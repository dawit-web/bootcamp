
//exercies xp 1      ​
    async function fetchStarship() {
      try {
       let response = await fetch('https://swapi.dev/api/starships/9/')
        let data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStarship()

    // Exercise 2: Analyze

    function resolveAfter2Seconds() {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve('resolved');
          }, 2000);
      });
  }

  async function asyncCall() {
      console.log('calling');
      // going to run first and complte after 2 scond 
      let result = await resolveAfter2Seconds();
      console.log(result);
  }
  
  asyncCall(); 






  
//xp gold




// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
//   ];
//   ​
//   const getData = async function() {
//    const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) { 
  
//       try {
//           const response = await fetch(url);
//           const data = await response.json();
//           return data;
//       } catch (err) {
//           console.log('Request Failed', err)
      
//     }}));
//     console.log('users', users);
//     console.log('posta', posts);
//     console.log('albums', albums);
// }
//   ​
//   getData();

