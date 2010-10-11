/*global jQuery */ 

var roman = {};

roman.model = (function () {
    var lookup = [
        { dec: 1000, roman: 'M'},
        { dec: 900, roman:  'CM'},
        { dec: 500, roman:  'D'},
        { dec: 400, roman:  'CD'},
        { dec: 100, roman:  'C'},
        { dec: 90, roman:   'XC'},
        { dec: 50, roman:   'L'},
        { dec: 40, roman:   'XL'},
        { dec: 10, roman:   'X'},
        { dec: 9, roman:    'IX'},
        { dec: 5, roman:    'V'},
        { dec: 4, roman:    'IV'},
        { dec: 1, roman:    'I'}
    ];

    return {
        toRoman: function (num) {
            var result = '';

            lookup.forEach(function (c) {
                while (num >= c.dec) {
                    result += c.roman;
                    num -= c.dec;
                }
            });
            return result;
        },
        safeToRoman: function (eingabe) {
            var num = parseInt(eingabe, 10);
            return isNaN(num) ? '???' : this.toRoman(num);
        }
    };
}());

roman.view = (function (jQuery) {
    var Anzeige = function (eingabeFeld, ausgabeFeld) {
        this.eingabeFeld = eingabeFeld;
        this.ausgabeFeld = ausgabeFeld;
        var anzeige = this;

        eingabeFeld.keyup(function () {
            anzeige.beiEingabe(anzeige.eingabeFeld.val()); 
        });
    }; 
    Anzeige.prototype.zeigeErgebnis = function (ergebnis) {
        this.ausgabeFeld.text(ergebnis);
    };
    Anzeige.prototype.beiEingabe = function () {};

    return {
        neueAnzeige: function (eingabeFeld, ausgabeFeld) {
            return new Anzeige(eingabeFeld, ausgabeFeld);
        }
    };
}(jQuery));

roman.presenter = (function (model, view) {
    return {
        init: function (anzeige) {
            anzeige.beiEingabe = function (eingabe) {
                anzeige.zeigeErgebnis(model.safeToRoman(eingabe));
            };            
        },
        start: function (eingabeFeld, ausgabeFeld) {
            this.init(view.neueAnzeige(eingabeFeld, ausgabeFeld));
        }
    };
}(roman.model, roman.view));

