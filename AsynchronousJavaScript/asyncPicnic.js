function checkCar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const carReady=true//Math.random()>0.5
            if(carReady){
                resolve('Car is ready')
            }
            else{
                reject('Error: Car needs maintenance')
            }
        },2000);
    })
}
function packForPicnic(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemPacked=true//Math.random()>0.5
            if(itemPacked){
                resolve('Packed everything for picnic')
            }else{
                reject("Error: Not have some essentials")
            }
        },1000);
    })
}
async function display() {
    try{
        const ans=await Promise.all([checkCar(),packForPicnic()])
        ans.forEach(res=>console.log(res))
        //console.log(ans)
    }
    catch(err){
        console.log(err)
    }
    
}
display()