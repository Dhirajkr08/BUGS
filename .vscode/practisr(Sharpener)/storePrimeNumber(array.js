function storePrime(n){
    let list=[]
    let x=2
    let count=0
    while(list.length<n){
        let flag=true
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if(flag===true){
            list.push(x)
            count++
        }
        if(count===n){
            break
        }
        x++
    }
    return list
}
console.log(storePrime(5))