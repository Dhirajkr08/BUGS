function validateStack(pushed,popped){
    let  stack=[]
    for(let i of pushed){
        stack.push(i)
        while(stack.length && popped.length && stack[stack.length-1]===popped[0]){
            stack.pop()
            popped.shift()
        }
    }
    return !stack.length
}
let pushed=[1,2,3,4,5]
let popped=[4,5,3,2,1]
console.log(validateStack(pushed,popped))