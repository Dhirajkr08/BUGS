class user{
    static count=0
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
        user.count++
    }
    printNumberofUser(){
        console.log("current number of users =",user.count)
    }

}
class MemberExtendUser{
    constructor(username,email,password){
        super(username,email,password)
        this.MembershipValidtillDate=new Date(2023,2,3)
        this.package=membershipPackageName
    }
}