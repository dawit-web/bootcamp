// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
//   }

// ex1
// for ( let i = 0; i <= 15; i++) {
//     if (i%2 === 0){ 
//     console.log(`${i} + "is even`);
//  } else{
//     console.log(`${i}+ "is odd`);
//  } 
// }

// let shoping = [
//     {
//         apple:3,
//         bannan:3,
//         melon:3,
//     },


let shopping = ["apple", "pear", "melon", "banana"];
// 1. Loop over this array, and add to the array the word in plural ("s" at the end) of every fruit
for (let i = 0; i < shopping.length; i++)  {
    shopping[i] += 's';  
}
  console.log(shopping);


// let prices = [23, 15, 34, 10];
// // 1. Loop over this array, and console.log the sum of the prices
// // 2. Where should you console log

// let sum ;
// for (let i = 0; i < prices.lengt; i++) {
//     sum += prices[i]  
// }
//   console.log(sum);