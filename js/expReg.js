const text = document.querySelector('#texto').textContent;

//g busca todas las coincidencias 
//i da true aunque sea mayuscula o minuscula

// const expReg = /lorem/gi

//Devuel true si encontro coincidencias
// console.log(expReg.test(text));


//El . es para cuando no sabes que seguira, se pone un punto por cada caracter que desconoces
// const expReg = /d./gi;

//match devuelve los resultados encontrados en un arreglo
// let r = text.match(expReg);

// console.dir(r);


//corchetes son para indicar que caracteres buscar
// const expReg = /[aei]a/gi;
//corchetes con rangos
// const expReg = /[a-d]/gi;

//() los parentesis son para buscar una o mas cadenas completas, ¡¡¡es sensible a espacios en blanco!!!
// const expReg = /(lorem|sit)/gi;

// ^ acento circunflejo es para indicar que no debe de haber nada antes de este simbolo
// $ Dolar es para indicar que no debe de haber nada despues del simbolo
// const expReg = /^a$/gi;

//Las llaves indican el numero de veces que se tiene que repetir lo que esta a la izquierda para que se true
//se puede poner minimo {2} minimo con maximo {2,5} y minimo hasta infinito {2,}
// const expReg = /^[a-zA-Z]{5}@{2}$/g
//? Con este simbolo indicamos que puede o no estar pero si está solo seria una vez
//+ Este indica que lo que esta a la izquierda debe estar 1 vez como minimo para que sea valido.
const expReg = /.*@.*\.{1}.*/gi




console.log(text.match(expReg));
