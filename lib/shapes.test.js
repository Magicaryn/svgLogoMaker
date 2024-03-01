
const generateLogo = require('./generateLogo');

test('Generate logo with valid input', () => {
    const response = { name: 'Logo', shape: 'Circle', shapeColor: 'blue', fontColor: 'white' };
    const fileName = generateLogo(response);
});

