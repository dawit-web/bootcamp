let str = prompt("Enter words");
myArr = str.split(",");
console.log(str);

let len = 0;
for (let i = 0; i < str.length; i++) {
    len = myArr.length;
    if (len < myArr[i].length) {
        len = myArr[i].length;
        
    }
  
}
console.log(len);


//  console.log("*".repeat(len + 4));
 
//  for (let i=0; i < str.length;i++) {
//    console.log("*" + str[i] + " ".repeat(len + 1 - str[i].length)+"*"
//  }

// // Prompt the user for several words (separated by commas).
// let str = prompt("Enter words");
// // Put the words into an array.
// let str = words.split(',');
// console.log(wordsArray)


// // Console.log the words one per line, in a rectangular frame as seen below.

// let largest ='';
// let number = 0;

// function longestword(warray){
//     for (let i=0; i<warray.length; i++) {
//         if (warray[i].length>largest.length){
//             largest = warray[i];  
//             number = largest.length 
//         }
//     }return number
// }

// console.log(longestword(wordsArray))


// let space = [];

// function rectangularFrame(wordList){
//     console.log("*".repeat(longestword(wordList)+4))
//     for (let i=0; i<wordList.length; i++){
//         if (wordList[i].length<longestword(wordList)){
//             space[i] = longestword(wordList) - wordList[i].length;
//             console.log('* '+wordList[i]+ " ".repeat(space[i])+' *');

//         }else{
//             console.log('* '+wordList[i]+' *')
//         }
//     }console.log("*".repeat(longestword(wordList)+4))
// }

// rectangularFrame(wordsArray)
