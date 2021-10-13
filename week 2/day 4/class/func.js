
function pet (name, color, breed){
  console.log(`${name} is a ${color} ${breed}`)

}
 pet("albert","gray","siyam")



// function user (age ,colors) {
//      // LOCAL SCOPE
//     let twiceMyAge = age *2; 
//     for(let color of colors){
//         console.log(color)
//     }
// }
//  user(29,['blue','red'] );
 
// user(56, ["blue", "red", "green"])
// user(56, ["pink", "yellow", "black"])

// global scope
// CANNOT ACCESS IT
// console.log("twiceMyAge is :", twiceMyAge)

// GLOBAL SCOPE
// let twiceMyAge = age * 2;

// function user (age, colors){
// 	// LOCAL SCOPE
// 	for (let color of colors){
// 		console.log(color)
// 	}
// }




let prices = [20,12,30];
 function pricesTax (){
    for (let i = 0; i < prices.length; i++) {
        prices[i] *= 1.17 ;   
    }
        
 }
  pricesTax();
 

 function getSum (currencyConversion) {
	let sum = 0;
	for (let i = 0; i<prices.length; i++){
		sum += prices[i];
	}
	// sum of all the meals
	sum = sum*currencyConversion;
	return sum;
}