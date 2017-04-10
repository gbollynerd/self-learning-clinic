// testing code goes here

'use strict'
//import JasmineExpect from 'jasmine-expect';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/app.js');

describe("Generate Prime Numbers", function() {
  it("given a value of 22 expect [2, 3, 5, 7, 11, 13, 17, 19]", function() {
    expect(myApp.getPrimes(22).toBeArray([2, 3, 5, 7, 11, 13, 17, 19]));
  })
  it("given a value of 13 expect [2, 3, 5, 7, 11]", function() {
    expect(myApp.getPrimes(13).toBeArray([2, 3, 5, 7, 11]));
  })
  it("given a value of 13 expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]", function() {
    expect(myApp.getPrimes(35).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]));
  })
  it("given a value of 40 expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]", function() {
    expect(myApp.getPrimes(40).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]));
  })
  it("given a value of 60 expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]", function() {
    expect(myApp.getPrimes(60).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]));
  })
  it("given a value of 60 expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]", function() {
    expect(myApp.getPrimes(80).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]));
  })
  it("given a value of 13 expect [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]", function() {
    expect(myApp.getPrimes(104).toBeArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]));
  })
})
