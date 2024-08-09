function palindrome(word){
    for(let i=0;i<word.length/2;i++){
        if(word[i]!==word[word.length-1-i]){
            return false
        }
    }
    return true
    
}
let word='papap'
console.log(palindrome(word))