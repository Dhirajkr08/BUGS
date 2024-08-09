var writeLetter=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Wrote letter')
            resolve()

        },2000)
    })
}
var postLetter=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Letter Posted')
            resolve()
        },1000)
    })
}
var display=async ()=>{
    await writeLetter()
    await postLetter()
}
display()