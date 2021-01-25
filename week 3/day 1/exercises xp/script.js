
///1 
let div = document.getElementById('navBar');
 console .log div.setAttribute('id', 'socialNetworkNavigation');

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





