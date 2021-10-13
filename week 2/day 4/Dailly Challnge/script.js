// let str = prompt(("enter words"));

// strArray = str.split(",");
// console.log(strArray);

  
let str = prompt("Enter words");
str = str.split(",");

let len = 0;
for (let i = 0; i < str.length; i++) {
  if (len < str[i].length) {
    len = str[i].length;
  }
}

console.log("*".repeat(len + 4));

