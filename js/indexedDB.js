
//window.indexedDB sirve para accesar indexedDB (API)
const indexDB = window.indexedDB;

const formulario = document.querySelector('#formulario');

const btnAddTask = document.querySelector('#add-task');


if(indexDB && formulario){

    //db se usa para almacenar la base de datos.
    let db;

    //Configura la peticion en la base de datos
    //Parametros es el nombre de la base de datos y la version
    const request = indexDB.open('taskList',1);
    //Se ejecuta al verificar que todo este correcto
    
    request.onsuccess=()=>{

        db = request.result;
        console.log('OPEN',db);
        
    }
    //Crea o actualiza la base
    request.onupgradeneeded=()=>{

        db=request.result;
        console.log('CREATE',db);

        //Es para crear un almacen dento de la base datos
        const objectStore = db.createObjectStore('tasks');
    }

    request.onerror=(error)=>{
        console.log('error',error);
    }

    formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        const data = {
            taskTitle: e.target.inputTask.value,
            priority: e.target.selPriority.value
        }
        console.log(data);

    });


}


