class User{
    static count=0
    constructor (userId,password,email){
        this.userId=userId
        this.password=password
        this.email=email
    }
    printNumber(){
        console.log(User.count)
    }
}
class Memeber extends User{
    constructor(userId,password,email,membership){
        super(userId,password,email)
        this.membership=membership
        this.membershipValidTillDate=new Date('2023-03-03')
    }
    renewMemberShip(){
        if(this.membership==='MONTHLYPACKAGE'){
            this.membershipValidTillDate=new Date('2023-04-03')

        }else if(this.membership==='YEARLYPACKAGE'){
            this.membershipValidTillDate=new Date('2024-03-03')

        }
    }
}
const u1=new Memeber('drj','12@acd','drsingh@gmail.com','MONTHLYPACKAGE')
u1.renewMemberShip()
console.log(`${u1.userId} is subscribed to ${u1.membership} uptill ${u1.membershipValidTillDate}`)

