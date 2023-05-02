// shape class
// shapes: triangle, circle, square.
// need an if statement
// template literals


// class Shape {
//     constructor(color, text, textColor) {
//         this.color = color;
//         this.text = text;
//         this.textColor = textColor;
//     }
// }
// class Circle extends Shape {
//     constructor(circle, color, text, textColor) {
//         super(color, text, textColor)
//         this.circle = circle;
//     }
// }
// class Triangle extends Shape {
//     constructor(triangle, color, text, textColor) {
//         super(color, text, textColor)
//         this.triangle = triangle;
//     }
// }
// class Square extends Shape {
//     constructor(square, color, text, textColor) {
//         super(color, text, textColor)
//         this.square = square;
//     }
// }

// const shapeCircle=new Circle('circle', `${data.shapeColor}`, `${data.text}`, `${data.textColor}`);
// const shapeTriangle = new Triangle('triangle', `${data.shapeColor}`, `${data.text}`, `${data.textColor}`);
// const shapeSquare = new Square('square', `${data.shapeColor}`, `${data.text}`, `${data.textColor}`);

// !render() method test 

class Shape {
  constructor() {
    this.color = '';
  }
  setColor(shapeColor) {
    this.color = shapeColor

  }
};


class Circle extends Shape {
  render() {
    return (
      `        <circle cx="150" cy="100" r="80" fill=${this.color} />`
    )
  }
};
class Triangle extends Shape {
  render() {
    return (
      `        <polygon points="50 15, 100 100, 0 100" fill=${this.color} />`
    )
  }
};
class Square extends Shape {
  render() {
    return (
      `          <rect x="10" y="10" width="200" height="200" fill=${this.color} />`
    )
  }
};

// const circle =  Circle.render();
// const triangle =  Triangle.render();
// const square =  Square.render();

function selectShape(shape) {


  if (shape === 'circle') {
    return new Circle
  }
  if (shape === 'triangle') {
    return new Triangle
  }
  if (shape === 'square') {
    return new Square
  }

}
function grabText(text) {
  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`
}



function createSvg(data) {

  `   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${selectShape(data.shape)}

    ${grabText(data.text)}

</svg> `

}


// exporting and importing modules
module.exports = createSvg;




/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
