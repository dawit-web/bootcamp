// Exercise 1   
//  Create a form like the one above. It should contain three inputs:
//  a small one asking for a name,
//  a larger one to write a message in,
//  and a submit input
// /2. When you click the Send button, the form will be submitted with a GET method. (you can use the same html file for the action url)
// /3. Where can you see the data that you send ? 
//  <!-- on url  

//  <!-- Exercise 2  -->
//  Where can you see the data that you send ?  
// we can see the data on inspect in network 


// Exercise 2 : HTML Form #2


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

  let marioJson = JSON.stringify(marioGame);
  console.log(marioJson)

  let marioPretty =  JSON.stringify(marioGame, null, 4) //Convert the JS object into a JSON string
  console.log(marioPretty);
  
//   let marioobj=JSON.parse(mariojson)
//   console.log(marioobj)

// //Exercise 3
// //   1.Convert this JS object into a JSON object. Check what happens to the nested objects.
// //   2.Convert and pretty print this JS object into a JSON object.
// //   3.Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
  
  