const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG } = require('./lib/shapes.js');

function textLength(input) {
  return new Promise((resolve, reject) => {
    if (input.length > 3) {
      reject('Please enter up to 3 characters.');
    } else {
      resolve(true);
    }
  });
}

function color(input) {
  return new Promise((resolve, reject) => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
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

    if (hexRegex.test(input)) {
      resolve(true);
    } else if (
      colorNames.includes(
        input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
      )
    ) {
      resolve(true);
    } else {
      reject(
        'Invalid color. Please enter a valid hex color code (e.g., #RRGGBB or #RGB) or color name.'
      );
    }
  });
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

function prompt() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { text, text_color, shapes, shape_color } = answers;
      const svgContent = generateSVG(text, text_color, shapes, shape_color);

      fs.writeFile('./logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo');
      });
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

prompt();
