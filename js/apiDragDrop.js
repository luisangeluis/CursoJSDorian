const myImage = document.querySelector('#my-image');
const myZone = document.querySelector('.zone-drop');

//
//***EVENTOS DEL OBJETO QUE ESTAMOS ARRASTRANDO***
//
//Se dispara cuando se empieza a arrastrar el elemento
myImage.addEventListener('dragstart',()=>{
    console.log('se empezo a arrastrar');
});

//Se dispara el tiempo que dure arrastrandolo
myImage.addEventListener('drag',()=>{
    // console.log('se está arrastrando');
});
//Se dispara cuando soltamos el elemento
myImage.addEventListener('dragend',()=>{
    console.log('se terminó de arrastrar');
});
//
//***EVENTOS DE LA ZONA DE DESTINO***
//
//Se dispara cuando el objeto entra en la zone de destino
myZone.addEventListener('dragenter',()=>{
    console.log('objeto entró la zona');
});

//Se dispara cuando el objeto se mueve sobre la zona de destino
myZone.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log('objeto moviendose en la zona');
});
//Se dispara cuando el objeto se soltó en la zona de destino
//Solo funciona en conjunto con dragover y tienen que tener preventdefault
myZone.addEventListener('drop',(e)=>{
    e.preventDefault();

    console.log('objeto se solto en la zona de destino');
});

myZone.addEventListener('dragleave',(e)=>{
    e.preventDefault();

    console.log('aaa salió de la zona de destino');
});