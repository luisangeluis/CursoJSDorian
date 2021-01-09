class CLibro{

	constructor(pTitulo, pAutor,pAnio,pGenero){
		this.titulo = pTitulo;
		this.autor = pAutor;
		this.anio = pAnio;
		this.genero = pGenero;

	}

	devolverInformacion(){
		let datos;
		datos= "Titulo: "+this.titulo+" Autor: "+this.autor+" Año: "+this.anio+" Genero: "+this.genero;
		return datos;
	}

}


let libros =[];
let titulo;
let autor;
let anio;
let genero;

let libro;

while(libros.length<=1){
	titulo= prompt('Introduce titulo: ');
	autor=prompt('Introduce autor');
	anio = prompt('Introduce año');
	genero = prompt('Introduce genero').toLowerCase();

	if(titulo==""){
		titulo="Sin titulo";
	}
	if(autor==""){
		autor="Sin autor";
	}
	if(anio=="" || anio.length<4){
		anio="año no valido";
	}
	if(genero==""){
		if(genero!='aventuras' || genero!='terror' || genero!='fantasia'){
			genero="Sin genero";

		}
	}

	libro = new CLibro(titulo,autor,anio,genero);
	libros.push(libro);
}

for(let x=0; x<libros.length;x++){
	libros[x].autor.sort();

	console.log(`${libros[x].devolverInformacion()}`)

}



function estaVacio(pValor){

	if(pValor==null){
		return true;
	}

	false;
}
