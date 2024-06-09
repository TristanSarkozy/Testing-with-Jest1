/**
 * @jest-environment jsdom
 */
// Assign the buttonClick function to a constant
const buttonClick = require("../button");

// Add Jest directive that runs before each test is run
beforeEach(() => {
    // Add the node fs module, a file system handling module
    // that allows us to open, read and write files
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Add a top parent describe block that contains the test and what we expect
describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("YOU Clicked");
    });
    // Add a test to see if H1 exists
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});