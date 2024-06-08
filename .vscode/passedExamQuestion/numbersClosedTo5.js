//sort array which by close to 5
function sortArrayforFive(arr){
    arr.sort((a,b)=>{
        const diffA=Math.abs(a-5)
        const diffB=Math.abs(b-5)
        if(diffA===diffB){
            return a-b
        }
        return diffA-diffB
    })
    return arr
}
let arr=[1,3,5,7,9]
console.log(sortArrayforFive(arr))