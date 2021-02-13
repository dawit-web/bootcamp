let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  let mariojson = JSON.stringify(marioGame);
  console.log(mariojson)
  let marioobj=JSON.parse(mariojson)
  console.log(marioobj)

//Exercise 3
//   1.Convert this JS object into a JSON object. Check what happens to the nested objects.
//   2.Convert and pretty print this JS object into a JSON object.
//   3.Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
  
  