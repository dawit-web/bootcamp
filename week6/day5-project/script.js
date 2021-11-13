let form = document.getElementById("form")
form.addEventListener('Submit',function(e){
    e.preventDefault();
})

let todolist = []
function addItem(){

    console.log(form)
     
    let item = document.getElementById("name")
    console.log (item.value)
    item.addEventListener('input' , (e) => { todolist = e.target.value})

    // let Description = form.elements.Description.value;
    // let Startdate = form.elements.datetime.value;
    // let Enddate = form.elements.datetime.value;
    // let status = form.elements.status.value;
    let itemlist = {
         item:item, 
        
       
     }
    let val = val.push(todolist)
     console.log (val)

    let button = document.getElementById("additem") 
    button.addEventListener("onClick", addItem)
    

    window.localStorage.setItem(itemlist,JSON.stringify(todolist));  
    //     //converting object to string
    
    
 }

addItem(todolist);

// // function addItem(){
// //  let button = document.getElementById("additem") 
// //     button.addEventListener("onClick", addItem)
// //     addItem= todolist;
// // }

// // function removeItem(){
// //     let button = document.getElementById("removeitem")
// //     button.addEventListener("click", removeItem)
// // }







// function store(){ //stores items in the localStorage
//     let newname = document.getElementById('name').value;
//     let nDescription = document.getElementById('Description').value;
    

//     let itemlist = {
//        name: name,
//        Description: Description,
//     }

//     window.localStorage.setItem(key,JSON.stringify(itemlist));  
//     //converting object to string

// }

// function removeItem(){ //deletes item from localStorage
//     var key = document.getElementById('removeKey').value; //gets key from user
//     localStorage.removeItem(key) //passes key to the removeItem method
//     console.log("remove items");
// }

// function addStorage(){ 
//     localStorage.additem()
//     console.log("add");
// }

// window.onload =function(){ //ensures the page is loaded before functions are executed.
//     document.getElementById("form").onsubmit = store
//     document.getElementById("additem").onclick = addStorage
//     document.getElementById("removeButton") = removeitem
//     // document.getElementById("retrieveButton").onclick = retrieveRecords
// }





