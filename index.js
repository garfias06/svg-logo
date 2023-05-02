// All my questions
// !Import node packages and js files

const inquirer = require('inquirer');
const fs = require('fs');

// Importing modules
const { Circle, Triangle, Square } = require('./lib/shapes')

const SVG = require('./lib/svg')

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



function createNewFile() {
    inquirer.prompt(shapeSpecs)
        .then((data) => {
            let chosenShape;
            switch (data.shape) {
                case 'circle':
                    chosenShape = new Circle()
                    break;
                case 'triangle':
                    chosenShape = new Triangle()
                    break;
                default:
                    chosenShape = new Square()
            }

            chosenShape.setColor(data.shapeColor)

            const newSvg = new SVG()

            newSvg.setUserShape(chosenShape)
            newSvg.grabText(data.textColor, data.text)

            fs.writeFile('./examples/logo.svg', newSvg.renderSVG(), (err, res) => {
                if (err) throw err
                console.log('SVG created!!')
            })
        })
}

createNewFile();


