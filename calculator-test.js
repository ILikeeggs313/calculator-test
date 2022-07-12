
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {amount : 10000, years: 10, rate : 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {amount : 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});

/// etc
afterEach(function(){
  amount = 0;
  years = 0;
  rate = 0;
})