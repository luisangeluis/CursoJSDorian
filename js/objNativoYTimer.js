const button = document.querySelector('#button');

//alert('hla');


//ES IGUAL QUE CONSOLE.LOG ,A VECES DESPLIEGA MEJOR LA INFO
console.dir(button);

//MENSAJES DESTACADOS EN CONSOLA

console.error('hola');

const person ={
    nombre:'luis',
    edad: 29,
    correo: 'correo@correo.com'
}


console.table(person);

//OBJETO LOCATION
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
//CARGA LA PAGINA 
//location.reload();
//Redirige a otra pagina
//location.href='https://google.com'

//OBJETO HISTORY

//historial de mi navegador en la sesion actual (si te sales del navegador ya no funciona)
//BACK() HACIA ATRAS
//history.back();
//BACK() HACIA ADELANTE
//history.forward();
//BACK() NUMERO NEGATIVO O POSITIVO COMO PARAMETRO PARA NAVEGAR CIERTO NUMERO DE PAGINAS HACIA ATRAS O ADELANTE
//history.go();

//OBJETO DATE

const date = new Date();

//TIENE VARIOS METODOS PARA TRABAJAR CON EL TIEMPO
console.log(date);