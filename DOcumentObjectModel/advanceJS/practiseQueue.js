class Queue{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        return this.item.length===0
    }
    enqueue(ele){
        this.item.push(ele)
    }
    dequeue(){
        if(!this.isEmpty())return this.item.shift();
    }
    front(){
        if(!this.isEmpty())return this.item[0]
    }
    rear(){
        if(!this.isEmpty())return this.item[this.item.length-1]

    }


}

var queue=new Queue;
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.front())
console.log(queue.rear())
console.log(queue.dequeue())