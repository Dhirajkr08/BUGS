class ListNode{
    constructor(val){
        this.val=val
        this.next=null
    }
}
function createLinkedList(arr){
    if(arr.length===0)return null
    let head=new ListNode(arr[0])
    let current=head
    for(let i=1;i<arr.length;i++){
        current.next=new ListNode(arr[i])
        current=current.next
    } 
    return head
}
function removeThirdLast(head){
    if(!head || !head.next || !head.next.next){
        return head
    }
    let prev=null
    let first=head
    let last=head
    for(let i=0;i<3;i++){
        prev=last
        last=last.next
        first=first.next
    }
    prev.next=prev.next.next
    return head
}
function main(){
    let arr=[1,3,2,5,1,9]
    let head=createLinkedList(arr)
    console.log(removeThirdLast(head))
}
main()

