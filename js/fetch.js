//alert('hoa');

const boton = document.getElementById('button');
const list =document.getElementById('list');

//Para saber si el navegador es compatible con fetch

/*
    if(window.fetch!=undefined)
        console.log('fetch ok');
    else
        console.log('no fetch');   
    */


boton.addEventListener('click', () => {
    

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res=>res.json())
    .then(res=>{

        const fragmento = document.createDocumentFragment();
        res.forEach(element => {
            const li = document.createElement('li');

            li.textContent = `${element.id} - ${element.name}`;
            fragmento.appendChild(li);

        }); 
        list.appendChild(fragmento); 
    })
});
