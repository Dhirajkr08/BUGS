class Triangle{
    constructor(side1,side2,side3){
        this.side1=side1
        this.side2=side2
        this.side3=side3
    }
    claculateArea(){
        return (this.side1*this.side2*this.side3)
    }
    calculatePerimeter(){
        return(this.side1+this.side2+this.side3)
    }
}
const T=new Triangle(2,3,6)
console.log(T.claculateArea())
console.log(T.calculatePerimeter())