class PARENT{
    print(){
        console.log('THis is a Parent class')
    }

}
class CHILD extends PARENT{
    print(){
        console.log('This is a child class')
    }

}

const p=new PARENT()
const c=new CHILD()
p.print()
c.print()
p.print()