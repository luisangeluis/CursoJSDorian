/*
let frase = 'hola mundo';

let arreglo = [];
const numbers = [5,4,11,1,58];

arreglo = Array.from(frase);


console.log(Array.from(frase));
console.log(arreglo.sort());

console.log(numbers.sort((a,b)=>a-b));

console.log(numbers.sort((a,b)=>b-a));
*/

const numbers = [11,44,1,0,48];


//recorre el array 
//numbers.forEach((number)=>console.log(number));

numbers.forEach((number, index)=>
	console.log(`${number} esta en la posicion ${index}`));

