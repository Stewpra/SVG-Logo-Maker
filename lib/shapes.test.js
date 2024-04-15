const Shapes = require('./shapes.js');
const shapeColor = 'blue';
const textColor = 'white';
const text = 'WBS';

describe('Shapes rendering', () => {
  // Testing the render() function in the generic Shapes class
  it('should render a generic shape with specified color and text', () => {
    const shapes = new Shapes.Shapes(shapeColor);
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shapes.render(text, textColor)).toBe(expectedSvg);
  });

  // Testing the render() function in the Triangle shape class
  it('should render a triangle with specified color and text', () => {
    const shapes = new Shapes.Triangle(shapeColor);
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,0 0,200 300,200" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shapes.render(text, textColor)).toBe(expectedSvg);
  });

  // Testing the render() function in the Square shape class
  it('should render a square with specified color and text', () => {
    const shapes = new Shapes.Square(shapeColor);
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" y="0" width="200" height="200" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shapes.render(text, textColor)).toBe(expectedSvg);
  });

  // Testing the render() function in the Circle shape class
  it('should render a circle with specified color and text', () => {
    const shapes = new Shapes.Circle(shapeColor);
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="100" fill="${shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    expect(shapes.render(text, textColor)).toBe(expectedSvg);
  });
});
