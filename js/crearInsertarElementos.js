const listaUl = document.querySelector('#lista-ul');
const opcionesLista = document.querySelector('#opciones-lista');
const days = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
const opc = document.querySelector('#opc');

const title = document.querySelector('#title');


//listElement;

//listElement.textContent='lunes';

//listaUl.appendChild(listElement);
		//let listElement="";

const fragment = document.createDocumentFragment();
const fragmentOpt = document.createDocumentFragment();

for(const day of days){
	
	const listElement = document.createElement('li');
	listElement.textContent = day;

	const optionLElement = document.createElement('option');
	optionLElement.setAttribute('value',day.toLowerCase);
	optionLElement.textContent = day;


	fragment.appendChild(listElement);
	fragmentOpt.appendChild(optionLElement);
}



opcionesLista.appendChild(fragmentOpt);
listaUl.appendChild(fragment);

console.log(opc);


