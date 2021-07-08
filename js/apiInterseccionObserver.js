const items = document.querySelectorAll('.item');


//el metodo lo pasamos como callback y se dispara cuando está siendo observado.
const callback = (entries) =>{
    // console.log(entries);

    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.textContent +' está insersectada');
        }
    })
}

const option={
    //Es para decir cual es el elemento padre de lo observado
    //root:
    //Se dispara cuando faltan 200px para el siguiente elemento 
    //Si eel numero es negativo se dispara 200px despues de visualizar el elemento
    rootMargin:'200px',
    //Valores de 0 a 1 en esta ocasion se dispara el callback cuando se ve la mitaddel elemento
    threshold: 0.5
}

//Configura el observer.
// option es un parametro opcional
const observer = new IntersectionObserver(callback,option);



items.forEach(item =>{
    //Para observar todos los elementos
    observer.observe(item);
});

