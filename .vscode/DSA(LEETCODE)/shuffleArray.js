function ShuffleArray(nums,n){
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(nums[i],nums[i+n])
    }return arr
}
function main(){
    nums=[2,5,1,3,4,7]
    n=3
    console.log(ShuffleArray(nums,n))
}
main()