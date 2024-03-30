const preMovie=async()=>{
    const promiseWife=new Promise((resolve,reject)=>
        setTimeout(()=>resolve('ticket'),3000))
    const getPopCorn=Promise.resolve('popcorn')
    const addButter=Promise.resolve('butter')
    const getColdDrink=Promise.resolve('coldrink')

    try{
        const ticket=await promiseWife;
        const [popcorn,butter,coldrink]=await Promise.all([getPopCorn,addButter,getColdDrink])
        console.log(`${popcorn},${butter},${coldrink}`)
        return ticket
    }catch(error){
        console.log('Error occured:',error)
    }

}
console.log('person1:show tickets')
console.log('person2:show tickets')

preMovie().then((ticket)=>console.log(`person3:shows ${ticket}`))
          .catch((error)=>console.error('Error occured:',error))

console.log('person4:show ticket')
console.log('person5:show ticket')
preMovie().then((m)=>console.log(`person3:${m}`))
