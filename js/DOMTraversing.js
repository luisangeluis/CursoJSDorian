const parent = document.querySelector('#parent');

//DEVUELVEN EL ELEMENTO PADRE
//console.log(parent.parentNode);
//console.log(parent.parentElement);

//SE PUEDE UTILIZAR childNodes PERO DEVUELVE SALTOS DE LINEA Y COMENTARIOS
//console.log(parent.children);

//PRIMER ELEMENTO HIJO, TAMBIEN se usa firstChild pero no devuelve si no lo primero que encuentra
//console.log(parent.firstElementChild);

//DEVUELVEN EL PRIMER NODO Y EL PRIMER ELEMENTO RESPECTIVAMENTE ES MAS COMUN USAR lastElementChild
//console.log(parent.lastChild);
//console.log(parent.lastElementChild);
//console.log(parent.hasChildNodes());
console.log(parent.parentElement.nextElementSibling);
console.log(parent.parentElement.previousElementSibling);
