function UpdateLastUserActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const lastTime=new Date(). toLocaleString()
            resolve(lastTime)
        },1000)

    })
}
function createActiveUser(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(post)
        },1000)
    })
}
function deleteActiveUser(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}

async function main(){

    try{
        let user=await(createActiveUser('New User Active At:'))
        console.log(user)
        let currentTime=await UpdateLastUserActivity(user)
        console.log(currentTime)
        await deleteActiveUser()
    }
    catch(err){
        console.log(err)

    }
}
main()