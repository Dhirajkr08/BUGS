function maxStockProfit(prices){
    let minimum=Infinity;
    let profit=0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minimum){
            minimum=prices[i]
        }
        else if(prices[i]-minimum>profit){
            profit=prices[i]-minimum
        }
    }
    return profit
}
function main(){
    let prices=[7,1,5,3,6,4]
    console.log(maxStockProfit(prices))
}
main()