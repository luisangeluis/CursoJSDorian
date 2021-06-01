const inputFile = document.querySelector('#input-file');
const texto = document.querySelector('#text');
const img = document.querySelector('#img');

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

inputFile.addEventListener('change',(e)=>{

    console.log(e);
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load',(e)=>{
        console.log(e);
        img.setAttribute('src',e.target.result);


    });
});

