function sortByNearest5(arr){
    return arr.sort(function(a,b){
        const A=Math.abs(a-5)
        const B=Math.abs(b-5)
        return A-B
    })
}
function main(){
    let=n=parseInt(prompt())
    let arr=[]
    for(let i=0;i<=n;i++){
        arr.push(parseInt(prompt()))
    console.log(sortByNearest5(arr))

    }
}
main()