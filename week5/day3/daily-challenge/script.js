let arrayWords = ['melon','ball', 'avocado']

let makeAllCaps = (arrayWords) => {
  return new Promise ((resolve, reject ) => {
    let capsArray = arrayWords.map(word => {
      if(typeof word === 'string'){
        return word.toUpperCase()
         
      } else {
        reject('Error: Not all the items are strings!')
      }
    })
    resolve(capsArray)

  })
}

let complicatedArray = ['cucumber', 44 ]

let sortWords = (array) => {
   return new Promise((resolve, reject) => {
     if(array) {
       resolve(array.sort());
     } else {
       reject('Error: Something went wrong with sorting words.')
     }
  })
}
makeAllCaps(arrayWords)
  .then(result => {
    return sortWords(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })


  // 2nd Daily Challenge

  let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


 let toJs = (json) => 
    new Promise ((resolve, reject) => {
      if(!json) reject(error,"obj is empty"))
     
      resolve(JSON.parse(json));
    } 
  })
  
// let toMors = (morseJS) =>
// new Promise ((resolve, reject) => {
//   let words = prompt ("giv a word or a sentence")
//   .toLowerCase() 
// console.log(toMors);
//   if (!char = in morseJS)) reject(error," no")) {
    
//     resolve(toMors.map => morseJS[char]));

//    }
//  });
// };