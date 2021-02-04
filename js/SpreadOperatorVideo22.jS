
//pasar array como parametro

/*
const numeros = [3,2,33];

const sumarNumeros= (a,b,c)=>{
	console.log(a+b+c);
}


sumarNumeros(...numeros);

*/

//añadir un array a otro
	
/*	
let users = ['luis', 'juan', 'pedro','pablo','memo'];

let newUsers = ['laura', 'ana', 'martha'];

//puede ser push splice etc.
users.splice(2,0,...newUsers);

console.log(users);
*/

//copiar arrays


/*
let numeros =[1,2,3,4];

let numeros2 = [...numeros];

console.log(numeros2);
*/
//contanenar arrays
/*
let numeros =[1,2,3,4];

let numeros2=[5,6,7];

let arrayConcat = [...numeros, ...numeros2];

console.log(arrayConcat);
*/

//enviar un numero indefinido de argumentos a una funcion
//(ejemp parametros rest)

/*
const restParams = (...numbers)=>{
	console.log(numbers);
}

restParams(2,4,5,47,77);
*/

//con libreria Math

	
	/*

let numbers =[2,3,4,4,2,55, 55];
//max y min busca el maximo y el minimo valor
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
*/

let numbers =[2,3,4,4,2,55, 55];

console.log(...new Set(numbers));









