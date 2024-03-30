const posts=[
    {
        title:'Post one',
        body:'This is Post One',
        createdAt:new Date().getTime()
    },
    {
        title:'Post Two',
        body:'This is post Two',
        createdAt:new Date().getTime()
    }
]
var interval;

function getPost(){
    clearInterval(interval);
    interval=setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(post.title)
        })
        Process.exit()
    },1000)


}
function createPost(post,callback){
    setTimeout(()=>{
        post.createdAt=new Date().getTime();
        posts.push(post)
        callback()
    },1000)
}
function create4thPost(post4,callback){
    setTimeout(()=>{
        post4.createdAt=new Date().getTime();
        posts.push(post4)
        callback()
        getPost()
    },2000)

}

create4thPost({
    title:'post four',body:'this is post four'},getPost);

    