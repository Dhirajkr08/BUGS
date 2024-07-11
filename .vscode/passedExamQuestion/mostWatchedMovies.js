function mostWathedMovies(n,k,movies){
    movies.sort((a,b)=>a[0]-b[0])
    let mini=[]
    for(let i=0;i<n;i++){
        let first=movies[i][0]
        let last=movies[i][1]
        if(mini.length<k){
            mini.push(last)
        }
        else{
            if(first>=mini[0]){
                mini[0]=last
            }
        }
        mini.sort((a,b)=>a-b)
    }
    return mini.length
}
let n=5
let k=2
let movies=[[1,5],[8,10],[3,6],[2,5],[6,9]]
console.log(mostWathedMovies(n,k,movies))