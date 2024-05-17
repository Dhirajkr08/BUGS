class PARENT{
    print(){
        console.log('This is Parent Class')
    }

}
class CHILD extends PARENT{
    print(){
        console.log('This is a child class')
        super.print()
    }
}
const p=new PARENT()
p.print()
const c=new CHILD()
c.print()
