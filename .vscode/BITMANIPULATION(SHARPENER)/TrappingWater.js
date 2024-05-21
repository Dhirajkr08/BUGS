function TrappingWater(height){
    let left=0
    let right=height.length-1
    let leftMax=height[left]
    let rightMax=height[right]
    let ans=0
    while(left<right){
        if(leftMax<rightMax){
            left++
            leftMax=Math.max(leftMax,height[left])
            ans=ans+leftMax-height[left]

        }
        else{
            right--
            rightMax=Math.max(rightMax,height[right])
            ans=ans+rightMax-height[right]
        }
    }
    return ans
}
let height=[0,1,0,2,1,0,1,3,2,1,2,1]
console.log(TrappingWater(height))