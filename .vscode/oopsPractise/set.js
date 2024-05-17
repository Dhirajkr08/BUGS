const mySet=new Set();
mySet.add(1)
mySet.add(57)
mySet.add({
    name:'John',
    age:25
})
mySet.add('DRJ')
mySet.add(68.98)
//size of set
console.log(mySet.size)
console.log(mySet)

//check the specific value
console.log(mySet.has(32))

//delete
mySet.delete(1)
   
console.log(mySet)

//loop 
for(let item of mySet){
    console.log(item)
}

//convert set in array
const myArray=Array.from(mySet)
console.log(myArray)
