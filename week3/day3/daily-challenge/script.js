
let inputText = document.getElementById("text-input");


inputText.addEventListener('keyup', function(event) {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});





















// let sentec = document.getElementById('text-container');
// let input = document.getElementById('text-input');
// input.addEventListener('keyup', function);
// let letters = /^[A-Za-z]+$/;
// function keyLogger(element) {
//     if (element.key.match(letters)){
//         input.textContent += `${element.key}`;
//     } else {
//         input.textContent += ``;
//     }
// }
