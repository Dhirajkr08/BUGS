function largestRectangleArea(heights){
    heights.push(0)
    let maxi=0
    let stack=[-1]
    for(let i=0;i<heights.length;i++){
        while(heights[i]<heights[stack[stack.length-1]]){
            let l=heights[stack.pop()]
            let h=i-stack[stack.length-1]-1
            maxi=Math.max(maxi,l*h)
        }
        stack.push(i)

    }
    stack.pop()
    return maxi

}
let height=[2,1,5,6,2,3]
console.log(largestRectangleArea(height))