function callData(cb){
    setTimeout(()=>{
        const data='Hello World!'
        cb(data)
    },1000)
}
function display(data){
    console.log('A belongs to that city who had history but not presnet but definetely will have future!')
    console.log(data)
}
callData(display)

var callData=(callback)=>{
    setTimeout(()=>{
        const data='Hello world'
        console.log('love you 3000')
        callback(data)
    },1000)
}
var display=(data)=>{
    console.log(data)
}
callData(display)