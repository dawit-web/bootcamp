// const getData = () => {
//     fetch('http://localhost:3000/')
//     .then(res => res.json())
//     .then(Allcountry => {
//         console.log(Allcountry)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }


function Login() {
    
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let Email = document.getElementById('Email').value;
    let phone = document.getElementById('phone').value;
    let users = {
        firstName,
        lastName,
        Email,
        phone
    }

    fetch('http://localhost:3000/Login',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(users)
    })
  
    .then(res => res.json())
    .then(users => {
      console.log(users);
      // document.getElementById('root').innerHTML = JSON.stringify(users)
      
   
    })

    .catch(err => {
       console.log(err);
    })
  }
  




// const getData = () => {
//     // const btn = document.getElementById('button').value;
//     fetch('http://localhost:3000/api/countries')
//     .then(res => res.json())
//     .then(Allcountry => {
//         console.log(Allcountry)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }


// function addCountry (){
//     const country = document.getElementById('insert_country_name').value;
//     fetch(`http://localhost:3000/api/countries${country}`),{
//         method:'PUT'
//     }
//     .then(res => res.json())
//     .then(insertCountry => {
//         console.log(insertCountry)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }