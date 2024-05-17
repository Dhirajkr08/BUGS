class Shape{
    printShape(){
        console.log("This is Shape")
    }

}
class Rectangle extends Shape{
    print(){
        console.log('This is rectangle')
    }
}
class Circle extends Shape{
    print(){
        console.log('This is Circle')
    }
}
class Square extends Rectangle{
    printSquare(){
        console.log('Square is Rectangle')
    }
}
const s1=new Square()
s1.printShape()
s1.print()
s1.printSquare()