function transPoseMatrix(rows,cols,matrix){
    let arr=[]
    for(let i=0;i<cols;i++){
        let newArr=[]
        for(let j=0;j<rows;j++){
            newArr.push(matrix[j][i])
        }
        arr.push(newArr)
    }
    return arr
}
let rows=3
let cols=3
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(transPoseMatrix(rows,cols,matrix))