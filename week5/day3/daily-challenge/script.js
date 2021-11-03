// let arrayWords = ['melon','ball', 'avocado']

// let makeAllCaps = (arrayWords) => {
//   return new Promise ((resolve, reject ) => {
//     let capsArray = arrayWords.map(word => {
//       if(typeof word === 'string'){
//         return word.toUpperCase()
         
//       } else {
//         reject('Error: Not all the items are strings!')
//       }
//     })
//     resolve(capsArray)

//   })
// }

// let complicatedArray = ['cucumber', 44 ]

// let sortWords = (array) => {
//    return new Promise((resolve, reject) => {
//      if(array) {
//        resolve(array.sort());
//      } else {
//        reject('Error: Something went wrong with sorting words.')
//      }
//   })
// }
// makeAllCaps(arrayWords)
//   .then(result => {
//     return sortWords(result)
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(error)
//   })


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
  // toJs(json)
  // .then(toMorse)
  // .then(joinWords)
  // .catch(err=> console.log(err))

 let toJs = (json) => { 
    new Promise ((resolve, reject) => {
      if(!json) { 
        reject(error,"obj is empty")
      }
      resolve(JSON.parse(json));
     
    })
  };
  

let toMorse = (morseJS) => { 
  let word = prompt("giv a word or a sentence").toLowerCase()
new Promise ((resolve, reject) => {
  // let word = prompt("giv a word or a sentence").toLowerCase() 
   let translation = []
  if (word in morseJS) {
    reject(error," no morse ")
    translation.push(morseJS(word))
  }  
    resolve(translation) 
    console.log(translation);
    console.log(toMorse);
});

}

function joinWords (word) {
  let letter = ``
  for (let i = 0; i < word.length; i++) {
      letter += word[i] + `\n`
  }
  console.log(letter)
}
console.log(morse)
toJs(morse)
    .then((x) => {
      console.log(x) 
      toMorse(x)})    
    .then((x) => joinWords(x))
    .then((x) => console.log(x))
    .catch((err) => console.log(err))

//  toJs(morse)
// .then()(toMorse)
// .then(joinWords)
// .catch(err=> console.log(err)