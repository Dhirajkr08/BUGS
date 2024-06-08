function findVowel(str){
    let vowel= new Set(['a','e','i','o','u','A','E','I','O','U'])
    let count=0
    for(let i of str){
        if(vowel.has(i)){
            count++
        }
    }
    return count
}
let str="HELLO WORLD"
console.log(findVowel(str))