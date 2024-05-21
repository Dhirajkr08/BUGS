function StockSpanner(price){
    let stack=[]
    let span=1
    while(stack.length>0 && stack[stack.length-1].price<=price){
        span+=stack.pop().span
    }
    stack.push({price,span})
    return span

}
let price=["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
console.log(StockSpanner(price))
