function NonRepeatingCHar(A){
    let char=new Set()
    let ans=''
    let stack=[]
    for(let i of A){
        if(!char.has(i)){
            char.add(i)
            stack.push(i)
        }
        else{
            if(stack.includes(i)){
                stack.splice(stack.indexOf(i),1)

            }
        }
        ans+=stack.length==0 ? '#' : stack[0]
    }
    return ans
}
let A="abadbc"
console.log(NonRepeatingCHar(A))