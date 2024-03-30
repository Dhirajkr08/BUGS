class Stack{
    constructor(stack){
        this.stack=stack
    }
    PushIntoStack(val){
        this.stack.push(val)
    }

    popIntoStack(){
        if(this.stack.length===0){
            return -1

        }
        else{
            return this.stack.pop()
        }
    }


}
