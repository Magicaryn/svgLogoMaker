
class Shape {
    constructor(color) {
        this.color = color || ""; // Default color to empty string
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render method must be implemented by subclasses");
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="140" r="100" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="13" y="60" width="175" height="175" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,300 100,0 200,300" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };
