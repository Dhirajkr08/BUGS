function maximumWords(sentences){
    let max=0
    for(let i=0;i<sentences.length;i++){
        let word=sentences[i].split(' ')
        if(word.length>max){
            max=word.length
        }
    }
    return max
}
const sentences=["please wait", "continue to fight", "continue to win"]
console.log(maximumWords(sentences))