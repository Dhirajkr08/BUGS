function maxCandies(candies,extra){
    let maxi=Math.max(...candies)
    let res=[]
    for(let i=0;i<candies.length;i++){
        res.push(candies[i]+extra>=maxi)

    }return res
}
function main(){
    let candies=[2,3,5,1,3]
    let extra=3
    console.log(maxCandies(candies,extra))
}main()