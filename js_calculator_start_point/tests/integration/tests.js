var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    running_total = element(by.css('#running_total'))
    zero = element(by.css('#number0'));
    two = element(by.css('#number2'));
    three = element(by.css('#number3'));
    four = element(by.css('#number4'));
    eight = element(by.css('#number8'));
    add = element(by.css('#operator_add'));
    subtract = element(by.css('#operator_subtract'));
    divide = element(by.css('#operator_divide'));
    multiply = element(by.css('#operator_multiply'));
    equals = element(by.css('#operator_equals'));
  });

  // write integration tests here in the form of "it should do something..."
 it('should have working number buttons', function(){
    element(by.css('#number1')).click();
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('19')
 });

 it('should add 2 and 4 to make 6', function(){
    two.click();
    add.click();
    four.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
 })

 it('should subtract 2 from 4 to make 2', function(){
  four.click();
  subtract.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2')
 })

 it('should divide 4 by 2 to give 2', function(){
  four.click();
  divide.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2')
 })

 it('should multiply 4 by 2 to give 8', function(){
  four.click();
  multiply.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8')
 })

 it('should chain multiple operations together', function(){
  four.click();
  two.click();
  add.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('42')
  three.click();
  subtract.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('45')
  three.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('42')
 })

 it('should work with a negative numbers', function(){
  four.click();
  add.click();
  two.click();
  subtract.click();
  eight.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-2')  
 })

 it('should work with decimals', function(){
  four.click();
  add.click();
  four.click();
  divide.click();
  three.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.6666666666666665')  
 })

 it('should work with large numbers', function(){
  four.click();
  four.click();
  four.click();
  four.click();
  four.click();
  four.click();
  multiply.click();
  two.click();
  two.click();
  two.click();
  two.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('987554568') 
 })

 it('should work if you divide by 0', function(){
  four.click();
  divide.click();
  zero.click();
  equals.click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0') 
 })

});























