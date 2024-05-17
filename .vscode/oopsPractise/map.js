var myMap=new Map()
myMap.set("name", "john")
myMap.set(0, "Delhi")
myMap.set(1,'Patna')
//console.log(myMap)
// for(let [key,value] of myMap){
//     console.log(`Key: ${key} Value: ${value}`)
// }
// for(let key of myMap.keys()){
//     console.log(key)
// }
// for(let value of myMap.values()){
//     console.log(value)
// }

myMap.forEach((values)=>console.log(values))
//you can't get key specially in this you have to use key and value both
myMap.forEach((v,k)=>console.log(`values: ${v}, Kaeys: ${k}`))

//delete
myMap.delete(0)
console.log(myMap)
