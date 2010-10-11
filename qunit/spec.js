var toRoman = function(num) {
        var result = '',
            lookup = [
                { dec: 10, roman: 'X'},
                { dec: 9, roman: 'IX'},
                { dec: 5, roman: 'V'},  
                { dec: 4, roman: 'IV'},    
                { dec: 1, roman: 'I'}    
            ];

        lookup.forEach(function(c) {        
            while (num >= c.dec) {
                result += c.roman;
                num -= c.dec;
            }
        }); 
        return result;
    };

$(document).ready(function(){
    test('Wandelt einfache Zahlen um', function() {
        expect(3);
        equals(toRoman(1),  'I', '1 wird zu I');
        equals(toRoman(5),  'V', '5 wird zu V');
        equals(toRoman(10), 'X', '10 wird zu X');
    });
    test('Wandelt kombinierte Zahlen um', function() {
        expect(3);
        equals(toRoman(4),  'IV',  '4 wird zu IV');
        equals(toRoman(16), 'XVI', '16 wird zu XVI');
        equals(toRoman(9),  'IX',  '9 wird zu IX');
    });
});
