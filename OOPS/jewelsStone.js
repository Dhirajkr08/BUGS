function jewelsStone(jewel,stone){
    let count=0
    for(let i=0;i<jewel.length;i++){
        for(let j=0;j<stone.length;j++){
            if(jewel[i]===stone[j]){
                count++
            }
        }
    }return count
}
function main(){
    let jewel='aA'
    let stone='aAAbbbb'
    console.log(jewelsStone(jewel,stone))
}
main()