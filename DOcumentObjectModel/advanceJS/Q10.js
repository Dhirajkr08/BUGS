/*
let posts=[]

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            console.log(`post created: ${post}`);
            resolve()
        },1000)
    })
}
function deletePost(index){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length===0){
                reject(new Error('Error: Array is EMPTY'))
            }else{
                const deletedPost=posts.splice(index,1)
                console.log(`Deleted post:${deletedPost}`)
                resolve()
            }
        },1000)
    })

}
function printPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length===0){
                reject(new Error('ERROR: Array is EMPTY'))
            }else{
                posts.forEach((post,index)=>{
                    console.log(`POST${index+1}:${post}`)
                })
                resolve()
            }
        },1000)

    })
}
    

async function main(){
    const watch='watch';
    console.log(`Seeing the ${watch},your girlfriend takes you on the best date.`)
    await createPost('post1')
    await createPost('post2')
    await deletePost(0)
    await printPosts()
}
main()
    .then(()=>console.log("All the tasks completed successfully"))
    .catch(error=>console.error(error.message));

*/    

//MAIN QUESTION

const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
async function main(){
    try{
        await create2ndPost()
        const a=await deletePost()
        console.log(a.title)
        await create3rPost()
        const b=await deletePost()
        console.log(b.title)
        const c=await deletePost()
        console.log(c.title)
        const d=await deletePost()
        console.log(d.title)
    }catch(error){
        console.log(error)
    }
}
main()