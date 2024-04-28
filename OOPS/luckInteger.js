function LuckyInt(nums){
    let maxi=-1
    for(let i of nums){
        let count=nums.filter(ele=>ele===i).length
        if(count>maxi){
            maxi=count

        }
    }return maxi
}
function main(){
    let arr=[2,2,3,4]
    console.log(LuckyInt(arr))
}
main()