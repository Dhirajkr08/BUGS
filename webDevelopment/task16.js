function person(firstName,lastName,sex,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.sex=sex;
    this.age=age;
    this.printFullname=()=>{
        console.log(this.firstName,this.lastName)
    }
}
const person1=new person("yash","prasad",20,"M")
const person2=new person("Vaibhav","prasad",10,"M")

function isEligible(person){
    return person.age>=18;
}

console.log(person1.firstName , (isEligible(person1) ? "ELIGIBLE" : "NOT ELIGIBLE"  ));
console.log(person2.firstName, (isEligible(person2) ? "ELIGIBLE" : "NOT ELIGIBLE"));

//person1.printFullname();
//person2.printFullname()


