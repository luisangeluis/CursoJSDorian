const button = document.querySelector('#button');

//alert('hla');


//ES IGUAL QUE CONSOLE.LOG ,A VECES DESPLIEGA MEJOR LA INFO
//console.dir(button);

//MENSAJES DESTACADOS EN CONSOLA

//console.error('hola');
/*
const person ={
    nombre:'luis',
    edad: 29,
    correo: 'correo@correo.com'
}
*/

//console.table(person);

//OBJETO LOCATION
/*
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
*/
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

//const date = new Date();

//TIENE VARIOS METODOS PARA TRABAJAR CON EL TIEMPO
//console.log(date);

/*
button.addEventListener('click',()=>{

    //Se ejecuta la funcion despues de cierto tiempo
    //dos formas de hacerlo
    //setTimeout(saludar,3000);
    setTimeout(()=>{
        saludar();
    },4000);
});
*/

//FRENAR LA FUNCION DE SETIMEOUT

//FUNCION
/*
const saludar = () => {
    console.log('hola');
}
*/
//SE GUARDA EL SETTIMEOUT EN UNA VARIABLE
/*
const timeout = setTimeout(() => {
    saludar();
}, 3000);
*/
/*
button.addEventListener('click',()=>{
    //SE PASA LA VARIABLE DEL SETTIMEOUT
    clearTimeout(timeout);
});
*/

//SET INTERVAL SE EJECUTA CADA CIERTOS SEGUNDOS

let contador = 0;

const interval = setInterval(()=>{
    console.log(contador);
    contador++;
},1500);


button.addEventListener('click',()=>{
    //SE PASA LA VARIABLE DEL INTERVAL
    clearTimeout(interval);
});


