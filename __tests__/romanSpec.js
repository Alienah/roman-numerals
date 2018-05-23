import romanNumerals from "../src/romanNumerals";
// const romanNumerals = require("../src/romanNumerals");
describe("Roman Numerals", () => {
    let app;
    beforeEach(function (){
        app = romanNumerals();
    });
    it("converts numbers to Roman numerals", () => {
        expect(app.fromNumber(1)).toBe("I");
        expect(app.fromNumber(2)).toBe("II");
        expect(app.fromNumber(3)).toBe("III");
        expect(app.fromNumber(4)).toBe("IV");
        expect(app.fromNumber(2648)).toBe("MMDCXLVIII");
    });
});