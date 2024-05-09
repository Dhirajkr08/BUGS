function LoanSanctioned(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let loan=Math.random()>0.5
            if(loan){
                resolve('Loan Sanctioned')
            }else{
                reject('Loan not Sanctioned')
            }
        },3000)
    })
}
LoanSanctioned()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})