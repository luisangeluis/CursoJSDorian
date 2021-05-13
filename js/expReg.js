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
const expReg = /(lorem|sit)/gi;




console.log(text.match(expReg));
