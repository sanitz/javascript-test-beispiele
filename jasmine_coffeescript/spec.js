(function() {
  describe('primefactors', function() {
    var factor, tests, x;
    factor = function(n) {
      var divisor, factors;
      factors = [];
      divisor = 1;
      while (n > 1 && (divisor += 1)) {
        while (n % divisor === 0) {
          factors.push(divisor);
          n /= divisor;
        }
        if (divisor > Math.sqrt(n)) {
          divisor = n - 1;
        }
      }
      return factors;
    };
    tests = {
      1: [],
      2: [2],
      3: [3],
      4: [2, 2],
      5: [5],
      6: [2, 3],
      7: [7],
      8: [2, 2, 2],
      9: [3, 3],
      10: [2, 5],
      11: [11],
      100: [2, 2, 5, 5],
      'Math.pow(2, 100)': (function() {
        var _results;
        _results = [];
        for (x = 1; x <= 100; x++) {
          _results.push(2);
        }
        return _results;
      })(),
      '2 * 2 * 7 * 13 * 151 * 199 * 199': [2, 2, 7, 13, 151, 199, 199],
      'Math.pow(2, 19) - 1': [Math.pow(2, 19) - 1]
    };
    return _.each(tests, function(expected, n) {
      return it("should factor " + n, function() {
        return expect(factor(eval(n))).toEqual(expected);
      });
    });
  });
}).call(this);
