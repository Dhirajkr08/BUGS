function maxRow(arr,row,column){
    let maxi=-1
    let total=0
    for(let i=0;i<row;i++){
        let count=0
        for(let j=0;j<column;j++){
            if(arr[i][j]===1){
                count++
            }
        }
        if(count>total){
            total=count
            maxi=i
        }
        
    }return maxi

}
function main(){
    let N=4
    let M=4
    let arr=[[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]]
    console.log(maxRow(arr,N,M))
}
main()