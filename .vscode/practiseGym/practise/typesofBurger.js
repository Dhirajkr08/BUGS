function typesOfBurger(X,Y,N,R){
    for(let normal=0;normal<=N;normal++){
        let premium=N-normal
        if(normal*X+premium*Y===R){
            return [normal,premium]
        }
    }
    return [-1]
}
let x=2
let y=10,n=4,r=12
console.log(typesOfBurger(x,y,n,r))