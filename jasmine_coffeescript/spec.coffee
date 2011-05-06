describe 'primefactors', ->
  factor = (n) ->
    factors = []
    divisor = 1
    while n > 1 and divisor += 1
      while n % divisor is 0
        factors.push divisor
        n /= divisor
      divisor = n - 1 if divisor > Math.sqrt(n)
    factors

  tests =
    1: []
    2: [2]
    3: [3]
    4: [2, 2]
    5: [5]
    6: [2, 3]
    7: [7]
    8: [2, 2, 2]
    9: [3, 3]
    10: [2, 5]
    11: [11]
    100: [2, 2, 5, 5]
    'Math.pow(2, 100)': (2 for x in [1..100])
    '2 * 2 * 7 * 13 * 151 * 199 * 199': [2, 2, 7, 13, 151, 199, 199]
    'Math.pow(2, 19) - 1':  [ Math.pow(2, 19) - 1 ]

  _.each tests, (expected, n) ->
    it "should factor #{n}", ->
      expect(factor eval n ).toEqual expected

