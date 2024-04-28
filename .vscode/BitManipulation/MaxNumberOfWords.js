function maxWords(sentence){
    let maxi=0
    for(let i of sentence){
        let j=i.split(' ')
        maxi=Math.max(maxi,j.length)

    }return maxi

}
function main(){
    let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    console.log(maxWords(sentences))
}
main()