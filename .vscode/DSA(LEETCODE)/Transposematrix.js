function TransposeMatrix(matrix){
    let m=matrix.length;
    let n=matrix[0].length;
    let ans=[]
    for(let i=0;i<n;i++){
        ans[i]=[]
        for(let j=0;j<m;j++){
            ans[i].push(matrix[j][i])
        }
    }
    return ans

}
function main(){
    let matrix=[[1,2,3],[4,5,6],[7,8,9]]
    console.log(TransposeMatrix(matrix))
}
main()