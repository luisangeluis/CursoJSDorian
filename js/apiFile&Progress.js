const inputFile = document.querySelector('#input-file');
const divArchivo = document.querySelector('#div-archivo');
const progreso = document.querySelector('#progreso');

inputFile.addEventListener('change',(e)=>{

    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    //Mostrar el archivo cargado
    fragment = document.createDocumentFragment();

    fileReader.addEventListener('load',(e)=>{
        const img = document.createElement('img');

        // console.log(e);
        img.setAttribute('src',e.target.result);
        img.style.width='100%';


        fragment.appendChild(img);

        divArchivo.appendChild(fragment);
    });

    //Evento mientras esta cargando el archivo
    fileReader.addEventListener('progress',(e)=>{
        //Devuelve el progreso
        console.log(e.loaded);
        //Devuelve el peso total del archivo
        console.log(e.total);

        console.log(e.loaded*100/e.total);

        progreso.style.width = Number.parseInt(e.loaded*100/e.total) + '%';
    });
    
    //Evento cuando finaliza la carga del archivo
    fileReader.addEventListener('loadend',()=>{
        console.log('end');
        progreso.style.width = '100%';

    });

});