export default function RomanNumerals () {
// function romanNumerals () {
    const numeralCreator = function (value, numeral) {
        return {
            value: value,
            numeral: numeral
        };
    };
    const numerals = [
        numeralCreator(1000, "M"),
        numeralCreator(900, "CM"),
        numeralCreator(500, "D"),
        numeralCreator(400, "CD"),
        numeralCreator(100, "C"),
        numeralCreator(90, "XC"),
        numeralCreator(50, "L"),
        numeralCreator(40, "XL"),
        numeralCreator(10, "X"),
        numeralCreator(9, "IX"),
        numeralCreator(5, "V"),
        numeralCreator(4, "IV"),
        numeralCreator(1, "I") 
    ];
    function fromNumber(n) {
        let resultInRoman = "";
        numerals.forEach(function(item){
            for (n; n >= item.value; n -= item.value ){
                resultInRoman += item.numeral;               
            }
        });       
        return resultInRoman;
    }
    return {
        fromNumber: fromNumber
    };
}

// if (typeof(module) != 'undefined') {
//     module.exports = romanNumerals;
// }

