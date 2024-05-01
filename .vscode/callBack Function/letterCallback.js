function writeLetter(cb){
    setTimeout(()=>{
        console.log('Wrote Letter')
        cb()

    },2000)
}
function postLetter(){
    setTimeout(()=>{
        console.log('Letter Posted')
    },1000)
}
writeLetter(postLetter)