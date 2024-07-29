class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
    static sumOfOdd(head){
        let sum=0
        while(head !==null){
            if(head.val %2 !==0){
                sum+=head.val
            }
            head=head.next
        }
        return sum
    }
}
let head=new Node(1)
head.next=new Node(2)
head.next.next=new Node(4)
head.next.next.next=new Node(3)
head.next.next.next.next=new Node(9)
head.next.next.next.next.next=new Node(10)
head.next.next.next.next.next.next=new Node(5)

console.log(Node.sumOfOdd(head))