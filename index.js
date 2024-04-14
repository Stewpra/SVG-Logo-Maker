const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const { validate } = require('@babel/types');

// validate text
function textLength(input) {
  if (input.length > 3) {
    return 'Please enter up to 3 characters.';
  }
  return true;
}

// validate color
function color(input) {
  const hex = /^#[0-9A-F]{6}$/i;
  const colorNames = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Black',
    'White',
    'Brown',
    'Gray',
    'Silver',
    'Gold',
    'Cyan',
    'Magenta',
    'Turquoise',
    'Indigo',
    'Maroon',
    'Olive',
    'Teal',
    'Navy',
    'Lavender',
    'Peach',
    'Coral',
    'Mint',
    'Beige',
    'Ivory',
    'Charcoal',
    'Slate',
    'Ruby',
    'Emerald',
    'Sapphire',
    'Amethyst',
    'Topaz',
    'Citrine',
    'Amber',
    'Aquamarine',
    'Peridot',
    'Garnet',
    'Onyx',
    'Pearl',
    'Opal',
    'Quartz',
    'Jade',
    'Platinum',
    'Bronze',
    'Copper',
    'Brass',
    'Steel',
    'Titanium',
    'Lilac',
    'Mauve',
    'Azure',
    'Crimson',
    'Scarlet',
    'Violet',
    'Lime',
    'Magenta',
    'Fuchsia',
    'Turquoise',
    'Aquamarine',
    'Peach',
    'Lemon',
    'Lavender',
    'Cyan',
    'Teal',
    'Mint',
    'Apricot',
    'Burgundy',
    'Slate',
    'Charcoal',
    'Olive',
    'Saffron',
    'Moss',
    'Tangerine',
    'Plum',
    'Cobalt',
    'Cerulean',
    'Coral',
    'Salmon',
    'Rust',
    'Magenta',
    'Marigold',
    'Periwinkle',
    'Crimson',
    'Lilac',
    'Mauve',
    'Ochre',
    'Peach',
    'Sapphire',
    'Ruby',
    'Emerald',
    'Amethyst',
    'Topaz',
    'Citrine',
  ];
  if (hex.test(input)) {
    return true;
  }
  return colorNames.includes(input.toLowerCase());
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message:
      'Please enter the text that you would like to display, up to 3 characters:',
    validate: textLength,
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'Please enter a color for this text:',
    validate: color,
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
    validate: color,
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
