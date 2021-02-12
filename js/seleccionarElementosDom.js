/*
const title = document.getElementById('title');
//const paragraph = document.querySelector('.paragraph:nth-child(3)');


const paragraph = document.querySelector('.paragraph');

const span = paragraph.querySelector('span');

title.textContent = 'accediendo a nodos texto en el titulo';

//console.log(paragraph);
console.log(span.textContent);

*/

const paragraph = document.querySelectorAll('.paragraph');


//HACE QUE EL NODE LIST SE COMPORTE COMO UN ARRAY
const paragraphArray = Array.from(document.querySelectorAll('.paragraph'));



//A LO QUE ENTIENDO ITERA CON CADA ELEMENTO
 paragraphArray.map(p=>p.style.color='blue');

console.log(paragraph);

