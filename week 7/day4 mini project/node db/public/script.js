function sendData() {
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;
    let productdata = {
      product,
      quantity
    }

    fetch('http://localhost:3000/find',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(productdata)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  function getData() {
    fetch('http://localhost:3000/show')
    .then(res => res.json())
    .then(data => {
      showProducts(data);
    })
  }
  
  function showProducts(data) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    data.forEach(item =>{
      let div = document.createElement('div');
      div.innerText= product.name;
      root.appendChild(div)
    })
  }
  
  function findData() {
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;
    let userdata = {
      product,
      quantity
    }
    fetch('http://localhost:3000/find',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(productdata)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
  }
  