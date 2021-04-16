//alert('hola');

const getName = async ()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('dorian');

        },1500);
    });
}
/*
const sayHello=()=>{
    const name=getName();
    return `hello ${name}`
}

console.log(sayHello());
*/

const sayHello= async ()=>{
    const name= await getName();
    return `hello ${name}`
}

sayHello()
    .then(res=>console.log(res));

    