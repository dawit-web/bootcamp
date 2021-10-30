let anagrmas = (strA, strB) => {

   strA = strA.replace(/[^\w]/g, "").toLowerCase()
   strB = strB.replace(/[^\w]/g, "").toLowerCase()

 return sortString(strA) === sortString(strB)
    
}

 
    function sortString(string) {  /*function sorts the strings*/
        return string.split('').sort().join('');
    };

console.log(anagrmas("Astronooomer", "Mmmoon starer")); //false
console.log(anagrmas("The Morse Code", "Here come dots")); //true

