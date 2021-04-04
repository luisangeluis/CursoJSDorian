//console.log('hola');
/*
const getUser=(id,cb)=>{

    const user={
        
        name: 'dorian',
        id
    }
    cb('user no exist');
    //cb(null,user);
}

getUser(1,(err,user)=>{

    if(err) console.error(err);
    console.log(`el nombre es' ${user.name}`);
});
*/

const users=[
    {
    id:1,
    name:'luis'
    },{
        id:2,
        name:'angel'
    },{
        id:3,
        name: 'pedro'
    },{
        id:4,
        name:'pablo'
    }
]

const emails=[
    {
        id:1,
        email:'luis@correo'
    },
    {
        id:2,
        email:'angel@correo'
    },
    {
        id:3,
        email:'pedro@correo'
    }
]
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

getUser(4,(err,user)=>{
    if(err) return console.log('user no existe');
    
    getEmail(user,(err,res)=>{
        if(err) return console.log(err);
        console.log(res);
    });

});
