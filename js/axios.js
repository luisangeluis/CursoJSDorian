// alert('hola');

const getData = document.querySelector('#get-data');

const ulUsers = document.querySelector('#ul-usuarios');

const btnPost = document.querySelector('#post-user');

getData.addEventListener('click', ()=>{

    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res =>{

        console.log(res);

        const fragment = document.createDocumentFragment();

        res.data.forEach(element => {
            
            const liUser = document.createElement('li');

            liUser.textContent = `${element.id} ${element.name}`

            fragment.appendChild(liUser);
        });

        ulUsers.appendChild(fragment);


    }).catch(error =>console.dir(error))


});

btnPost.addEventListener('click',()=>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data:{
            id: 11,
            name: 'luis angel'
        }

    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
});