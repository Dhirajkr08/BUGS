// function y(){
//     setTimeout(()=>console.log("a"),1000)
//     console.log('DOne Coding')
// }
// y() //output will be Done Coding & a

// function y(){
//     setTimeout(()=>console.log("a"),0)
//     console.log('Done Coding')
// }
// y() //output will be  Done coding & a

// function y(){
//     for(var i=1;i<6;i++){
//     setTimeout(()=>console.log(i),i*1000)
// }
// console.log('Done Coding')
// }
// y() output will be Done COding 6,6,6,6,6

// function y(){
//     for(let i=1;i<6;i++){
//         setTimeout(()=>console.log(i),i*1000)
//     }
//     console.log('DOne Coding')
// }
// y() ouptut will be done Coding 1,2,3,4,5

const name=(arr)=>{
    let j=0
    return()=>{
        if(j<arr.length){
            console.log('Hello'+arr[j])
            j++
        }else{
            console.log('ENd of Array')
        }
    }
}
let fun=name(['Ram','Shyam'])
fun()
fun()
