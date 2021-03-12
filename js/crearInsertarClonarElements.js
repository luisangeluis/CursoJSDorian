const lista = document.querySelector('#list');
const item = document.createElement('li');

const btn = document.querySelector('#button');
item.textContent='Otro elemento'

//PARA HIJOS CREO
//AGREGA EL ELEMENTO AL ULTIMO
//lista.appendChild(item);
//AGREGA EL ELEMENTO INDICANDOLE CUAL Y LA POSICION
//lista.insertBefore(item, list.children[2]);

//OTRAS FORMAS DE INSERTAR RELATIVAS AL PADRE
//lista.insertAdjacentElement('afterbegin',item);
//lista.insertAdjacentElement('beforeend',item);
//lista.children[0].insertAdjacentElement('beforebegin',item);
//lista.children[0].insertAdjacentElement('afterend',item);

//REEMPLAZAR ELEMENTOS
//lista.replaceChild(item,lista.children[1]);



//INSERTAR ELEMENTOS METODOS PARECIDOS A JQUERY NO FUNCIONAN EN EXPLORER



//lista.append(item);

//AL PRINCIPIO EN EL CASO DE UNA LISTA
//lista.prepend(item);

//ANTES DEL ELEMENTO ACTUAL
//lista.before(item);
//DESPUES DEL ELEMENTO ACTUAL
//lista.after(item);

//TE POSICIONAS EN EL HIJO Y TAMBIEN FUNCIONA PARA QUE EL ELEMENTO QUEDE ADENTRO DE LA LISTA
//lista.children[0].after(item);

//REEMPLAZAR ELEMENTOS
//lista.children[1].replaceWith(item);

//lista.after(lista.cloneNode(true));

//ELIMINAR ELEMENTOS
//lista.remove();
lista.removeChild(lista.children[1]);