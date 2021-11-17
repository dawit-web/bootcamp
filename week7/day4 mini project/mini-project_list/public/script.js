function sendData() {
  
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;
    let productlist = {
      product,
      quantity
    }

    fetch('http://localhost:3000/find',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(productlist)
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
      showProduct(data);
    })
  }
  

  function showProduct(alldata) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    alldata.forEach(product =>{
      let p = document.createElement('p');
      p.innerText= product.name;
      root.appendChild(p)
    })
  }
  


  // function findData() {
  //   let product = document.getElementById('product').value;
  //   let quantity = document.getElementById('quantity').value;
  //   let userdata = {
  //     product,
  //     quantity
  //   }
  //   fetch('http://localhost:3000/find',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(productdata)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     document.getElementById('root').innerHTML = `${data.message}`
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  



// const Addproduct = () =>{
//   return db('products')
//   .insert({ name: product , quantity: quantity });
//   .returnnig ('*')
// })