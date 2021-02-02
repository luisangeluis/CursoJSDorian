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
/*
const numbers = [11,44,1,0,48];
*/

//recorre el array 
//numbers.forEach((number)=>console.log(number));

/*
numbers.forEach((number, index)=>

	console.log(`${number} esta en la posicion ${index}`));
*/
/*
const words =['HTML', 'CCS', 'JavaScript', 'PHP']

console.log(words.some(word => word.length>9));	
console.log(words.every(word => word.length>4));	
*/

//const numbers = [1,2,3,4,5];
//map le aplica las instrucciones a cada uno de los elementos
/*
const numbersPor2 = numbers.map(number => number*2);
console.log(numbersPor2);
*/
//busca que elementos cumplen la condicion y devuelve un nuevo array

/*
const numbersPor2 = numbers.filter(number => number>40);
console.log(numbersPor2);

*/

//console.log(numbers.reduce((a,b)=>a*b));

const users =[
	{
		name: 'user1',
		online: true
	},
	{
		name: 'user2',
		online: false
	},
	{
		name: 'user3',
		online: false
	},
	{
		name: 'user4',
		online: true
	}
]

const userOnline= users.reduce((cont,user)=>{
	if(user.online)
		cont++;
	return cont;
},0)

console.log(`hay ${userOnline} usuarios conectados`);