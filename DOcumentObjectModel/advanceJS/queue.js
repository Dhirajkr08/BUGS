class Queue{
    constructor(queue) {
        this.queue=queue
        this.min=0
        this.max=queue.length-1
        
    }
    pushIntoQueue(value){
        this.queue.push(value)
        this.max++
    }
    popIntoQueue(){
        if(this.min>this.max){
            return -1
        }
        else{
            const val=this.queue[this.min]
            this.min++
            return val
        }
    }
}

