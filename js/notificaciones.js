const btnPermisos = document.querySelector('#btn-permisos');

btnPermisos.addEventListener('click',()=>{
    //Es para pedir  permisos para las notificaciones
    // Notification.requestPermission();
    if(Notification.permission!=='granted'){
        getPermission();
    }else{
        notify();
    }
});

const getPermission=()=>{
    Notification.requestPermission()
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
}

const notify =()=>{
    options={
        body: 'loremloremloremlorem loremloremlorem loremlorem lorem lorem lorem lorem lorem',
        //data no se muestra solo es info adicional
        data: 'extra data'
    }
    const notificacion = new Notification('hello world',options);

    notificacion.addEventListener('close',()=>{
        console.log('cerrado');
    });

    notificacion.addEventListener('show',()=>{
        console.log('abierto');
    });
    console.log(notificacion);
}