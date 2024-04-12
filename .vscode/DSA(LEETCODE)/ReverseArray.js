/*
function RevereseArray(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]<arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp

            }
        }

    }
    return arr
}
function main(){
    let arr=[1,2,3,4,5]
    console.log(RevereseArray(arr))
}
main()
*/
/*
function RevArray(arr){
    return arr.slice().reverse();
}
function main(){
    let arr=[1,2,3,4,5]
    console.log(RevArray(arr))
}
main()
*/
/*
function RevArray(arr){
    return arr.slice().reverse();

}
function main(){
    let arr=[1,2,3,4]
    console.log(RevArray(arr))
}
main()*/

function revArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]<arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        
    }
    return arr
}    
function main(){
    let arr=[1,2,3,4,5]
    console.log(revArray(arr))
}
main()