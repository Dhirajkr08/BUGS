class Triangle{
    constructor(side1,side2,side3){
        this.side1=side1
        this.side2=side2
        this.side3=side3
    }
    calculateArea(){
        console.log(this.side1*this.side2*this.side3)

    }
    calculatePerimeter(){
        console.log(this.side1+this.side2+this.side3)
    }
}
const t1=new Triangle(2,8,4)
t1.calculateArea()
t1.calculatePerimeter()