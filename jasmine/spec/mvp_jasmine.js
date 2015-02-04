describe('Konvertierung (model)', function() {
    it('wandelt einfache Zahlen um', function() {
      expect(roman.model.toRoman(1)).toEqual('I');
      expect(roman.model.toRoman(2)).toEqual('II');
      expect(roman.model.toRoman(10)).toEqual('X');
      expect(roman.model.toRoman(50)).toEqual('L');
      expect(roman.model.toRoman(100)).toEqual('C');
      expect(roman.model.toRoman(500)).toEqual('D');
      expect(roman.model.toRoman(2000)).toEqual('MM');
    });
    it('wandelt kombinierte Zahlen um', function() {
      expect(roman.model.toRoman(6)).toEqual('VI');
      expect(roman.model.toRoman(12)).toEqual('XII');
      expect(roman.model.toRoman(2010)).toEqual('MMX');
      expect(roman.model.toRoman(150)).toEqual('CL');
    });
    it('wandelt Zahlen nach Substraktionsregel um', function() {
      expect(roman.model.toRoman(4)).toEqual('IV');
      expect(roman.model.toRoman(9)).toEqual('IX');
      expect(roman.model.toRoman(900)).toEqual('CM');
    });
    it('und ist dabei nicht streng', function() {
      expect(roman.model.safeToRoman('4')).toEqual('IV');
      expect(roman.model.safeToRoman('9')).toEqual('IX');
      expect(roman.model.safeToRoman('foo')).toEqual('???');
    });
});

describe('Anzeige römischer Zahlen', function () {
    var anzeige, eingabe, ausgabe;

    beforeEach(function() {
        eingabe = $("<input/>");
        ausgabe = $("<span></span>");
        anzeige = new roman.view.neueAnzeige(eingabe, ausgabe);
    });

    describe('Die Anzeige', function() {
        it('soll bei Eingabe in das Feld benachrichtigen', function() {
            spyOn(anzeige, 'beiEingabe');
            eingabe.val('foo').trigger('keyup');
            expect(anzeige.beiEingabe).toHaveBeenCalledWith('foo');
        });
        it('soll das Ergebnis anzeigen', function() {
            anzeige.zeigeErgebnis('bar');
            expect(ausgabe.text()).toEqual('bar');
        });
    });
});

describe('Interaktion', function () {
    var anzeige;

    beforeEach(function() {
        anzeige = new roman.view.neueAnzeige($("<input/>"), $("<span></span>"));
        spyOn(anzeige, 'zeigeErgebnis');
        roman.presenter.init(anzeige);
    });

    it('Wenn der Benutzer Zahlen eingibt, wird die römische Variante angezeigt', function() {
        anzeige.beiEingabe('42');
        expect(anzeige.zeigeErgebnis).toHaveBeenCalledWith('XLII');
    });

    it('Wenn der Benutzer Buchstaben eingibt, werden Fragezeichen angezeigt', function() {
        anzeige.beiEingabe('foo');
        expect(anzeige.zeigeErgebnis).toHaveBeenCalledWith('???');
    });
});

