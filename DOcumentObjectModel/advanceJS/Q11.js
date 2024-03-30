const blogs =[];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(blogs.length>0){
                const deleteBlog=blogs.pop()
                resolve(deleteBlog)
            }else{
                reject('ERROR: ARRAY IS EMPTY')
            }
            
        },1000)
    })
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
}
async function main(){
    try{
        await create1stBlog()
        await create2ndBlog()
        const a=await deleteBlog()
        console.log(a.title)
        const b=await deleteBlog()
        console.log(b.title)
        const c=await deleteBlog()
        console.log(c)
    }
    catch(err){
        console.log(err)
    }
}
main()