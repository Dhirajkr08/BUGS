function loanSanction(){
    return new Promise((resolve,reject)=>{
        const numb=Math.random()
        if(numb>=0.5){
            resolve('Loan sanctioned')
        }else{
            reject('Loan not sanctioned')
        }
    },3000)
}
loanSanction()
.then((res)=>console.log(res))
.catch((err)=>console.error(err))