
// daily challenge

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
// expected output: Array [3, 42, "foo"]
 
 Promise.all([promise1 ,promise2,promise3]).then(values => {
 console.log(values);
});
 
 
//  .then((resultsArry) => {
//  console.log(resultsArry)
// })

// .catch((error) => {
//  console.log(error);
// });
















