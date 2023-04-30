// shape class
// shapes: triangle, circle, square.
class Shape {
    constructor( color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape{
    constructor(circle, color, text, textColor){
        super(color, text, textColor)
        this.circle=circle;
    }
}
class Triangle extends Shape{
    constructor(triangle, color, text, textColor){
        super(color, text, textColor)
        this.triangle=triangle;
    }
}
class Square extends Shape{
    constructor(square, color, text, textColor){
        super(color, text, textColor)
        this.square=square;
    }
}

const shapeCircle=new Circle();
const shapeTriangle=new Triangle();
const shapeSquare=new Square();

    // exporting and importing modules
    module.exports=;
