// export default function RomanNumerals () {
function romanNumerals () {
    const numerals = [
        {
            value: 4,
            numeral: "IV"
        },
        {
            value: 1,
            numeral: "I"
        }
    ];
    function fromNumber(n) {
        let resultInRoman = "";
        numerals.forEach(function(item){
            while (n >= item.value) {
                resultInRoman = resultInRoman + item.numeral;
                n = n -item.value;
            }
        });
       
        return resultInRoman;
    }
    return {
        fromNumber: fromNumber
    };
}

if (typeof(module) != 'undefined') {
    module.exports = romanNumerals;
}

