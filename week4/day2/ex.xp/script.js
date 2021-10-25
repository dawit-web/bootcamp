// Exercise 1 : Function With Two Parameters
const oneline = (num1 , num2)  => num1 + num2;

// Exercise 2 : Closure
var addTo = x => y => x + y;
let addToTen = addTo(10);
addToTen(3);//13
console.log(addToTen(3))

// Exercise 3 : Currying
// let sum = (a, b) => a + b
// curriedSum = (a) => (b) => a + b
// console.log(curriedSum)
// b = curriedSum(30)(1)///31
// console.log(curriedSum(30)(1))

// Exercise 4 : Currying
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(curriedSum(5))
// add5(12)
// console.log(add5(12))//17

// Exercise 5 : Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
console.log(compose(add1, add5)(10));// 16


