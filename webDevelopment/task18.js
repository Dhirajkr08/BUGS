class user{
    static count=0
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
        user.count++
    }
    static printNumberOfUsers(){
        console.log(user.count)
    }
}
const user1=new user('Dhiraj','Singh')
const user2=new user('Bunny','singh')

user.printNumberOfUsers()