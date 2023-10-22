function printObject(arr){
    const person={
        age:26,
        firstName:"Yash",
        lastName:"Prasad",
        hobbies:['music','movies','sports'],
        address:{
            street:'50 main street',
            city:"BLR",
            state:'karnataka'
        }
    }
    console.log("person's 2nd hobby =",person[hobbies][1])
    console.log("person's state =",person['address']['state'])

    age,city=person['age'],person['address']['city']
    console.log(age)
    console.log(city)
}
function main(){
    let s="";
    var arr=[];
    while(true){
        try{
            const n=prompt();
            if (n===null){
                break
            }
            s+=n
        }catch(e){
            break
        }
    }
    printObject(s);
}  
main()  