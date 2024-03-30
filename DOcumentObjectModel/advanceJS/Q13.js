/*console.log('person1:show tickets');
console.log('person2:show tickets');

const preMovie=async()=>{
    try{
        const promiseWife=new Promise((resolve,reject)=>{
            setTimeout(()=>resolve('ticket'),3000)
        })
        const getPopCorn=new Promise((resolve,reject)=>resolve('popcorn'))
        const addButter=new Promise((resolve,reject)=>resolve('butter'))
        const getColdDrink=new Promise((resolve,reject)=>resolve('coldrink'))
        let ticket=await promiseWife;

        let[popcorn,butter,coldrink]=await Promise.all([getPopCorn,addButter,getColdDrink])
        console.log(`${popcorn},${butter},${coldrink}`)
        return ticket;
    }catch(err){
        console.error('Error occured',err)
        throw err

    }
}
preMovie().then((m)=>console.log(`person3:shows${m}`))
console.log('person4:show ticket')
console.log('person5:show ticket')

preMovie().then((m)=>console.log(`person3:${m}`)
*/


const preMovie=async()=>{
    const promiseWife=new Promise((resolve)=>
    setTimeout(()=>resolve('ticket'),3000));
    const getPopCorn=Promise.resolve('popcorn')
    const addButter=Promise.resolve('butter')
    const getColdDrink=Promise.resolve('coldrinks')

    try{
        const ticket=await promiseWife;
        const [popcorn,butter,coldrink]= await Promise.all([getPopCorn,getColdDrink,addButter])
        console.log(`${popcorn},${butter},${coldrink}`);
        return ticket
    }catch(err){
        console.log('Error Occured:',err)
        throw err 

    }
}
console.log('person1:show tickets');
console.log('person2:show tickets');

preMovie()
      .then((ticket)=>console.log(`person3:shows ${ticket}`))
      .catch((err)=>console.error('Error occured:',err));

console.log('person4:show ticket')
console.log('person5:show ticket')
preMovie().then((m)=>console.log(`person3:${m}`))



/*function getTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)

    })
}
function getPopCorn(){
    return new Promise((resolve,reject)=>
    resolve('popcorn'))
}
function addButter(){
    return new Promise((resolve, reject) =>
        resolve('butter'))
}

function getColdDrink(){
    return new Promise((resolve,reject)=>
    resolve('coldrink'))
}

async function preMovie(){
    try{
        const ticket=await getTicket()
        console.log('person1:Show Ticket')
        console.log('person2: Show Ticket')
        const [popcorn,coldrink,butter]=await Promise.all([getColdDrink(),getPopCorn(),addButter()])
        console.log(`${popcorn},${butter},${coldrink}`)
        return ticket
    }
    catch(error){
        console.log('Error occured:',error);
        throw error
    }
}
console.log('person1:show tickets');
console.log('person2:show tickets');

preMovie()
      .then((ticket)=>console.log(`person3:shows ${ticket}`))
      .catch((err)=>console.error('Error occured:',err));

console.log('person4:show ticket')
console.log('person5:show ticket')
preMovie().then((m)=>console.log(`person3:${m}`))
*/


