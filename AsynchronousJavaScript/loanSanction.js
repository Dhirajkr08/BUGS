function loanSanctionPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let loan=Math.random()>0.5
            if(loan){
                resolve('Loan Sanctioned')
            }
            else{
                reject('Loan not sanctioned')
            }
        },3000)
    })
}
loanSanctionPromise()
.then((res)=>console.log(res))
.catch((err)=>console.error(err))