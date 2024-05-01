function bookTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let ticket=Math.random()>0.5
            if(ticket){
                resolve('Ticket booked')
            }else{
                reject('Ticket not Booked')
            }
        },3000)
    })
}
function bookCab(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cabBooked=Math.random()
            if(cabBooked){
                resolve('cab Booked')
            }
            else{
                reject('Not booked Yet')
            }
        },2000)
    })
}
function reachedCinemaHall(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let reached=Math.random()>0.5
            if(reached){
                resolve('recahed Cinema Hall')
            }
            else{
                reject('stuck in a traffic' )
            }
        },500)
    })
}
bookTicket()
.then((res)=>{
    console.log(res)
    return bookCab()
})
.then((res)=>{
    console.log(res)
    return reachedCinemaHall()
})
.then((res)=>{
    console.log(res)
    console.log('ENjoying movie')
})
.catch((err)=>{
    console.error(err)
    console.log('reached cinema hall late')
})