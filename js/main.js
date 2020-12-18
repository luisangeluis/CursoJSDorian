
//ejercisio 1 video 15 del curso
/*
let nombre = prompt('ingresa tu nombre');
let edad = parseInt(prompt('ingresa tu edad'));


console.log(`Tu nombre es: ${nombre} y tu edad es: ${edad} el proximo a�o tendras: ${edad+1}`);
*/

//ejercisio 2 video 15 del curso
/*
let figura = prompt('Introduce nombre de la figura a calcular triangulo rectangulo o circulo');

let base;
let altura;
let radio;
const pi= 3.1416;
let resultado;

switch(figura){
	case 'triangulo':
		base = parseFloat(prompt('introduce la base'));
		altura = parseFloat(prompt('introduce la altura'));
		resultado = base*altura/2;
		console.log(`El area del triangulo es: ${resultado}`);

	break;

	case 'rectangulo':
		base = parseFloat(prompt('introduce la base'));
		altura = parseFloat(prompt('introduce la altura'));
		resultado= base*altura;
		console.log(`El area del rectangulo es: ${resultado}`);
	break;

	case 'circulo':
		radio = parseFloat(prompt('introduce el radio'));
		resultado = Math.pow(radio,2) * Math.PI;
		console.log(`El area del circulo es: ${resultado}`);

	break;
	default: console.log('la figura geometrica no es valida');


}
*/
/* ejercicio 3 video 15 del curo
let numero= prompt('Introduce numero');

for(let x=1; x<=numero;x++){

	if(x%2==0){

		console.log(`${x } es par`);
	}else{

		console.log(`${x } es impar`);
	}

}
*/

//ejercisicio 4 video 15 del curso
/*
let numero= prompt('ingresa un numero');
let esPrimo = true;
for(let x = 2; x<numero; x++){

		if(numero%x==0){
		esPrimo=false;
	}
}

if(esPrimo==true && numero>0){
	console.log(`${numero } es primo`);
}
if(esPrimo==false){
	console.log(`${numero } no es primo`);
}

if(numero<=0){
console.log(`numero no valido`);
}
*/

//ejercisio 5 video 15 del curso

/*
let numero = prompt('Introduce un numero');

let acumulacion=0;


if(numero>0){

	acumulacion=numero;
	for(let x=numero-1; x>1; x--){

		acumulacion= acumulacion * x;

	}
console.log(acumulacion);

}else{
	console.log("numero no valido");

}
*/

//ejercicio 6 video 16 del curo

/*
let suma = 0;
let numero = 0;
contador = 0;
while (suma < 50) {
	numero = parseFloat(prompt('Introduce un numero'));
	suma = suma + numero;
	contador++;
}

console.log(`numeros introducidos: ${contador} suma: ${suma}`)

*/

//ejercicio 7 video 16 del curso

/*
const numeros=[1,7,3,4,12];

let pares=[];
let impares=[];

//console.log(impares);

for(let x=0; x<numeros.length;x++){

	let aleatorio;
	aleatorio=Math.round(Math.random()*10+1);
	//aleatorio=Math.random();

	numeros[x]=numeros[x]*aleatorio;
	console.log(aleatorio);

	if(numeros[x]%2==0){

		pares.push(numeros[x]);
	}else{
		impares.push(numeros[x]);
	}
	
}
console.log('pares: '+pares);
console.log('impares: '+impares);

*/

//ejercicio 8 video 16 del curso

/*
const letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let letra;
let numero = parseInt(prompt("Introduce un numero entre 0 y 99 999 999"));// se puede comprobar que antes de convertir sea un numero
// y que tenga exactamente tantos digitos


if(numero >=0 && numero<=99999999){

	letra = letras[numero%23];
	console.log(`tu DNI es ${letra+numero}`);

}else if(numero<0){
			console.log('numero muy pequño')
}

if(numero>99999999){
	console.log('numero muy grande');

}

*/
//ejercicio 8 video 16 del curso (ejercicio del video)

/*
const letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const dni= prompt('introduce tu dni');

if(dni.length==8 && parseInt(dni)>0){

	console.log(`tu dni es ${dni}${letras[dni%23]}`);
}
	
*/

//ejercicio 9 video 16 del curso

/*
const palabra = prompt("Ingresa una palabra").toLowerCase();

//let letras=[];

let vocales=0;
let consonantes = 0;



for(const letra of palabra){
	//console.log(letra);

	if(letra=='a' || letra =='e' || letra =='i' || letra =='o' || letra =='u')
		vocales++;
	else
		consonantes++;
}

console.log(`la palabra ${palabra} tiene ${vocales} vocales y ${consonantes} consonantes`);
*/


//ejercicio 10 video 16 del curso
const colores = ["azul", "amarillo","rojo","verde","rosa"];
let indice=-1;

const color = prompt("Introduce un color").toLowerCase();

for(let x=0; x<colores.length; x++){

	if(color==colores[x]){

		indice =x;
	}
}

if(indice>=0)
	console.log(`color ${colores[indice]} encontrado se encuentra en la posicion ${indice}`); 
else
	console.log(`color no encontrado`);



































