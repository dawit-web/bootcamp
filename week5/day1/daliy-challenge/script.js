let form = document.getElementById("form");
let name = document.querySelector("name");
let lastname = document.querySelector("lastname");


form.addEventListener("submit" , event => {
  event.preventDefault();
  let fullname = { 
          name: name.value,
          lastname: lastname.value
  };
  
    let fullnameJson = JSON.stringify(fullname);
    console.log(fullnameJson);
});
