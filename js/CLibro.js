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

	getGenero(){
		return this.genero;
	}

}


let libros =[];

let titulo;
let autor;
let anio;
let genero;

let aux;
let aux2;
let libro;

while(libros.length<3){

	do{

		aux = prompt('Introduce titulo: ');
		titulo=aux;

	}while(aux=="");

	do{

		aux = prompt('Introduce autor: ');
		autor=aux;

	}while(aux=="");

	do{

		aux = prompt('Introduce año: ');
		anio=aux;

		if(aux<=999)
			alert('año no valido');

	}while(aux=="" || anio.length<4 || parseInt(anio)<=999);


	do{
		aux = prompt('Introduce genero:  ').toLowerCase();
		
		if(aux=="aventuras" || aux=="terror" || aux=="fantasia"){
			genero =aux;

		}else{
			aux="";
		}
	}while(aux=="" );



	libro = new CLibro(titulo,autor,anio,genero);
	libros.push(libro);

}

mostrarLibros(libros);

function mostrarLibros(pList){

	/*
	for(let x=0; x<pList.length;x++){
		
		//libros[x].autor.sort();
		console.log(`${pList[x].devolverInformacion()}`)

	}
	*/
	console.log(libros);

}







let busquedaGenero;


busquedaGenero = prompt('Introduce un genero para buscar: ').toLowerCase();
//busquedaGenero = 'terror';

buscarPorGenero(busquedaGenero)







function buscarPorGenero(pGenero){

	//console.log(busquedaGenero);

	for(let x =0; x<libros.length; x++){
		if(libros[x].genero==pGenero){
			console.log('genero encontrado');
			console.log(libros[x].devolverInformacion());


		}

		console.log('generos Ordenados');

		console.log(libros[x].getGenero().sort());
	}
	
}


