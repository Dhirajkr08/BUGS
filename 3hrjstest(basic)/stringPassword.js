function stringPassword(word){
    //for(let i=0;i<word.length;i++){
        if(word===word.toUpperCase()){
            return true
        }
        else if(word[0]===word[0].toUpperCase() && word.slice(1)===word.slice(1).toLowerCase()){
            return true
        }
        else if(word===word.toLowerCase()){
            return true
        }
        else{
            return false
        }
    //}
}
let string='FlgGeW'
console.log(stringPassword(string))