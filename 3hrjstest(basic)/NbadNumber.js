function sumOfDigit(n){
    return n.toString().split('').reduce((a,b)=>a+parseInt(b),0)
}
    
function NbabdNumber(n){
    let arr=[]
    let count=10
    while(arr.length<n){
        let sum=sumOfDigit(count)
        if(count%sum===0){
            arr.push(count)
        }
        count++
    }
    return arr
    
}
let n=5
console.log(NbabdNumber(n))