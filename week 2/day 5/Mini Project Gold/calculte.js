function number(val) {
  document.getElementById("result").value += val;

}  



function operator(operator){

} 


function equal(){ 
  let input = document.getElementById("result").value;
  let Output = eval(input); 
  document.getElementById("result").value =Output;

}


function clr(){
  document.getElementById("result").value = '';
}