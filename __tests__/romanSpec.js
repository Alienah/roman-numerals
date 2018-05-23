// import romanNumerals from "../src/romanNumerals";
const romanNumerals = require("../src/romanNumerals");
describe("Roman Numerals", () => {
    beforeEach(function (){
        app = romanNumerals();
    });
    it("converts numbers to Roman numerals", () => {
        expect(app.fromNumber(1)).toBe("I");
        
    });
});