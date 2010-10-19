var vows = require('vows'),
    assert = require('assert'),
    check = function(num, expected) {
        return function(topic) {
            assert.equal(topic.toRoman(num), expected);
        };
    },
    lookup = [
        { num: 100, roman :'C'},
        { num: 90, roman :'XC'},
        { num: 50, roman :'L'},
        { num: 40, roman :'XL'},
        { num: 10, roman :'X'},
        { num: 9, roman :'IX'},
        { num: 5, roman :'V'},
        { num: 4, roman :'IV'},
        { num: 1, roman :'I'},
    ],
    toRoman = function (num) {
        var result = '';
        lookup.forEach(function(comb) {
            while (num >= comb.num) {
                result += comb.roman;
                num -= comb.num;
            }
        });
        return result;
    };

    vows.describe('Konverter').addBatch({
        'wandelt dezimale in einfache römische Zahlen um': {
            topic: { toRoman: toRoman },
            '1 wird zu I': check(1, 'I'),
            '2 wird zu II': check(2, 'II'),
            '3 wird zu III': check(3, 'III'),
            '5 wird zu V': check(5, 'V'),
            '10 wird zu X': check(10, 'X'),
        },
        'wandelt dezimale in kombiniertei römische Zahlen um': {
            topic: { toRoman: toRoman },
            '6 wird zu VI': check(6, 'VI'),
            '4 wird zu IV': check(4, 'IV'),
            '8 wird zu VIII': check(8, 'VIII'),
            '9 wird zu IX': check(9, 'IX'),
            '14 wird zu XIV': check(14, 'XIV'),
            '23 wird zu XXIII': check(23, 'XXIII'),
            '42 wird zu XLII': check(42, 'XLII'),
            '99 wird zu XCIX': check(99, 'XCIX'),
            '100 wird zu C': check(100, 'C'),
        }
}).export(module);

