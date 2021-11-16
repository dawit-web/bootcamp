function getlist(){
    fetch('http://localhost:3000/items')
    .then(res => res.json());
}