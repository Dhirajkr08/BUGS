const learnJavaScript=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('javaScript Learned')
            resolve()
        },2000)
    })
}
const learnReact=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('React Learned')
            resolve()
        },1000)
    })
}
const display=async()=>{
    await learnJavaScript()
    await learnReact()
}
display()