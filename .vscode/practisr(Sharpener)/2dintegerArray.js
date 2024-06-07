function TwoDIntegerAray(rows,col,matrix){
    let arr=[]
    for(let i=0;i<col;i++){
        let jrr=[]
        for(let j=0;j<rows;j++){
            jrr.push(matrix[j][i])
        }
        arr.push(jrr)

    }
    return arr
}
let rows=3
let col=3
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(TwoDIntegerAray(rows,col,matrix))