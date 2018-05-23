// export default function RomanNumerals () {
function romanNumerals () {
    function fromNumber(n) {
        let resultInRoman = "";
        while (n > 0) {
            resultInRoman += "I";
            n --;
        }
        return resultInRoman;
    }
    return {
        fromNumber: fromNumber
    };
}

if (typeof(module) != 'undefined') {
    module.exports = romanNumerals;
}

