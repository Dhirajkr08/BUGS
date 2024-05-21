function decodeString(s){
    let str=''
    let num=0
    let stack=[]
    for(let i of s){
        if(!isNaN(parseInt(i))){
            num=num*10+parseInt(i)
        }
        else if(i==='['){
            stack.push(num)
            stack.push(str)
            str=''
            num=0

        }
        else if(i===']'){
            const str1=stack.pop()
            const num1=stack.pop()
            str=str1+str.repeat(num1)
        }
        else{
            str+=i
        }
    }
    return str
    
}
let s="3[a]2[bc]"
console.log(decodeString(s))
