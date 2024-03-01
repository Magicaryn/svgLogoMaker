
const { Circle, Square, Triangle } = require('./shapes.js');

function generateLogo(response) {
    console.log(response, "generateLogo");

    let shapeElement;
    switch (response.shape) {
        case 'Circle':
            shapeElement = new Circle(response.shapeColor);
            break;
        case 'Triangle':
            shapeElement = new Triangle(response.shapeColor);
            break;
        case 'Square':
            shapeElement = new Square(response.shapeColor);
            break;
        default:
            throw new Error(`Unsupported shape: ${response.shape}`);
    }

    const shapeMarkup = shapeElement.render();
    const textMarkup = `<text x="40" y="170" fill="${response.fontColor}" font-size="75">${response.name}</text>`;

    const svgMarkup = `
        <svg width="200" height="300">
            ${shapeMarkup}
            ${textMarkup}
        </svg>
    `;

    if (response.name.length < 3) {
        console.log("Name must be at least three characters long.");
    }

    return svgMarkup;
}

module.exports = generateLogo;
