//alert('hola');
/*
const getName = /*async()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('dorian');

        },1500);
    });
}
*/
/*
const sayHello=()=>{
    const name=getName();
    return `hello ${name}`
}

console.log(sayHello());
*/
/*
const sayHello= async ()=>{
    const name= await getName();
    return `hello ${name}`
}

sayHello()
    .then(res=>console.log(res));

*/

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

const getUser =  async(id) => {

    const user = users.find(user => user.id == id);

    if (!user) throw new Error('user no existe');
    else return (user);

}

const getEmail =  async(user) => {

    const email = emails.find(email => email.id == user.id);

    if (!email) throw new Error('no hay email');

    else return ({ user: user.id, name: user.name, email: email.email });

}


const getInfo = async (pId) =>{

     getUser(pId).then(res=>console.log(res));

    try {
        const user = await getUser(pId)
        const email = await getEmail(user);
        return `Usuario: ${user.name} correo: ${email.email}`
    } catch (error) {
        console.log(error);
    }

}

getInfo(3)
    .then(res => {
        console.log(res);
    }).catch(err=>console.log(err));

