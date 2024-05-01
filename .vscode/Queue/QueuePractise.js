class queue{
    constructor(){
        this.items=[]

    }
    isEmpty(){
        return this.items.length===0;
    }
    Enqueue(element){
        this.items.push(element)


    }
    Dequeue(){
        if(this.items.length!==0){
            //return this.items.pop() (it will remove item from the top)
            return this.items.shift()
        }
    }
    front(){
        return this.items[0]
    }
    rear(){
        return this.items[this.items.length-1]
    }
}
var q=new queue()
q.Enqueue(10)
q.Enqueue(20)
q.Enqueue(30)

console.log(q.Dequeue())
 console.log(q.rear())
console.log(q.front())