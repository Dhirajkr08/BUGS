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
    for(let i=0;i<arr.length;i++){
        current.next=new ListNode(arr[i])
        current=current.next
    }
    return head

}
var findSumOfOddElements=function(head){
    let fast=head
    let slow=head
    while(fast && fast.next){
        fast=fast.next.next
        slow=slow.next
    }
    return slow
}

function main(){
    let arr=[1,2,3,4,5]
    let h=createLinkedList(arr)
    console.log(findSumOfOddElements(h))
}
main()