
class Student{
    name;
    roll_no;
    printAttributes(){
        console.log(`Name: ${this.name}, roll_no:${this.roll_no}`)

    }
}
s1=new Student()
s1.name='Dhiraj'
s1.roll_no=7
s1.printAttributes()
