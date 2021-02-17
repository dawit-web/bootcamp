const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
})
 let list = []
function addItem(event){

    console.log('bb')

   
    let item = form.elements.name.value;
    let cost = form.elements.price.value;
     let itemlist = {
         item:item, cost:cost
     }
     list.push(itemlist)
     console.log (list)
}

function removeItem(){
   
}



// const form = document.querySelector('form')‏
// form.addEventListener('submit', function(e){
// 	// will prevent the form from the default submit action,
// 	// which we don't want, since we're not sending any data to a server.
//    e.preventDefault();
// // });












// localStorage.setItem('myshoping', 'Tom');

// let cat = localStorage.getItem('myCat')||"Not Found";
// console.log('myCat=>',cat);

// localStorage.removeItem('myCat');

// cat = localStorage.getItem('myCat')||"Removed";
// console.log('myCat=>',cat);‏
// localStorage.clear();

// let obj = {
//   name:'Someone',
//   date:'15-02-2021'
// }
// localStorage.setItem('myObj', JSON.stringify(obj));
// let myObj = localStorage.getItem('myObj')||"Not Found";
// console.log('myObj=>',JSON.parse(myObj));
// ‏

