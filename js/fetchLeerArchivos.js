//alert('hola');

const btnImg = document.querySelector('#ver-img');
const btnPdf = document.querySelector('#ver-pdf');
const espacioImg = document.querySelector('#img');



btnImg.addEventListener('click',()=>{

    
    fetch('/img/smallDog.jpg')
    .then(res=>res.blob())
    .then(img=>{
        espacioImg.src = URL.createObjectURL(img);
    });



    /*Archivo html*/ 

    /*
    fetch('/temasCurso/QueEsDom.html')
    .then(res=>res.blob())
    .then(html=>{

        const ur = URL.createObjectURL(html);
        const fragmento = document.createDocumentFragment();
        const iframe = document.createElement('iframe');
        
        iframe.setAttribute('src',`${ur}`);
        
        fragmento.appendChild(iframe);

        document.querySelector('#iframe').appendChild(fragmento);


        console.log(document.querySelector('#title'))
        //document.querySelector('#iframe').src= URL.createObjectURL(html);
    });
    */
});


btnPdf.addEventListener('click',()=>{

    fetch('/archivoPdf2.pdf')
    .then(res=>res.blob())
    .then(pdf=>{
        document.querySelector('#link-pdf').href = URL.createObjectURL(pdf);
    });
});
