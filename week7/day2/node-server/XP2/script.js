function getUser(){
    fetch('http://localhost:3000/')
    // .then(res => res.json());
    .then(data => {
        console.log('data');
    })
    .catch(e =>{
        console.log('no no..')
    })
}