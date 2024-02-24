const inquirer = require('inquirer');
const { createDocument } = require('./doc');

class CLI {
    constructor() {
        this.text = [];
        this.background = [];
    }

run() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter name or initals that you would like in your logo(min 3 char):',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Please enter name of color or hex code that you would like your font:',
                name: 'fontColor',
            },
            {
                type: 'list',
                message: 'What background shape would you like?',
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                message: 'Please enter name of color or hex code that you would like your background shape:',
                name: 'shapeColor',
            }
        ])
        .then(({ name, fontColor, shape, shapeColor }) => {
            this.text = { name, fontColor }
            this.background = { shape, shapeColor}
        })
    }
}

module.exports = CLI;
