class Count_Objects{
    static count=0
    constructor(){
        Count_Objects.count++
    }
    static getCount(){
        return Count_Objects.count
    }
    

}
const o1= new Count_Objects()
const o2= new Count_Objects()
const o3= new Count_Objects()
console.log(Count_Objects.getCount())
