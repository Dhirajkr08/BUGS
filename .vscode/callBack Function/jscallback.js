function learnJavaScript(cb){
    setTimeout(()=>{
        console.log("JavaScript Learned")
        cb()
    },2000)
}
function learnReact(){
    setTimeout(()=>{
        console.log("React Learned")
    },1000)
}
learnJavaScript(learnReact)