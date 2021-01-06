class CLibro{

	constructor(pTitulo, pAutor,pAnio,pGenero){
		this.titulo = pTitulo;
		this.autor = pAutor;
		this.anio = pAnio;
		this.genero = pGenero;

	}

	devolverInformacion(){
		let datos;
		datos= "titulo: "+this.titulo+" autor: "+this.autor+" anio: "+this.anio+" genero: "+this.genero;
		return datos;
	}

}


let libros =[];

/*
for(let x = 0; x<libros.length; x++){
}
*/
let titulo;
let autor;
let anio;
let genero;

let libro;

while(libros.length<=3){
	titulo= prompt('Introduce titulo: ');
	autor=prompt('Introduce autor');
	anio = prompt('Introduce año');
	genero = prompt('Introduce genero');

	libro = new CLibro();



}

function estaVacio(pValor){

	if(pValor==null){
		return true;
	}

	false;
}