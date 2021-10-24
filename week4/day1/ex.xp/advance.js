// Exercise 1 : Scope


// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);/// 3
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5; 
// }

// function q22() {
//     alert(a);//5
// }


// //#3
// function q3() {
//     window.a = "hello"; 
// }

// function q32() {
//     alert(a);//hello
// }

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); //test
// } 

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);//5

// Exercise 2 : Ternary Operator


// function winBattle(){
//     return true;
// }

// function winBattle() {
//     return true;
// }


// let experiencePoints = winBattle() == true ? 10 : 1;
// console.log(experiencePoints);

// Exercise 3 : Colors

let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

colors.forEach (item =>  { 
    console.log(colors.includes("Violet"));
})

colors.forEach(function(item, i ) { 
console.log(`${i+1}# choise is ${item}`)

}); 


// Exercise 4 : Colors #2


let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
let ordinal = ["th","st","nd","rd"]


 color.forEach(function(color, i ) {
     console.log (`${i+1} ${i < 3 ? ordinal[i] : ordinal[0]} choise is ${color}`)           
});

//Exercise 5 : Is It A String ?

 function is_string(params) {
     return (typeof params === 'string') ? true : false;
 }
    console.log(is_string('hello'));
    console.log(is_string([1, 2, 4, 0]));




  let bankAmount = 0
  let vat = 0.17
  let details = ["+200", "-100", "+146", "+167", "-2900"]
  details.forEach(element => {
   bankAmount+=parseInt(element)*(vat+1) 
  });
    console.log(bankAmount)
 


// // let names = ['david', 'moshe' ,'bobi']
// // { 
// //  map(id => i < users);
// //  console.log(names)‏
// // }

