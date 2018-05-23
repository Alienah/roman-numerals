describe("Roman Numerals", () => {
    it("converts numbers to Roman numerals", () => {
        var romanNumerals = require("../src/romanNumerals");

        expect(romanNumerals.fromNumber(1)).toBe("I");
    });
});