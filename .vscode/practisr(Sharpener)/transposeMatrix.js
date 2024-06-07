function transposeMatrix(row,cols,matrix){
    let arr=[]
    for(let i=0;i<row;i++){
        let jrr=[]
        for(let j=0;j<cols;j++){
            jrr.push(matrix[j][i])
        }
        arr.push(jrr)
    }
    return arr
}
let rows=3
let cols=3
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
console.log(transposeMatrix(rows,cols,matrix))