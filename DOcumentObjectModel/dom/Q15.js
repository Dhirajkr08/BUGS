class ListNode{
    constructor(val){
        this.val=val
        this.next=null
    }
}
function createLinkedList(arr){
    if(arr.length===0) return null
    let head=new ListNode(arr[0])
    let current=head
    for(let i=0;i<arr.length;i++){
        current.next=new ListNode(arr[i])
        current=current.next
    }
    return head
}
var findSumOfOddElements=function(head){
    let sum=0
    while(head !==null){
        if(head.val %2 !==0){
            sum+=head.val
        }
        head=head.next
    }
    return sum

}
function main(){
    let arr=[1,2,4,3,9,10,5]
    let head=createLinkedList(arr)
    console.log(findSumOfOddElements(head))
}
main