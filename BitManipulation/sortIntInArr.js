function sortBits(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(srt=>srt==='1').length;
        let B=b.toString(2).split('').filter(srt=>srt==='1').length;
        return A-B || a-B
    })
}
function main(){
    let arr=[0,1,2,3,4,5,6,7,8]
    console.log(sortBits(arr))

}
main()