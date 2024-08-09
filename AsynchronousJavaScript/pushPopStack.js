class Stack{
    constructor(stack){
        this.stack=stack
    }
    pushIntoStack(value){
        this.stack.push(value)
    }
    popFromStack(){
        if(this.stack.length !== 0){
            return this.stack.pop()
        }
        return -1

    }

}
const arr=[3,4,5,7,8]
const stack1=new Stack(arr)

stack1.pushIntoStack(1)

console.log(stack1.popFromStack())//1
console.log(stack1.popFromStack())//8
console.log(stack1.popFromStack())//7

stack1.pushIntoStack(1)//push 1

console.log(stack1.pushIntoStack())//1
console.log(stack1.popFromStack())//5




