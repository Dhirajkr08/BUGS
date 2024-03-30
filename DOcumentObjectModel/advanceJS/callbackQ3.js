function create3rdPost(callback){
    setTimeout(()=>{
        console.log('post Three')
        if(callback){
            callback()
        }
    },3000)
}

function create4thPost(callback){
    setTimeout(()=>{
        console.log('post four')
        if(callback){
            callback()
        }
    },2000)
}
function create5thpost(){
    setTimeout(()=>{
        console.log('post five')
        
    },1000)
}

create3rdPost(function(){
    create4thPost(function(){
        create5thpost()
    })
})