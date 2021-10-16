let numberBottle = prompt("Give number to begin counting down bottles.")
let beer = 0;
let i = 0;
while (i < numberBottle ) {
console.log(`${numberBottle - i - 1} bottles of beer on the wall`);
console.log(`${numberBottle - i - 1} bottles of beer`);
 console.log(`Take ${i + 1} down, pass it around`);
   i = i + 1;
  numberBottle = numberBottle - i;
 }
    

