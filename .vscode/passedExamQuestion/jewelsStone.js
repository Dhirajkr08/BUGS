function jewelsStone(jewels,stones){
    let count=0
    for(let i of jewels){
        for(let j of stones){
            if(j===i){
                count++
            }
        }
    }
    return count
}
let jewels="z"
let stones="ZZ"
console.log(jewelsStone(jewels,stones))