const posts = [{title: 'POST1'},{title: 'POST2'}];

// Do not touch the following function
function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
}
// Do not touch the following function
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
// Do not touch the following function
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}
// Complete the following function 
//It should add POST5 to posts array with setTimeout of 1 second
function create5thPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title: 'POST5'});
            resolve()
        },2000)
    })
}

async function ans(){
    await create3rdPost()
    await create4thPost()
    await create5thPost()
    printPost()

}
ans()