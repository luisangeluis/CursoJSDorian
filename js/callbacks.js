const users = [
    {
        id: 1,
        name: 'luis'
    }, {
        id: 2,
        name: 'angel'
    }, {
        id: 3,
        name: 'pedro'
    }, {
        id: 4,
        name: 'pablo'
    }
]

const emails = [
    {
        id: 1,
        email: 'luis@correo'
    },
    {
        id: 2,
        email: 'angel@correo'
    },
    {
        id: 3,
        email: 'pedro@correo'
    }
]

/*Con callbacks*/
/*
const getUser=(id,cb)=>{

    const user = users.find(user=>user.id==id);

    if(!user)cb('user no existe');
    else
    cb(null,user);

}

const getEmail=(user,cb)=>{
    const email =emails.find(email=>email.id==user.id);
    if(!email)cb('no hay email')
    else
    cb(null,{
        user:user.id,
        name:user.name,
        email:email.email
    });
}

getUser(1,(err,user)=>{
    if(err) return console.log(err);

    console.log(user);

});

getUser(4,(err,user)=>{
    if(err) return console.log(err);
    
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
});
*/
/*Fin de los callbacks*/

/*Con promesasa*/

const getUser = (id) => {

    const user = users.find(user => user.id == id);

    const promise = new Promise((resolve, reject) => {

        if (!user) reject('user no existe');
        else resolve(user);

    });

    return promise;

}

const getEmail = (user) => {

    const email = emails.find(email => email.id == user.id);

    const promise = new Promise((resolve, reject) => {

        if (!email) reject('no hay email')
        else resolve({ user: user.id, name: user.name, email: email.email })

    });

    return promise
}

getUser(3)
    .then(user => {
        //Si solo es una linea se puede omitir el return  y las llaves
        return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));