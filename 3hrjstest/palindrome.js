function palindrome(word){
    for(let i of word){
        if(word[i]===word[i-1]){
            return true
        }
    }
    return false
}
let word='level'
console.log(palindrome(word))