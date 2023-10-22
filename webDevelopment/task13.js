function isValid(s){
    let stack=[]
    d={']':'[','}':'{',')':'('}
    for(let i of s){
        if(i in d){
            if(stack.length===0 || stack.pop()!==d[i]){
                return false
            }
        }
        else{
            stack.push(i)
        }
    }
    return (stack.length===0)
}
function main(){
    let n=(prompt())
    output=(isValid(n))
    if(output){
        console.log(true)
    }
    else{
        console.log(false)

    }
    
}
main()

//
while (s.length) {
    let temp = s;
    s = s.replace('()', '');
    s = s.replace('{}', '');
    s = s.replace('[]', '');
    if (s == temp) {
        return false;
    }
}
return true;

};