//number to binary and then count '1'

/*
function HaminghWeight(n){
    let binary=n.toString(2)
    let count=0
    for(let i=0;i<binary.length;i++){
        if(binary[i]==='1'){
            count++
        }
    }
    return count
}
function main(){
    let n=1011
    console.log(HaminghWeight(n))
}
main()
*/

//binary to count '1s'
/*
function HaminghWeight(n){
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            count++
        }
    }
    return count
}
function main(){
    let n='1011'
    console.log(HaminghWeight(n))

}
main()
*/

/*
function binAltBit(n){
    let binary=n.toString(2)
    for(let i =0;i<binary.length;i++){
        if(binary[i]===binary[i+1]){
            return false
        }
    }
    return true
}
function main(){
    let n=11
    console.log(binAltBit(n))
}
main()
*/
/*
function Hex(num){
    if(num===0) return '0'
    if(num<0) num+=0xFFFFFFFF+1
    let hexa=num.toString(16)
    return hexa
}
function main(){
    let num=26
    console.log(Hex(num))
}
main()
*/

/*
function sortArray1s(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(cts=>cts=='1').length;
        let B=b.toString(2).split('').filter(cts=>cts=='1').length;
        return A-B || a-b
    })
}
function main(){
    let arr=[0,1,2,3,4,5,6,7,8]
    console.log(sortArray1s(arr))
}
main()
*/

/*
function sortBitsArray(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(cdn=>cdn==='1').length;
        let B=b.toString(2).split('').filter(cdn=>cdn==='1').length;
        return A-B || a-b 
    })

}
function main(){
    let arr=[0,1,2,3,4,5,6,7,8]
    console.log(sortBitsArray(arr))
}
main()
*/

/*
function divideTwoInt(dividend,divisor){
    let divide=parseInt(dividend/divisor)
    if(divide>2147483647){
        return 2147483647

    }
    else if(divide<-2147483648){
        return -2147483648

    }
    return divide
}
function main(){
    let d=10
    let m=3
    console.log(divideTwoInt(d,m))
}
main()
*/
function maxWordsInSentences(sentence){
    let maxi=0
    for(let i of sentence){
        let words=i.split(' ')
        maxi=Math.max(words.length,maxi)
    }
    return maxi
}
function main(){
    let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    console.log(maxWordsInSentences(sentences))
}
main()