const SVGDOM = require('svgdom');
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const CLI = require('./cli.js')

CLI.run().then(userChoices => {
    const window = new SVGDOM.Window();
    registerWindow(window, window.document);

    const canvas = SVG().addTo(window.document.documentElement).size(300, 200);

    const { name, fontColor, shape, shapeColor } = userChoices;

    let shapeElement;
    switch (shape.toLowercase()) {
        case 'circle':
            shapeElement = canvas.circle(100).move(50, 50);
            break;

        case 'triangle':
            shapeElement = canvas.polygon('50,0 0,100 100,100').move(50, 50);
            break;

        case 'square':
        default:
            shapeElement = canvas.rect(100, 100).move(50, 50);

    }

    shapeElement.fill(shapeColor);

    canvas.text(name).move(10, 180).fill(fontColor);

    const svgMarkup = canvas.svg();
    console.log(svgMarkup);
}).catch(error => {
    console.error('An error occurred:', error);
});




// canvas.${shape}.fill${shapeColor}

// canvas.text(${name}).fontColor${fontColor}


