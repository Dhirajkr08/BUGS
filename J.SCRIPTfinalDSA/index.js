// function y(){
//     setTimeout(()=>console.log('a'),1000)
//     console.log('Done coding')
// }
// y()


// function y(){
//     setTimeout(()=>console.log("a"),0)
//     console.log('Done Coding')
// }
// y()

// function y(){
//     for(var i=1;i<6;i++){
//         setTimeout(()=>console.log(i),i*1000)
//     }
//     console.log('Done Coding')
// }
// y()

// function y(){
//     for(let i=1;i<6;i++){
//         setTimeout(()=>console.log(i),i*1000)
//     }
//     console.log('Done Coding')
// }
// y()


//const name=(arr)=>{
//     let index=0
//     return()=>{
//         if(index<arr.length){
//             console.log("Hello",arr[index])
//             index++
//         }
//     }

// }

// let fun=name(['Ram','Shyam'])
// fun()
// fun()

// const name=(arr)=>{
//     let i=0
//     return ()=>{
//         if(i<arr.length){
//             console.log('Hello',arr[i])
//             i++
//         }
//     }

// }
// let fun=name(["Ram","Shyam"])
// fun()
// fun()


// function fun1(){
//     console.log(a
// }
// function fun2(){
//     console.log(b)
// }
// fun2()
// fun1()

// function fun1(){
//     console.log(a
// }
// function fun2(){
//     console.log(b)
// }
// fun2()
// fun1()

// what is the thing not part of js?
// Ans: fetch,localStorage,setTimeout,document.getElementById() these are not part of js.


// 4)If so many things are not a part of javacript then how do we get to access them in browser? Write in your own words.?
// these are built in apis like fetch that will help you to retrive the data using this function 
// setTimeout will help you to work according to time without any interve it smoothly let run the remaining to and then comes as per reuqirement.
// localStorage is web inspection api which help us to retrive the data from the seasssion or store the session data.
// and document.getElementById() help us to access the html id for working on their function or modification.



// Q:If window object would not have been a global object which of the following statements would not work?
// ans: if window object will not available it will be tough to handle document 
// object model it is also help to access global variable directly even it can 
// be use in mapping location.it also help in direct access of alert and setTimeout .

// function fun1(){
//     console.log('a')
// }
// function fun2(){
//     console.log(b)
// }
// setTimeout(fun2,1000)
// fun1()


function fun1(){

    console.log("a")
    
    }
    
    function fun2(){
    
    console.log(b)
    
    }
    
    
    
    document.getElementById("some button").addEventListener("click", fun1)
    
    fun2();
