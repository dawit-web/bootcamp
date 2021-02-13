

// https://jsonplaceholder.typicode.com/users‏
// xhr.open('GET', 'https://zivuch.github.io/data.json');‏
// xhr.responseType = 'json';‏
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     console.log(xhr.response);
//   }
// };‏


 // let xhr = new XMLHttpRequest()
 // xhr.open('get','https://jsonplaceholder.typicode.com/users')
 // xhr.responseType = 'json' ;
 // xhr.send ()
 // xhr.onload = function (){
 // Details(xhr.response);
 // }
//
// let xhr = new XMLHttpRequest()
// xhr.open('post', 'https://jsonplaceholder.typicode.com/posts‏')
// xhr.responseType = 'json' ;
// xhr.send ()
// xhr.onload= function(id) {
//   let btnid = document.getElementById('users')
//
//
// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.send();
//
// xhr.onload = function() {
//   createCards(xhr.response);
// };‏
// const createCards = (arr) => {
//   let div = document.getElementById('root')
//   arr.forEach(item => {
//     const {id,name} = item;
//     let btn = document.createElement('button');
//     btn.innerText = name;‏
// div.appendChild(btn);
//     btn.addEventListener('click',function(){
//       xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//       xhr.responseType = 'json';
//       xhr.send();‏
// xhr.onload = function() {
//           console.log(xhr.response);
//       }
//     });
//     div.appendChild(btn)
//   })
// };
// ‏

//GET Request.
//  fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//    return response.json()
//  })  // convert to json
// .then(data => {
//     console.log(data)
//   })    // print data to console
//    .catch(err => {
//     console.log('Request Failed', err)
//    }); // Catch errors
  //
  // function testNum (){
  //  let big10 = new Promise


       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(console.log)

  //      async function fetchStarship() {
  //      try {
  //      const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //      const data = await response.json();
  //      console.log(data);
  //      } catch (e) {
  //      console.log(e);
  //    }
  //  }
  //   fetchStarship()



   function Details (id) {
    let div = document.getElementById("root");
     div.innerHTML= ""
    id.forEach(i => {
        let { id , name ,username ,email ,image } = i
        console.log (id,username,name,image,email);

        let card = document.createElement ("div");
        let img = document.createElement("img");
        img.src = image;
        card.appendChild(img)

        let name1 = document.createElement("h2");
        name1.innerText=name
        card.appendChild(name1)

        let username1 = document.createElement("h4");
        username1.innerText=username
        card.appendChild(username1)

        let email1 = document.createElement("h4");
        email1.innerText=email
        card.appendChild(email1)


        div.appendChild(card)


    });

   }
      //  Details (robots)

       function filterSearch(){
        let input = document.getElementById('myinput').value;
        const filter = robots.filter(item=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
      });
      Details(filter)
    }
