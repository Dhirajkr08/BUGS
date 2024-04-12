/*
function minMaxSum(A,N){
    let maxi=A[0]
    let mini=A[0]
    for(let i=0; i< N;i++){
        if(A[i]>=maxi){
            maxi=A[i]

        }
        if(A[i]<=mini){
            mini=A[i]
        }
    }
    return maxi+mini

}
function main(){
    let N=4
    let Arr=[1,3,4,1]
    console.log(minMaxSum(Arr,N))
}
main()
*/

//2nd Method
function minMaxSum(A,N){
    let maxi=Math.max(...A)
    let mini=Math.min(...A)
    let sum=maxi+mini
    return sum
}
function main(){
    let N=4
    let Arr=[1,3,4,1]
    console.log(minMaxSum(Arr,N))
}
main()