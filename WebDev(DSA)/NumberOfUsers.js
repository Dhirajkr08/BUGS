class User{
    static count=0
    constructor(username,password){
        this.username=username
        this.password=password
        User.count++
    }
    printNumberOfUser(){
        console.log(User.count)
    }


}
let u1=new User('ak46',1234)
let u2=new User('bnyMadrid',789)
u2.printNumberOfUser()