const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo.js')

class CLI {

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
            .then((response) => {
                const fileName = `logo_${Date.now()}.svg`           

                fs.writeFile(`./examples/${fileName}`, generateLogo({...response}), (err) => err ? console.log(err) : console.log('Successfully created personalized logo!'))

            });
    }
}


module.exports = CLI;
