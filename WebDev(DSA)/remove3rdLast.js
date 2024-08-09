class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
    static remove3rdLast(head){
        let dummy=new Node(0)
        dummy.next=head
        let first=dummy
        let second=dummy

        for(let i=0;i<=3;i++){
            first=first.next
        }
        while(first !== null){
            first=first.next
            second=second.next
        }
        second.next=second.next.next
        return dummy.next

    }

}
let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(9);
console.log(Node.remove3rdLast(head))