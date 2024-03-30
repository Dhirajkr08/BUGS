function create3rdpost(callback){
    setTimeout(()=>{
        console.log('post Three')
        if(callback){
            callback()
        }

    },2000)

}

function create4thPost(){
    setTimeout(()=>{
        console.log('post Four')
    },1000)
}

create3rdpost(create4thPost);