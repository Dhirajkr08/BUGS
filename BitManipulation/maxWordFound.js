function maxWordFound(sentences){
    let maxi=0
    for(let i of sentences){
        let words=i.split(' ')
        maxi=Math.max(maxi,words.length)
    }
    return maxi

}
function main(){
    sentences=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    console.log(maxWordFound(sentences))
}
main()