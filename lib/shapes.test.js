// three different tests
// one test per shape

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:

// ```js
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// ```

// Testing for Shapes
const { Circle, Triangle, Square } = require('./shapes');

    describe('Testing Circle class', () => {
        it('set the color of the shape to purple and return the circle element for th svg', () => {
        
            const circle = new Circle();
            circle.setColor('purple')
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');
        });
    });

    // describe('Testing Circle class', () => {
    //     it('set the color of the shape to purple and return the circle element for th svg', () => {
        
    //         const circle = new Triangle();
    //         circle.setColor('purple')
    //         expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');
    //     });
    // });

    // describe('Testing Circle class', () => {
    //     it('set the color of the shape to purple and return the circle element for th svg', () => {
        
    //         const circle = new Square();
    //         circle.setColor('purple')
    //         expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="purple" />');
    //     });
    // });
