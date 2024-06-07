
function sortArr(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter((sh)=>sh==='1').length;
        let B=b.toString(2).split('').filter((sh)=>sh==='1').length;
        return A-B || a-b 
    })
}
function main(){
    let arr=[1024,512,256,128,64,32,16,8,4,2,1]
    console.log(sortArr(arr))
}
main()
