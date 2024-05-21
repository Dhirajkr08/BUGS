class Queue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length===0
    }
    Enqueue(val){
        this.queue.push(val)
    }
    Dequeue(){
        if(!this.isEmpty()){
            return this.queue.pop()
        }
    }
    getFirstEle(){
        if(!this.isEmpty()){
            return this.queue[0]
        }
    }
}
let q=new Queue()
q.Enqueue(9)
q.Enqueue(8)
q.Enqueue(7)
q.Enqueue(12)
console.log(q.isEmpty())
console.log(q.Dequeue())
console.log(q.getFirstEle())