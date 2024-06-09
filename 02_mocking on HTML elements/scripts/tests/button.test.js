// Assign the buttonClick function to a constant
const buttonClick = require("../button");

// Add Jest directive that runs before each test is run
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

// Add a top parent describe block that contains the test and what we expect
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("YOU Clicked");
    });
});