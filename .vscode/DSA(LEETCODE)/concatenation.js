/*

function getconcatenation(n){
    return n.concat(n)
}
function main(){
    n=[1,2,1]
    console.log(getconcatenation(n))

}
main()
*/

//2nd method

function getConcatenation(nums){
    let len=nums.length
    for(let i=0;i<len;i++){
        nums.push(nums[i])
    }
    return nums
}
function main(){
    nums=[2,3,4]
    console.log(getConcatenation(nums))
}
main()