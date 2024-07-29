function sentenceLength(sentence){
    let maxi=0
    for(let i of sentence){
        let word=i.split(' ').length
        maxi=Math.max(word,maxi)
    }
    return maxi
}
let sentence=["alice and bob loves leetcode","I think so too",
    "this is great thanks very much"]
console.log(sentenceLength(sentence))    