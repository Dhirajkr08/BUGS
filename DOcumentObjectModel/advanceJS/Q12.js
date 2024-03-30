function UpdateLastUserActivity(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            const lastActivityTime=new Date().toLocaleString()
            reslove(lastActivityTime)
        },1000)

    })

}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(post)
        },1000)
    })

}
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}
async function main(){
    try{
    const post=await createPost('New Post')
    const lastTime=await UpdateLastUserActivity()
    console.log('All posts:',[post])
    console.log("last activity time:",lastTime)
     await deletePost(post)
    }
    catch(error){
        console.error("An error occured:",error)

    } 
}
main()
