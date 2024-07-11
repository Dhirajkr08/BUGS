function findScore(marks,length){
    if(marks<=50){
        return 'D'
    }
    else if(marks>50&&marks<60){
        return 'C'
    }
    else if(marks>=60 && marks<=75){
        return 'B'
    }
    else{
        if(marks>75){
            return 'A'
        }
    }
}
let marks=45
console.log(findScore(marks))
