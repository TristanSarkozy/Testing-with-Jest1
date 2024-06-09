// Assigh the addition function to a constant
const addition = require("../calc");

// Add a top-level parent describe of calculator
describe("Calculator", () => {
    // Add a second-level describe of addition, subtraction, multiply, division
    describe("Addition", () => {
        // Add a test method
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        // Add test code to return a value other than 42
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction", () => {

    });
    describe("Multiply", () => {

    });
    describe("Division", () => {        

    });
})