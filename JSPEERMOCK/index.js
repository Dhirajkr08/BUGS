// function y(){
//     setTimeout(()=>{
//         console.log("a")
//     },2000)
//     console.log('Done Coding')
// }
// y()

// function y(){
//     setTimeout(()=>console.log("a"),1000)
//     console.log('Done Coding')
// }
// y()

// function y(){
//     setTimeout(()=>console.log('a'),0)
//     console.log('DOne COding')
// }
// y()

// function y(){
//     for(var i=1;i<6;i++){
//         setTimeout(()=>console.log(i)*1000)
//     }
//     console.log('Done Coding')
// }
// y()



//var is functional level scope so it will run throughout the schedule for five time share the same i so the value of i will be 6
//where let is block level socpe so it will iterate through the range;


// function y(){
//     for(let i=1;i<6;i++){
//         setTimeout(()=>console.log(i)*1000)
//     }
//     console.log('Done Coding')
// }
// y()


/*const name=(arr)=>{
    let i=0
    return ()=>{
        if(i<arr.length){
            console.log('Hello',arr[i])
            i++
        }
    }
}
let fun=name(["Ram","Shyam"])
fun()
fun()
*/

function fun1(){

    console.log("a")
    
    }
    
    function fun2(){
    
    console.log(b)
    
    }
    
    
    
    setTimeout(fun2, 1000)
    
    fun1()


