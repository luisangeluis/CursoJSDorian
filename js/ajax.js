const button = document.querySelector('#button');
const lista = document.querySelector('#list');

button.addEventListener('click',()=>{
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    

    xhr.addEventListener('load',(data)=>{

        //TE DEVUELVE QUE TIPO DE DATO ES
        console.dir(typeof data.target.response);
        const dataJson=JSON.parse(data.target.response);
        console.dir(dataJson);

        fragmento = document.createDocumentFragment();
        let li = document.createElement('li');
        dataJson.forEach(element => {
            li.innerText = `id: ${element.id} nombre: ${element.name}`;
            fragmento.appendChild(li);

        });

        lista.appendChild(fragmento);
       
        

        

    });
    //AL ULTIMO SE PONE SEND()
    xhr.send();
    

    
});

