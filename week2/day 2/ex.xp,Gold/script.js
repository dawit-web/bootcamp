//Exercise 1 : The World Translator

 let language = prompt('which language you speak ?.')

if (language.toLowerCase() === 'french'){
    console.log('Bonjour');
}
else if (language.toLowerCase() ==='english') {
    console.log("Hello")
} 
else if (language.toLowerCase === 'hebrew'){
    console.log("Shalom")
}
 else {
     console.log("01110011 01101111")
 }
 //2 op
// switch(language.toLowerCase()) {
//   case "english":
//     console.log("Hello")
//     break;
//   case 'hebrew':
//     console.log("Shalom")
//     break;
//   case 'french':
//     console.log('Bonjour');
//     break;
//   default:
//     console.log("01110011 01101111")
// }

//Exercise 2 : The Grade Assigner
let grade = prompt('Ask the user for their grade?.')
 if(grade > 90){
     console.log("A")
 } 
   else if((grade >= 80) && (grade <= 90)){
       console.log("B")
 }
 else if((grade >= 70) && (grade <= 80)){
     console.log("C")
 }
 else if(grade > 70){
     console.log("D")
 }

