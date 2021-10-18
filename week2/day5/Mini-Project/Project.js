function playTheGame() {

let answer = confirm("would like to play the game?.");

if (answer === false) {
  console.log("No problem, Goodbye");   
} else  {
    let number =prompt("Enter a number between 0 and 10");
 
  let computerNumber = Math.floor((Math.random() * 10) +1);
   console.log(computerNumber)
   test(number,computerNumber);
 
  }


 }
 
  playTheGame();

function test(userNumber,computerNumber){

    for (let index = 0; index < 3 ; index++) {
        if(userNumber == computerNumber){
        alert ("WINNER")
        break;
    } 
      else if(userNumber > computerNumber){ 
      userNumber = prompt("Your number is bigger then the computer’s, guess again")
    }  
    else if (userNumber < computerNumber){ 
    userNumber = prompt("Your number is small then the computer’s, guess again")
}
  }

}
 test();