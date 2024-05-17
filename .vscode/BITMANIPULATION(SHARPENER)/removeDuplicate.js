function removeDupString(s){
    let stack=[]
    for(let i of s){
        if(stack.length && stack[stack.length-1]===i){
            stack.pop()
        }else{
            stack.push(i)
        }
    }
    return stack.join('')

} 
let s="abbaca"
console.log(removeDupString(s)) 
