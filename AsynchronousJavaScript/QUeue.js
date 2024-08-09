class Queue{
    constructor(queue=[]){
        this.queue=queue
    }
    pushQueue(val){
        this.queue.push(val)
    }
    dequeue(){
    if(this.queue.length!==0){
        return this.queue.shift()
    }
    else{
        return -1
    }
    }
    Peek(){
        if(this.queue.length !==0){
            return this.queue[0]
        }
        else{
            return -1
        }

    }
}

const myQue=new Queue()
myQue.pushQueue(10)
myQue.pushQueue(20)
myQue.pushQueue(30)

console.log(myQue.dequeue())
console.log(myQue.dequeue())
console.log(myQue.dequeue())
