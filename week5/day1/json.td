// / Exercise
// In the HTML file create a form containing 2 inputs, username and password. The ACTION SHOULD BE index.html WITH GET REQUEST
//   2. In the JS file, validate the data before processing it
// Username must be trimed, minimum 4 characters and start with a first letter uppercased
// Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page (edited) 

// let form = document.getElementById(form);
// form.addEventListener("submit" , validate)

// function validate (event) {
//   if
// }

// function passwordvalidate()

// PARSE
// const fromjson = '{"result":true, "count":42}';
// const toobj = JSON.parse(fromjson); //convert a JSON string into a JS object
// console.log("typeof(fromjson) : ", typeof(fromjson), " typeof(toobj) : ", 
// 	typeof(toobj), "toobj['count'] : ", toobj["count"])

// //STRINGIFY
// const fromobj = {username:"John", age:25};
// const tojson = JSON.stringify(fromobj)
// console.log(typeof(fromobj), typeof(tojson), tojson)

// //NESTED OBJECT EXAMPLE
// const jsonString = `{
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }`

// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject["employees"]) //receive only the employees object

// Parse this JSON string into a JS object
// then use array or object methods to display values
// then stringify pretty print (look at the lesson)

// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// let toobj = JSON.parse(jsonString);
// console.log(toobj) 

// let tojson = JSON.stringify(toobj)
// console.log(tojson)


function validate(frm){
    console.log(frm);
    let val = frm.txt.value;
    alert(val)
    if(val === 'ziv')
        return false;
    else
        return true;
  }

  
<!-- <form id="form" method="GET" action="index.html">
		<input  type ="text"  value="username"required>
    	<input  type ="password" value="password"></textarea>
		<button type="send">Send</button>
	  
	</form> -->
