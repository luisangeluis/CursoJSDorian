const person={

	nombre:'juan',
	edad:29,
	hijos:['Pedro','Pablo','Jorge']
}

console.log(person)
console.log(person['nombre']);

console.log(person.nombre);
console.log(person.edad);

for(let x=0; x<person.hijos.length;x++)
console.log(person.hijos[x]);

for(const key in person){
	console.log(key);
}

for(const key in person){
	console.log(person[key]);
}

for(const son of person.hijos){
	console.log(son);
}

console.log(`nombre: ${person.nombre} edad: ${person.edad} Tus hijos son:${person.hijos.join(', ')}`)
