function repeatAndMissing(A){
    A.sort((a,b)=>a-b)
    let repeat=0
    let missing=0
    let n=A.length;
    for(let i=0;i<n;i++){
        if(A[i]===A[i-1]){
            repeat=A[i]
        }
        else if(A[i]!==A[i-1]+1){
            missing=A[i-1]+1
        }
    }
    if(A[0]!==1){
        missing=1
    }
    else if(A[n-1]!==n){
        missing=n
    }
    return [repeat,missing]
}
function main(){
    let A=[3,1,2,5,3]
    console.log(repeatAndMissing(A))
}
main()