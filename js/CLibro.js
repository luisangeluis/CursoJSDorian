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
let aux;

let libro;

while(libros.length<1){

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

		aux = prompt('Introduce genero:  ');
		if(aux=="aventuras" || aux=="terror" || aux=="fantasia"){
			
			genero=aux.toLowerCase();

			

		}else{
			aux="";

			alert('genero no valido');
		}
		

	}while(aux=="");

	libro = new CLibro(titulo,autor,anio,genero);
	libros.push(libro);

}

let busquedaGenero;
mostrarLibros(libros);

busquedaGenero = prompt('Introduce un genero: ').toLowerCase();
buscarPorGenero(busquedaGenero)

function mostrarLibros(pList){

	for(let x=0; x<pList.length;x++){
		
		//libros[x].autor.sort();
		console.log(`${pList[x].devolverInformacion()}`)

	}

}





function buscarPorGenero(pGenero){


	if(pGenero==libros)

}
function estaVacio(pValor){

	if(pValor==null){
		return true;
	}

	false;
}
