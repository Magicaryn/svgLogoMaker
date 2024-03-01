class SVG {
    constructor (){
        this.textEl = ""
        this.shapeEl = ""
    }
    render() {
        return `<svg height = "300" width = "200">${this.shapeEl}${this.textEl}</svg>`
    }
    setTextEL(text, color) {
        this.textEl = `<text x="100" y="100" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(Shape) {
        this.shapeEl = Shape.render()
    }

}
module.exports = SVG