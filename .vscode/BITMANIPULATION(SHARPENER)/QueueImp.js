class Queue{
    constructor(){
        this.queue=[]
    }
    Enqueue(val){
        return this.queue.push(val)
    }
    
    isEmpty(){
        return this.queue.length===0
    }
    Dequeue(){
        if(!this.isEmpty()){
            return this.queue.pop()
        }
    }
    getFirstEle(){
        if(this.queue.length!==0){
            return this.queue[0]
        }
    }
}
let q=new Queue()
q.Enqueue(1)
q.Enqueue(2)
q.Enqueue(3)
q.Enqueue(6)
q.Enqueue(0)
console.log(q.getFirstEle())
console.log(q.isEmpty())
console.log(q.Dequeue())