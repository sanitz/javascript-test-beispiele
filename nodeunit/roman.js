var testCase = require('nodeunit').testCase;

//code
var lookup = [
    { num: 100, roman :'C'},
    { num: 90, roman :'XC'},
    { num: 50, roman :'L'},
    { num: 40, roman :'XL'},
    { num: 10, roman :'X'},
    { num: 9, roman :'IX'},
    { num: 5, roman :'V'},
    { num: 4, roman :'IV'},
    { num: 1, roman :'I'},
];
var toRoman = function (num) {
    var result = '';
    lookup.forEach(function(comb) {
        while (num >= comb.num) {
            result += comb.roman;
            num -= comb.num;
        }
    });
    return result;
};

//test
module.exports = testCase({
    'wandelt dezimale in einfache römische Zahlen um': function (test) {
        test.equals(toRoman(1), 'I', '1 wird zu I');
        test.equals(toRoman(2), 'II', '2 wird zu II');
        test.equals(toRoman(3), 'III', '3 wird zu III');
        test.equals(toRoman(5), 'V', '5 wird zu V');
        test.equals(toRoman(10), 'X', '10 wird zu X');        
        test.done();
    },
    'wandelt dezimale in kombinierte römische Zahlen um': function (test) {
        test.equals(toRoman(6), 'VI',   '6 wird zu VI');
        test.equals(toRoman(4), 'IV',   '4 wird zu IV');
        test.equals(toRoman(8), 'VIII', '8 wird zu VIII');
        test.equals(toRoman(9), 'IX',   '9 wird zu IX');
        test.equals(toRoman(14), 'XIV', '14 wird zu XIV');
        test.equals(toRoman(23), 'XXIII', '23 wird zu XXIII');
        test.equals(toRoman(42), 'XLII', '42 wird zu XLII');
        test.equals(toRoman(99), 'XCIX', '99 wird zu XCIX');
        test.equals(toRoman(100), 'C', '100 wird zu C');
        test.done();
    }
});