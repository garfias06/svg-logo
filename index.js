// All my questions
// !Import node packages and js files

const inquirer = require('inquirer');
const fs = require('fs');

const createSvg = require('./lib/shapes')

// svg size:300x200 px

// prompt:
// !up to three characters per shape (letters on logo)
// !text color: color keyword or hexadecimal number
// !LIST of shapes: circle, triangle, square
// !shape color(shape background): keyword or hexadecimal number

const shapeSpecs = [
    {
        type: 'list',
        message: 'Select shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'Enter a background color:',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'Text, enter up to three characters:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter text color:',
        name: 'textColor',
    },
];

// !./examples/logo.svg
// when done with questions:
// create SVG FILE and name it: logo.svg
// console.log:Generated logo.svg
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Generated logo.svg'))
}

function createNewFile() {
    inquirer.prompt(shapeSpecs)
        .then((data) => {
            console.log(data)
            writeToFile('./examples/logo.svg', createSvg(data))
        })
}

createNewFile();

// importing and exporting modules
