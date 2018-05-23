// export default function RomanNumerals () {
function romanNumerals () {
    function fromNumber(n) {
        if (n === 2) {
            return "II";
        } else if (n === 3) {
            return "III";
        }
        return "I";
    }
    return {
        fromNumber: fromNumber
    };
}

if (typeof(module) != 'undefined') {
    module.exports = romanNumerals;
}

