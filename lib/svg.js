class SVG {
    constructor() {
        this.userText = ''
        this.userShape = ''
    }

    renderSVG() {
        return `   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.userShape}${this.userText}</svg> `
    }

    setUserShape(shape) {
        this.userShape = shape.render()
    }

    grabText(textColor, text) {
        if(text.length > 3){
            throw new Error('ERROR  ERROR')
        }

        this.userText =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
      }

}

module.exports =  SVG