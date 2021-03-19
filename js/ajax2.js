

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

