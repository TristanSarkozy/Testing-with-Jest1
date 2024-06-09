// Assigh the addition function to a constant
const addition = require("../calc");

// Add a top-level parent describe of calculator
describe("Calculator", () => {
    // Add a second-level describe of addition, subtraction, multiply, division
    describe("Addition", () => {
        // Add a test method
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtraction", () => {

    });
    describe("Multiply", () => {

    });
    describe("Division", () => {        

    });
})