
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
  




