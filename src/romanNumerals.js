// export default function RomanNumerals () {
function romanNumerals () {
    function fromNumber() {
        return "I";
    }
    return {
        fromNumber: fromNumber
    };
}

if (typeof(module) != 'undefined') {
    module.exports = romanNumerals;
}

