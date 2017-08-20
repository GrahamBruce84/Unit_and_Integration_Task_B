var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
    calculator.previousTotal = 10;
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 8 to the previous total', function(){
    calculator.add(8);
    assert.equal(calculator.runningTotal, 18);
  })

  it('should add -8 to the previous total', function(){
    calculator.add(-8);
    assert.equal(calculator.runningTotal, 2);
  })

  it('should add 2000 to the previous total',  function(){
    calculator.previousTotal = -20;
    calculator.add(2000);
    assert.equal(calculator.runningTotal, 1980);
  })

  it('should subtract 6 from previous total', function(){
    calculator.subtract(6);
    assert.equal(calculator.runningTotal, 4);
  })

  it('should subtract 20 from the previous total', function(){
    calculator.subtract(20);
    assert.equal(calculator.runningTotal, -10);
  })

  it('should subtract -5 from the previous total', function(){
    calculator.subtract(-5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('should multiply the previous total by 4', function(){
    calculator.multiply(4);
    assert.equal(calculator.runningTotal, 40);
  })

  it('should multiply the previous total by -3', function(){
    calculator.multiply(-3);
    assert.equal(calculator.runningTotal, -30);
  })

  it('should multiply the previous total by 2000', function(){
    calculator.multiply(2000);
    assert.equal(calculator.runningTotal, 20000);
  })

  it('should divide the previous total by 2', function(){
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 5);
  })

  it('should divide the previous total by -6', function(){
    calculator.divide(-6);
    assert.equal(calculator.runningTotal, -1.6666666666666667);
  })

  it('should divide the previous total by 8', function(){
    calculator.previousTotal = -20;
    calculator.divide(8);
    assert.equal(calculator.runningTotal, -2.5);
  })

  it('should concatenate the numbers 3,4 and 5 to make 345', function(){
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 345);
  })

  it('should concatenate the numbers -5, 9 and 6 to make -596', function(){
    calculator.numberClick(-5);
    calculator.numberClick(9);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal, -596);
  })

  it('should add 2 and 4 then subtract 6 to make 0', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 0);
  })

  it('should divide 100 by 5 then multiply by 4', function(){
    calculator.numberClick(100);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 80);
  })

  it('should clr the running total', function(){
    calculator.numberClick(5);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('should clr the running total after adding 8 to the previous total', function(){
    calculator.add(8);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('should clr the running total after adding 8 and subtracting 7 from the previous total', function(){
    calculator.add(8);
    calculator.subtract(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 11);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
