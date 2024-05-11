function findPrime(n){
    let x=2
    let arr=[]
    let count=0
    while(arr.length<n){
        let flag=true
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if(flag===true){
            arr.push(x)
            count++
        }
        if(count===n){
            break

        }
        x++
    }return arr
}
console.log(findPrime(5))
