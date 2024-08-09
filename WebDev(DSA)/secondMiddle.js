class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
    static secondMiddle(head){
        let fast=head
        let slow=head
        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow
    
    }
}

let head=new Node(1)
head.next=new Node(2)
head.next.next=new Node(3)
head.next.next.next=new Node(4)
head.next.next.next.next=new Node(5)

console.log(Node.secondMiddle(head).val)