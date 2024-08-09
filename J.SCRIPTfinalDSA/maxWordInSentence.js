function maxWord(sentences){
    let maxi=0
    for(let i of sentences){
        let word=i.split(' ').length
        maxi=Math.max(maxi,word)
    }
    return maxi
}
let sentences=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maxWord(sentences))