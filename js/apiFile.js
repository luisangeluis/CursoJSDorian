const inputFile = document.querySelector('#input-file');
const texto = document.querySelector('#text');
const img = document.querySelector('#img');

//CON ARCHIVO DE TEXTO
// inputFile.addEventListener('change',(e)=>{
//     console.log(e);    
//     console.log(e.target.files[0]);
//     //Se captura la info en una variable
//     const file = e.target.files[0];
//     console.log(file);

//     //Se crea una variable de tipo FileReader
//     const fileReader = new FileReader();

//     fileReader.readAsText(file);

//     //ReadAsText es asincrona, usar el evento load
//     fileReader.addEventListener('load',(e)=>{
//         console.dir(e);
//         console.dir(e.target.result);

//         texto.textContent = e.target.result;
//     })

// });

//CON ARCHIVO DE IMAGEN
// inputFile.addEventListener('change',(e)=>{

//     console.log(e);
//     const file = e.target.files[0];

//     const fileReader = new FileReader();

//     fileReader.readAsDataURL(file);

//     fileReader.addEventListener('load',(e)=>{
//         console.log(e);
//         img.setAttribute('src',e.target.result);


//     });
// });

//CON MULTIPLES IMAGENES
//HAY QUE AGREGAR EL ATRIBUTO MULTIPLE
inputFile.addEventListener('change', (e) => {
    console.log(e);
    const files = e.target.files;

    const fragment = document.createDocumentFragment();

    for(const element of files){
        const fileReader = new FileReader();
        const img = document.createElement('img');

        fileReader.readAsDataURL(element);

        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result);
        });

        fragment.appendChild(img);
    }
    

    document.getElementById('images').appendChild(fragment);

})

