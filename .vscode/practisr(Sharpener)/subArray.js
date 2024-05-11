function subArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let str=''
            for(let k=i;k<=j;k++){
                str+=arr[k]
            }
            console.log(str)
        }
    }
}
let arr=[1,2,3,4,5]
subArray(arr)