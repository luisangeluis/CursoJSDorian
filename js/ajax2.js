/*
const selectUsers = document.querySelector('#select-users');


//selectUsers.addEventListener('click', () => {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {

        console.log(data);

        let users = JSON.parse(data.target.response);

        
        //console.log(users);

        fragmen = document.createDocumentFragment();

        users.forEach(user => {
            let option = document.createElement('option');
            option.setAttribute('value', user.id);
            option.textContent = user.name;
            fragmen.appendChild(option);
        });

        selectUsers.appendChild(fragmen);
        
    });

    xhr.send();

//});
*/
const selectUsers = document.querySelector('#characters');
const botonGetData = document.querySelector('#boton');

const table = document.querySelector('#table');


document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

    getData(selectUsers.children[selectUsers.selectedIndex].value)
})

const getData = (id) => {

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (id == undefined) {
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


        xhr.addEventListener('load', (data) => {

            const dataJSON = JSON.parse(data.target.response);
            console.log(dataJSON);

            const fragmen = document.createDocumentFragment();

            dataJSON.forEach(user => {
                const option = document.createElement('option');
                option.setAttribute('value',user.id);
                option.textContent = user.name;
                fragmen.appendChild(option);


            });

            selectUsers.appendChild(fragmen);
        });
    } else {
        /*
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

        xhr.addEventListener('load', (data) => {

            const dataJSON = JSON.parse(data.target.response);
            const fragmen = document.createDocumentFragment();

            botonGetData.addEventListener('click',()=>{

                const tr = document.createElement('tr');
                table.appendChild(tr);
            });

        });
        */
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users?id=4');

        xhr.addEventListener('load', (data) => {

            const dataJSON = JSON.parse(data.target.response);
            const fragmen = document.createDocumentFragment();
            //const tr = document.createElement('tr');

            //fragmen.appendChild(tr); 


            dataJSON.forEach(user=>{
               const tr = document.createElement('tr');
               const name = document.createElement('td');
               const username = document.createElement('td');
               const email = document.createElement('td');

               name.textContent = user.name;
               username.textContent = user.username;
               email.textContent = user.email;

               tr.appendChild(name);
               tr.appendChild(username);
               tr.appendChild(email);

               fragmen.appendChild(tr);


            });
            table.appendChild(fragmen);
        });


    }

    xhr.send();
}

getData();
