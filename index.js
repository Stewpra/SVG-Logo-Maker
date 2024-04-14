const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

// validate text

// validate color

const questions = [
  {
    type: 'input',
    name: 'text',
    message:
      'Please enter the text that you would like to display, up to 3 characters:',
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'Please enter a color for this text:',
  },
  {
    type: 'list',
    name: 'shapes',
    message: 'Please choose from one of the following shapes:',
    choices: ['Square', 'Circle', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shape_color',
    message: 'Please enter a color for this shape:',
  },
];

// generate logo
function prompt() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { text, text_color, shapes, shape_color } = answers;
      const svgContent = makeShapes.generateSVG(
        text,
        text_color,
        shapes,
        shape_color
      );

      fs.writeFile('./demo/logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo');
      });
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

// call prompt
