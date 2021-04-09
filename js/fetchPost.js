//alert('hola');

const button = document.querySelector('#button');

button.addEventListener('click',()=>{

    const newPost = {
        userId:1,
        user:'luis',
        datos:'Lorem ipsum dolor sit amet.'
    }


    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body:JSON.stringify(newPost),
        headers:{
            'Content-type':'application/json; charset=UTF-8',

        },
    })
    .then(response=>response.json())
    .then(data=>console.log(data))


});