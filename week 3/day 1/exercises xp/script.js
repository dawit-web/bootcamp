
///1 
let div = document.getElementById('navBar');
div.setAttribute('id', 'socialNetworkNavigation');
console.log(div);

let newLi = document.createElement('li');
let newa = document.createElement('a');
let text = document.createTextNode('Logout');

newa.appendChild(text);
newLi.appendChild(newa);
let att = document.createAttribute('href');
att.value = '#';
newa.setAttributeNode(att);

let ul = document.getElementsByTagName('ul')[0]
ul.appendChild(newLi);





