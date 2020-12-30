class CPersona{

	constructor(pNombre, pApellido, pEdad){

		this.nombre = pNombre;
		this.edad = pEdad;
		this.apellido = pApellido;

		this.datos = `nombre: ${this.nombre} apellido: ${this.apellido} edad: ${this.edad}`;
	}

	saludar(){
		return `hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`
	}


}

const persona1 = new CPersona('Luis','Zepeda',29);
const persona2 = new CPersona('Angel','Gonzalez',30);

console.log(persona1);
console.log(persona1.datos);
console.log(persona1.saludar());

console.log(persona2.datos);
console.log(persona2.saludar());
console.log(persona2.apellido);