class count_object{
    static count=0
    constructor(name,number){
        this.name=name
        this.number=number
        count_object.count++
    }
}
c1=new count_object('DH',23)
c2=new count_object('sj',12)
console.log(count_object.count)