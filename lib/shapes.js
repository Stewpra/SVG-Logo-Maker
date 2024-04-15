class Shapes {
  constructor(color) {
    this.color = color;
  }

  render(text, textColor, svgShape) {
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgShape}${svgText}</svg>`;
  }
}

class Square extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgSquare = `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    return super.render(text, textColor, svgSquare);
  }
}

class Circle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgCircle = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    return super.render(text, textColor, svgCircle);
  }
}

class Triangle extends Shapes {
  constructor(color) {
    super(color);
  }

  render(text, textColor) {
    const svgTriangle = `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`;
    return super.render(text, textColor, svgTriangle);
  }
}

function generateSVG(text, textColor, shape, shapeColor) {
  let svgShape;

  switch (shape) {
    case 'Square':
      svgShape = new Square(shapeColor).render(text, textColor);
      break;
    case 'Circle':
      svgShape = new Circle(shapeColor).render(text, textColor);
      break;
    case 'Triangle':
      svgShape = new Triangle(shapeColor).render(text, textColor);
      break;
    default:
      throw new Error('Invalid shape provided');
  }

  return svgShape;
}

module.exports = { Shapes, Square, Circle, Triangle, generateSVG };
